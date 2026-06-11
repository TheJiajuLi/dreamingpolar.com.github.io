import { mountModeSwitcher, getCurrentMode } from '../../compiler/compiler_mode_switcher/compiler_mode_switcher.js';
import { init as initNotebook } from '../../customise_code_block/customise_code_block.js';
import { compile, preloadPython } from '../../compiler/compiler.js';
import { createClearCellsBtn } from './coding_screen_utility.js';
import { isEnabled as icmEnabled, onChange as icmOnChange, mount as mountICM } from './intelligent_coding_mode/intelligent_coding_mode.js';
import * as SyntaxHL from './coding_screen_python/python_syntax_highlight/python_syntax_highlight.js';
import * as TextHL   from './coding_screen_python/python_text_highlight/python_text_highlight.js';
import * as Completion from './coding_screen_python/python_code-completion/python_code_completion.js';
import { createImportBtn } from '../../import/import_btn.js';
import { addImportedCell } from '../../customise_code_block/customise_code_block.js';
import { ask, SYSTEM_PYTHON, SYSTEM_LATEX } from '../../ai/ai_client.js';

const CODE_KEY = 'dreaming-polar-code';

const PLACEHOLDERS = {
  python: `# Example — try running this:
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas & numpy are preloaded.
# Ctrl/Cmd+Enter to run.`,

  latex: `\\documentclass{article}
\\begin{document}

The Pythagorean theorem: \\(a^2 + b^2 = c^2\\)

\\[
  \\int_0^\\infty e^{-x^2}\\,dx = \\frac{\\sqrt{\\pi}}{2}
\\]

\\end{document}`,

  mathjax: `Mixed text and math:

The equation \\(E = mc^2\\) changed physics.

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$`,

  markdown: `## Heading

Write **bold**, *italic*, or \`inline code\`.

- Item one
- Item two

> A blockquote.`,
};

function setupCodingScreen() {
  const screen = document.getElementById('coding-screen');
  if (!screen) return;

  screen.innerHTML = `
    <div class="coding-screen-header">
      <div class="cds-header-top">
        <div class="cds-header-left">
          <span class="coding-screen-label">Code</span>
          <div id="cds-runall-slot" class="cds-runall-slot" style="display:none"></div>
        </div>
        <div class="sc-toolbar">
          <button class="sc-btn" id="cds-max-btn" title="Maximize">⤢</button>
          <button class="sc-btn" id="cds-min-btn" title="Minimize">−</button>
        </div>
      </div>
      <div class="cds-header-bottom">
        <div id="cds-mode-slot"></div>
      </div>
    </div>
    <div class="coding-screen-body" id="coding-screen-body">
      <div id="cds-single-view"></div>
      <div id="cds-notebook-view"></div>
    </div>
  `;

  // ── Screen controller ─────────────────────────────────
  const headerToolbar = document.querySelector('#coding-screen .sc-toolbar');
  const clearCellsBtn = createClearCellsBtn();
  headerToolbar?.prepend(clearCellsBtn);

  // Import btn in sc-toolbar (header) — always visible in all modes
  const headerImportBtn = createImportBtn({
    getMode: getCurrentMode,
    onImport(content) {
      if (_editorRef) {
        _editorRef.value = content;
        _editorRef.dispatchEvent(new Event('input'));
        localStorage.setItem(CODE_KEY, content);
      }
    },
    onNotebookImport(content, lang) {
      addImportedCell(lang, content);
    },
  });
  headerToolbar?.prepend(headerImportBtn);

  const maxBtn = document.getElementById('cds-max-btn');
  const minBtn = document.getElementById('cds-min-btn');

  function syncBtn(state) {
    if (maxBtn) maxBtn.textContent = state === 'maximized' ? '⤡' : '⤢';
  }

  requestAnimationFrame(() => {
    window.screenController?.register('coding', screen, { onStateChange: syncBtn, label: 'Code', persisted: true });
    maxBtn?.addEventListener('click', () => window.screenController?.toggle('coding'));
    minBtn?.addEventListener('click', () => window.screenController?.close('coding'));
  });

  // ── Mode switcher in header ───────────────────────────
  mountModeSwitcher(document.getElementById('cds-mode-slot'));

  const singleView   = document.getElementById('cds-single-view');
  const notebookView = document.getElementById('cds-notebook-view');

  // ── Single-cell view ──────────────────────────────────
  const runBtn = document.createElement('button');
  runBtn.className = 'run-btn';
  runBtn.innerHTML = '&#9654; Run';
  runBtn.title = 'Run (Ctrl+Enter)';

  const aiGenBtn = document.createElement('button');
  aiGenBtn.className = 'ai-gen-btn';
  aiGenBtn.innerHTML = '小梦';
  aiGenBtn.title = 'Ask Polar Bear (小梦) to generate code';

  const toolbar = document.createElement('div');
  toolbar.className = 'coding-toolbar';
  const icmSlot = document.createElement('div');
  icmSlot.className = 'cds-icm-slot';
  mountICM(icmSlot);

  toolbar.appendChild(icmSlot);
  toolbar.appendChild(aiGenBtn);
  toolbar.appendChild(runBtn);

  // ── AI prompt row ─────────────────────────────────────────
  const aiPromptRow = document.createElement('div');
  aiPromptRow.className = 'ai-prompt-row';
  aiPromptRow.innerHTML = `
    <span class="ai-prompt-icon">✨</span>
    <input class="ai-prompt-input" type="text" autocomplete="off" spellcheck="false"
           placeholder="Tell 小梦 what to write (e.g. 画一个3D高斯分布)…">
    <button class="ai-prompt-submit">Generate</button>
    <button class="ai-prompt-cancel">✕</button>
  `;

  const editorWrap = document.createElement('div');
  editorWrap.className = 'code-editor-area';

  let _editorRef = null;
  const editor = document.createElement('textarea');
  editor.className    = 'code-editor';
  editor.spellcheck   = false;
  editor.autocorrect  = 'off';
  editor.autocomplete = 'off';
  editor.placeholder  = PLACEHOLDERS[getCurrentMode()] ?? PLACEHOLDERS.python;
  editor.value        = localStorage.getItem(CODE_KEY) ?? '';
  _editorRef = editor;
  editorWrap.appendChild(editor);

  const statusBar = document.createElement('div');
  statusBar.className   = 'compiler-status-bar';
  statusBar.textContent = 'Idle — Python loads on first run.';

  singleView.append(toolbar, aiPromptRow, editorWrap, statusBar);

  // ── Python ICM features ───────────────────────────────────
  function icmActivate() {
    SyntaxHL.init(editor, editorWrap);
    TextHL.init(editor, editorWrap);
    Completion.init(editor, editorWrap);
  }
  function icmDeactivate() {
    SyntaxHL.destroy();
    TextHL.destroy();
    Completion.destroy();
  }
  function syncICM(mode) {
    if (mode !== 'python') return; // features only apply to Python
    if (icmEnabled()) { if (!SyntaxHL.isActive()) icmActivate(); }
    else              { if (SyntaxHL.isActive())  icmDeactivate(); }
  }

  syncICM(getCurrentMode());
  icmOnChange(() => syncICM(getCurrentMode()));

  // ── Notebook view ─────────────────────────────────────
  const runAllSlot = document.getElementById('cds-runall-slot');
  initNotebook(notebookView, runAllSlot);

  // ── Switch between views ──────────────────────────────
  function applyMode(mode) {
    const isCustomise = mode === 'customise';
    singleView.style.display        = isCustomise ? 'none'  : 'flex';
    notebookView.style.display      = isCustomise ? 'flex'  : 'none';
    runAllSlot.style.display        = isCustomise ? 'flex'  : 'none';
    clearCellsBtn.style.display     = isCustomise ? ''      : 'none';
    editor.placeholder = PLACEHOLDERS[mode] ?? PLACEHOLDERS.python;
  }

  applyMode(getCurrentMode());
  document.addEventListener('compiler-mode-change', ({ detail }) => {
    applyMode(detail.mode);
    syncICM(detail.mode);
  });

  // ── Single-cell events ────────────────────────────────
  editor.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const s = editor.selectionStart;
    editor.value = editor.value.slice(0, s) + '    ' + editor.value.slice(editor.selectionEnd);
    editor.selectionStart = editor.selectionEnd = s + 4;
  });

  let _saveTimer = null;
  editor.addEventListener('input', () => {
    clearTimeout(_saveTimer);
    _saveTimer = setTimeout(() => localStorage.setItem(CODE_KEY, editor.value), 400);
  });

  document.addEventListener('compiler-status', ({ detail }) => {
    if (getCurrentMode() === 'customise') return;
    const spinning = detail.status === 'loading' || detail.status === 'running';
    statusBar.className = `compiler-status-bar ${detail.status}`;
    statusBar.innerHTML = spinning
      ? `<span class="status-spinner"></span>${detail.message}`
      : detail.message;
  });

  async function run() {
    const code = editor.value.trim();
    if (!code) return;
    const mode = getCurrentMode();

    if (mode === 'python' && /\binput\s*\(/.test(code)) {
      document.dispatchEvent(new CustomEvent('run-in-terminal', { detail: { code } }));
      return;
    }

    runBtn.disabled = true;
    const outputs = await compile(code, mode);
    runBtn.disabled = false;
    document.dispatchEvent(new CustomEvent('compile-result', { detail: { outputs } }));
  }

  runBtn.addEventListener('click', run);
  editor.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); run(); }
  });

  // ── AI Generate wiring ────────────────────────────────────
  const aiInput    = aiPromptRow.querySelector('.ai-prompt-input');
  const aiSubmit   = aiPromptRow.querySelector('.ai-prompt-submit');
  const aiCancel   = aiPromptRow.querySelector('.ai-prompt-cancel');

  function openAiRow() {
    aiPromptRow.classList.add('visible');
    aiInput.focus();
  }
  function closeAiRow() {
    aiPromptRow.classList.remove('visible');
    aiInput.value = '';
  }

  aiGenBtn.addEventListener('click', () => {
    if (aiPromptRow.classList.contains('visible')) closeAiRow();
    else openAiRow();
  });
  aiCancel.addEventListener('click', closeAiRow);

  async function runAiGenerate() {
    const prompt = aiInput.value.trim();
    if (!prompt) return;
    aiGenBtn.disabled = true;
    aiSubmit.disabled = true;
    aiSubmit.textContent = '…';

    try {
      const mode = getCurrentMode();
      const systemPrompt = (mode === 'latex') ? SYSTEM_LATEX : SYSTEM_PYTHON;
      const code = await ask(prompt, systemPrompt);
      editor.value = code;
      localStorage.setItem(CODE_KEY, code);
      editor.dispatchEvent(new Event('input'));
      closeAiRow();
      if (mode === 'python' || mode === 'latex' || mode === 'mathjax') run();
    } catch (e) {
      aiSubmit.textContent = 'Generate';
      aiSubmit.disabled = false;
      aiGenBtn.disabled = false;
      statusBar.className = 'compiler-status-bar error';
      statusBar.textContent = `小梦: ${e.message}`;
      return;
    }

    aiSubmit.textContent = 'Generate';
    aiSubmit.disabled = false;
    aiGenBtn.disabled = false;
  }

  aiSubmit.addEventListener('click', runAiGenerate);
  aiInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); runAiGenerate(); } });
  aiInput.addEventListener('keydown', e => { if (e.key === 'Escape') closeAiRow(); });

  // Handle ai-insert-and-run events from terminal
  document.addEventListener('ai-insert-and-run', ({ detail: { code } }) => {
    editor.value = code;
    localStorage.setItem(CODE_KEY, code);
    editor.dispatchEvent(new Event('input'));
    run();
  });

  requestIdleCallback
    ? requestIdleCallback(preloadPython)
    : setTimeout(preloadPython, 2000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCodingScreen);
} else {
  setupCodingScreen();
}
