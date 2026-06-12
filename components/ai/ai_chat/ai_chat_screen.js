// ── AI Chat Screen ────────────────────────────────────────────────────────────
//
//  Registers the #ai-chat-screen panel with screenController.
//  Opens when compiler mode switches to 'ai_chat'; closes otherwise.
//  Also listens to the 'ai-chat-send' event dispatched by ai_header.js
//  when input_filter routes a prompt as conversational.

import { sendMessage, getHistory, clearHistory, getRemainingTokens } from './ai_chat.js';
import { getCurrentMode } from '../../compiler/compiler_mode_switcher/compiler_mode_switcher.js';

const SCREEN_ID = 'ai-chat';

function escHtml(str) {
  return (str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function makeBubble(role, content) {
  const wrap  = document.createElement('div');
  wrap.className = `aic-bubble aic-bubble--${role}`;
  const inner = document.createElement('div');
  inner.className = 'aic-bubble-inner';
  inner.innerHTML = escHtml(content).replace(/\n/g, '<br>');
  wrap.appendChild(inner);
  return wrap;
}

function setupAiChatScreen() {
  const screen = document.getElementById('ai-chat-screen');
  if (!screen) return;

  screen.innerHTML = `
    <div class="aic-header">
      <span class="aic-label">Chat · 小梦</span>
      <div class="sc-toolbar">
        <button class="sc-btn" id="aic-clear-btn" title="Clear chat">⊘</button>
        <button class="sc-btn" id="aic-max-btn"   title="Maximize">⤢</button>
        <button class="sc-btn" id="aic-min-btn"   title="Minimize">−</button>
      </div>
    </div>
    <div class="aic-messages" id="aic-messages"></div>
    <div class="aic-input-bar">
      <div class="aic-token-row">
        每日额度剩余：<span id="aic-tokens">—</span> tokens
      </div>
      <div class="aic-input-row">
        <textarea
          id="aic-textarea"
          class="aic-textarea"
          rows="2"
          placeholder="和小梦聊聊… (Enter 发送，Shift+Enter 换行)"
          spellcheck="false"
          autocomplete="off"
        ></textarea>
        <button class="aic-send-btn" id="aic-send">→</button>
      </div>
    </div>
  `;

  const messagesEl = document.getElementById('aic-messages');
  const textarea   = document.getElementById('aic-textarea');
  const sendBtn    = document.getElementById('aic-send');
  const clearBtn   = document.getElementById('aic-clear-btn');
  const maxBtn     = document.getElementById('aic-max-btn');
  const minBtn     = document.getElementById('aic-min-btn');
  const tokensEl   = document.getElementById('aic-tokens');

  // ── screenController wiring ──────────────────────────────────────────────
  function syncMaxBtn(state) {
    if (maxBtn) maxBtn.textContent = state === 'maximized' ? '⤡' : '⤢';
  }

  requestAnimationFrame(() => {
    const sc = window.screenController;
    sc?.register(SCREEN_ID, screen, { onStateChange: syncMaxBtn, label: 'Chat' });
    // Start closed; opens only when ai_chat mode is active
    if (getCurrentMode() !== 'ai_chat') sc?.close(SCREEN_ID);
    maxBtn?.addEventListener('click', () => sc?.toggle(SCREEN_ID));
    minBtn?.addEventListener('click', () => sc?.minimize(SCREEN_ID));
  });

  // ── Helpers ──────────────────────────────────────────────────────────────
  function refreshTokens() {
    if (tokensEl) tokensEl.textContent = getRemainingTokens().toLocaleString();
  }

  function scrollBottom() {
    requestAnimationFrame(() => { messagesEl.scrollTop = messagesEl.scrollHeight; });
  }

  function renderHistory() {
    messagesEl.innerHTML = '';
    getHistory().forEach(({ role, content }) => {
      if (role === 'user' || role === 'assistant') {
        messagesEl.appendChild(makeBubble(role, content));
      }
    });
    scrollBottom();
  }

  refreshTokens();
  renderHistory();

  // ── Send logic ────────────────────────────────────────────────────────────
  async function doSend(text) {
    text = text.trim();
    if (!text) return;
    textarea.value = '';
    sendBtn.disabled = true;
    sendBtn.textContent = '…';

    messagesEl.appendChild(makeBubble('user', text));

    // Streaming: create bubble immediately, fill character by character
    const replyBubble = makeBubble('assistant', '');
    const replyInner  = replyBubble.querySelector('.aic-bubble-inner');
    replyBubble.classList.add('aic-thinking');
    messagesEl.appendChild(replyBubble);
    scrollBottom();

    try {
      let accumulated = '';
      await sendMessage(text, {
        onChunk(chunk) {
          accumulated += chunk;
          replyInner.textContent = accumulated;
          scrollBottom();
        },
      });
      replyBubble.classList.remove('aic-thinking');
    } catch (e) {
      replyBubble.remove();
      const err = makeBubble('assistant', `⚠ ${e.message}`);
      err.classList.add('aic-bubble--error');
      messagesEl.appendChild(err);
    }

    refreshTokens();
    scrollBottom();
    sendBtn.disabled = false;
    sendBtn.textContent = '→';
  }

  sendBtn.addEventListener('click', () => doSend(textarea.value));
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(textarea.value); }
  });

  clearBtn?.addEventListener('click', () => {
    clearHistory();
    messagesEl.innerHTML = '';
    refreshTokens();
  });

  // ── Open/close driven by mode switcher ───────────────────────────────────
  document.addEventListener('compiler-mode-change', ({ detail: { mode } }) => {
    const sc = window.screenController;
    if (mode === 'ai_chat') {
      sc?.close('compiling');
      sc?.open(SCREEN_ID);
      textarea?.focus();
    } else {
      sc?.close(SCREEN_ID);
      sc?.open('compiling');
    }
  });

  // ── ai_header.js routes conversational prompts here ──────────────────────
  document.addEventListener('ai-chat-send', ({ detail: { text } }) => {
    const sc = window.screenController;
    sc?.close('compiling');
    sc?.open(SCREEN_ID);
    doSend(text);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAiChatScreen);
} else {
  setupAiChatScreen();
}
