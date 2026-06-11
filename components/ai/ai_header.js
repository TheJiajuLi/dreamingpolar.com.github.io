import { ask, SYSTEM_PYTHON, SYSTEM_LATEX } from './ai_client.js';
import { getCurrentMode } from '../compiler/compiler_mode_switcher/compiler_mode_switcher.js';

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
    <input class="ai-header-input" type="text" autocomplete="off" spellcheck="false"
           placeholder="Tell 小梦 what to code…">
    <button class="ai-header-submit">Generate</button>
    <button class="ai-header-cancel">✕</button>
  `;

  header.appendChild(btn);
  header.appendChild(dialog);

  const input  = dialog.querySelector('.ai-header-input');
  const submit = dialog.querySelector('.ai-header-submit');
  const cancel = dialog.querySelector('.ai-header-cancel');

  function open()  { dialog.classList.add('visible'); input.focus(); }
  function close() { dialog.classList.remove('visible'); input.value = ''; submit.textContent = 'Generate'; }

  btn.addEventListener('click', () => dialog.classList.contains('visible') ? close() : open());
  cancel.addEventListener('click', close);

  async function generate() {
    const prompt = input.value.trim();
    if (!prompt) return;
    btn.disabled    = true;
    submit.disabled = true;
    submit.textContent = '…';

    try {
      const mode   = getCurrentMode?.() ?? 'python';
      const system = mode === 'latex' ? SYSTEM_LATEX : SYSTEM_PYTHON;
      const code   = await ask(prompt, system);
      document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code } }));
      close();
    } catch (e) {
      submit.textContent = 'Error';
      setTimeout(() => { submit.textContent = 'Generate'; submit.disabled = false; btn.disabled = false; }, 1800);
      return;
    }

    submit.textContent = 'Generate';
    submit.disabled = false;
    btn.disabled    = false;
  }

  submit.addEventListener('click', generate);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); generate(); }
    if (e.key === 'Escape') close();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
