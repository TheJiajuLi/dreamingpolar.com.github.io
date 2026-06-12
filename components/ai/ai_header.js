import { ask, SYSTEM_PYTHON, SYSTEM_BY_MODE } from './ai_client.js';
import { getCurrentMode, setMode } from '../compiler/compiler_mode_switcher/compiler_mode_switcher.js';
import { detectLang } from './input_filter/input_filter.js';

const SUGGESTIONS = [
  'Plot a sine wave from 0 to 2π',
  'Solve x² + 5x + 6 = 0 using sympy',
  'Generate a 3D surface plot of z = sin(x)·cos(y)',
  'Compute the derivative of x³ + 2x² − 5x + 3',
  'Plot the normal distribution with mean=0 and std=1',
  'Find eigenvalues of a random 3×3 matrix',
  'Animate a bouncing ball with matplotlib',
  'Plot a Lorenz attractor',
];

function getSuggestion(typed) {
  if (!typed.trim()) return null;
  const low = typed.toLowerCase();
  return SUGGESTIONS.find(s => s.toLowerCase().startsWith(low)) ?? null;
}

function setup() {
  const header = document.querySelector('header.page-header');
  if (!header) return;

  const btn = document.createElement('button');
  btn.className = 'ai-header-btn';
  btn.id        = 'ai-header-btn';
  btn.title     = 'Ask 小梦';
  btn.innerHTML = `<img src="${window.BASE}/assets/buttons/ai.png" alt="AI" class="ai-header-icon">`;

  const dialog = document.createElement('div');
  dialog.className = 'ai-header-dialog';
  dialog.innerHTML = `
    <div class="ai-dialog-main">
      <div class="ai-input-wrap">
        <div class="ai-ghost-overlay" aria-hidden="true">
          <span class="ai-ghost-typed"></span><span class="ai-ghost-rest"></span>
        </div>
        <input class="ai-header-input" type="text" autocomplete="off" spellcheck="false"
               placeholder="友友, 有什么需要帮助的吗 (如，请帮我绘制一个洛伦兹吸引子)">
      </div>
      <button class="ai-header-submit">go</button>
      <button class="ai-header-cancel">✕</button>
    </div>
    <div class="ai-chips-row">
      ${SUGGESTIONS.map(s => `<button class="ai-chip" data-value="${s}">${s}</button>`).join('')}
    </div>
  `;

  header.appendChild(btn);
  header.appendChild(dialog);

  const input      = dialog.querySelector('.ai-header-input');
  const submit     = dialog.querySelector('.ai-header-submit');
  const cancel     = dialog.querySelector('.ai-header-cancel');
  const ghostTyped = dialog.querySelector('.ai-ghost-typed');
  const ghostRest  = dialog.querySelector('.ai-ghost-rest');
  const chips      = dialog.querySelectorAll('.ai-chip');

  function updateGhost() {
    const typed = input.value;
    const match = getSuggestion(typed);
    if (match && match.length > typed.length) {
      ghostTyped.textContent = typed;
      ghostRest.textContent  = match.slice(typed.length);
    } else {
      ghostTyped.textContent = '';
      ghostRest.textContent  = '';
    }
    ghostTyped.parentElement.scrollLeft = input.scrollLeft;
  }

  function fillInput(text) {
    input.value = text;
    input.setSelectionRange(text.length, text.length);
    input.focus();
    updateGhost();
  }

  function acceptGhost() {
    const typed = input.value;
    const match = typed.trim() ? getSuggestion(typed) : SUGGESTIONS[0];
    if (match && match.length > typed.length) {
      fillInput(match);
    }
  }

  function open() {
    dialog.classList.add('visible');
    input.focus();
    updateGhost();
  }
  function close() {
    dialog.classList.remove('visible');
    input.value = '';
    ghostTyped.textContent = '';
    ghostRest.textContent  = '';
    submit.textContent = 'go';
    submit.disabled = false;
    btn.disabled = false;
  }

  btn.addEventListener('click', () => dialog.classList.contains('visible') ? close() : open());
  cancel.addEventListener('click', close);
  input.addEventListener('input', updateGhost);
  input.addEventListener('scroll', () => {
    ghostTyped.parentElement.scrollLeft = input.scrollLeft;
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => fillInput(chip.dataset.value));
  });

  async function generate() {
    const prompt = input.value.trim();
    if (!prompt) return;

    const currentMode = getCurrentMode?.() ?? 'python';
    const targetLang  = detectLang(prompt, currentMode);

    // ── Conversational → route to chat screen, skip code generation ──────
    if (targetLang === 'ai_chat') {
      document.dispatchEvent(new CustomEvent('ai-chat-send', { detail: { text: prompt } }));
      close();
      return;
    }

    // ── Engineering → generate code and send to compiler ─────────────────
    btn.disabled    = true;
    submit.disabled = true;
    submit.textContent = '…';

    try {
      const system = SYSTEM_BY_MODE[targetLang] ?? SYSTEM_PYTHON;
      const code   = await ask(prompt, system);

      if (currentMode === 'customise') {
        document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code, lang: targetLang } }));
      } else {
        setMode(targetLang);
        document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code } }));
      }
      close();
    } catch (e) {
      submit.textContent = 'Error';
      setTimeout(() => { submit.textContent = 'go'; submit.disabled = false; btn.disabled = false; }, 1800);
      return;
    }

    submit.textContent = 'go';
    submit.disabled = false;
    btn.disabled    = false;
  }

  submit.addEventListener('click', generate);
  input.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      acceptGhost();
      return;
    }
    if (e.key === 'ArrowRight' && input.selectionStart === input.value.length) {
      const match = getSuggestion(input.value);
      if (match && match.length > input.value.length) {
        e.preventDefault();
        acceptGhost();
        return;
      }
      input.scrollLeft = input.scrollWidth;
      return;
    }
    if (e.key === 'Enter')  { e.preventDefault(); generate(); }
    if (e.key === 'Escape') close();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
