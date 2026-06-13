import { getCurrentMode } from '../compiler/compiler_mode_switcher/compiler_mode_switcher.js';

function setup() {
  const header = document.querySelector('header.page-header');
  if (!header) return;

  const btn = document.createElement('button');
  btn.className = 'ai-header-btn';
  btn.id        = 'ai-header-btn';
  btn.title     = 'Open AI chat';
  btn.setAttribute('aria-label', 'Toggle AI chat');
  btn.innerHTML = `<img src="${window.BASE}/assets/buttons/ai.png" alt="AI" class="ai-header-icon">`;

  header.appendChild(btn);

  function syncActive() {
    const state  = window.screenController?.getState('ai-chat');
    const isOpen = state === 'normal' || state === 'maximized';
    btn.classList.toggle('active', isOpen);
    btn.title = isOpen ? 'Close AI chat' : 'Open AI chat';
  }

  document.addEventListener('screen-opened',    ({ detail }) => { if (detail.id === 'ai-chat') syncActive(); });
  document.addEventListener('screen-closed',    ({ detail }) => { if (detail.id === 'ai-chat') syncActive(); });
  document.addEventListener('screen-minimized', ({ detail }) => { if (detail.id === 'ai-chat') syncActive(); });
  requestAnimationFrame(() => requestAnimationFrame(syncActive));

  btn.addEventListener('click', () => {
    const sc    = window.screenController;
    const state = sc?.getState('ai-chat');
    if (state === 'normal' || state === 'maximized') {
      sc?.close('ai-chat');
    } else {
      sc?.open('ai-chat');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
