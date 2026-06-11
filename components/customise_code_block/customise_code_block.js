import { compile, preloadPython } from '../compiler/compiler.js';
import { attachCellHooks, attachAddBtnHook, attachNotebookHooks } from './customise_code_block_hooks.js';
import { isEnabled as icmEnabled, onChange as icmOnChange, mount as mountICM } from '../screens/coding_screen/intelligent_coding_mode/intelligent_coding_mode.js';
import { create as createSyntaxHL } from '../screens/coding_screen/coding_screen_python/python_syntax_highlight/python_syntax_highlight.js';
import { create as createTextHL }   from '../screens/coding_screen/coding_screen_python/python_text_highlight/python_text_highlight.js';
import { create as createCompletion } from '../screens/coding_screen/coding_screen_python/python_code-completion/python_code_completion.js';

const ICON_COPY  = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const ICON_CHECK = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

const CELLS_KEY    = 'dreaming-polar-cells';
const OLD_CODE_KEY = 'dreaming-polar-code';

const LANGS = [
  { id: 'python',   label: 'Python'   },
  { id: 'latex',    label: 'LaTeX'    },
  { id: 'mathjax',  label: 'MathJax'  },
  { id: 'markdown', label: 'Markdown' },
];

const PLACEHOLDER = {
  python:
`# Python code here
# Ctrl/Cmd+Enter to run`,
  latex:
`\\documentclass{article}
\\begin{document}

\\end{document}`,
  mathjax:
`Mixed text and math: \\(E = mc^2\\)

$$\\int_0^\\infty e^{-x^2}\\,dx = \\frac{\\sqrt{\\pi}}{2}$$`,
  markdown:
`## Heading

Some **bold** and *italic* text.

- Item 1
- Item 2`,
};

let _cells     = [];
let _runSeq    = 0;
let _saveTimer = null;
let _cellsEl   = null;

// ── State accessors passed into hooks ─────────────────────
const getCells   = ()    => _cells;
const setCells   = arr   => { _cells = arr; };
const getRunSeq  = ()    => _runSeq;
const bumpRunSeq = ()    => { _runSeq++; };

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function saveAll() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    const data = _cells.map(c => ({ id: c.id, lang: c.lang, code: c.editor.value }));
    try { localStorage.setItem(CELLS_KEY, JSON.stringify(data)); } catch (_) {}
  }, 400);
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.max(el.scrollHeight, 88) + 'px';
}

function cellLabel(cell) {
  return `Cell ${_cells.indexOf(cell) + 1} · ${cell.lang}`;
}

// ── Cell factory ──────────────────────────────────────────

function makeCell(lang = 'python', code = '', id = uid()) {
  const cell = { id, lang, editor: null, counter: null, numEl: null, el: null };

  const el = document.createElement('div');
  el.className = 'nb-cell';
  el.dataset.nbId = id;

  const gutter = document.createElement('div');
  gutter.className = 'nb-gutter';
  const counter = document.createElement('span');
  counter.className = 'nb-counter';
  counter.textContent = ' ';
  gutter.appendChild(counter);
  cell.counter = counter;

  const body = document.createElement('div');
  body.className = 'nb-body';

  const toolbar = document.createElement('div');
  toolbar.className = 'nb-toolbar';

  const sel = document.createElement('select');
  sel.className = 'nb-lang-select';
  for (const l of LANGS) {
    const o = document.createElement('option');
    o.value = l.id;
    o.textContent = l.label;
    if (l.id === lang) o.selected = true;
    sel.appendChild(o);
  }

  const mkBtn = (cls, title, html) => {
    const b = document.createElement('button');
    b.className = `nb-btn ${cls}`;
    b.title = title;
    b.innerHTML = html;
    return b;
  };
  const runBtn  = mkBtn('nb-run',  'Run cell (Ctrl+Enter)', '&#9654;');
  const upBtn   = mkBtn('nb-move', 'Move cell up',           '↑');
  const downBtn = mkBtn('nb-move', 'Move cell down',         '↓');
  const delBtn  = mkBtn('nb-del',  'Delete cell',            '✕');

  const copyBtn = document.createElement('button');
  copyBtn.className = 'nb-btn lus-copy-btn';
  copyBtn.title = 'Copy code';
  copyBtn.innerHTML = ICON_COPY;

  const numEl = document.createElement('span');
  numEl.className = 'nb-cell-num';
  numEl.textContent = '1';
  cell.numEl = numEl;

  toolbar.append(numEl, sel, runBtn, upBtn, downBtn, delBtn, copyBtn);

  const editor = document.createElement('textarea');
  editor.className    = 'nb-editor';
  editor.spellcheck   = false;
  editor.autocorrect  = 'off';
  editor.autocomplete = 'off';
  editor.placeholder  = PLACEHOLDER[lang] ?? '';
  editor.value        = code;
  cell.editor = editor;

  body.append(editor);
  const lowerRow = document.createElement('div');
  lowerRow.className = 'nb-cell-lower';
  lowerRow.append(gutter, body);
  el.append(toolbar, lowerRow);
  cell.el = el;

  attachCellHooks({
    sel, editor, runBtn, upBtn, downBtn, delBtn, copyBtn,
    cell, PLACEHOLDER, ICON_COPY, ICON_CHECK,
    autoResize, saveAll, rebuildCells, cellLabel,
    getCells, setCells, getRunSeq, bumpRunSeq,
  });

  // ── Per-cell ICM instances ────────────────────────────
  cell._icm = { hl: createSyntaxHL(), th: createTextHL(), cc: createCompletion() };

  function _icmSyncCell() {
    if (cell.lang === 'python' && icmEnabled()) {
      if (!cell._icm.hl.isActive()) {
        cell._icm.hl.init(editor, body);
        cell._icm.th.init(editor, body);
        cell._icm.cc.init(editor, body);
      }
    } else {
      cell._icm.hl.destroy();
      cell._icm.th.destroy();
      cell._icm.cc.destroy();
    }
  }

  cell._icmSync = _icmSyncCell;

  // re-evaluate when language changes
  sel.addEventListener('change', _icmSyncCell);

  return cell;
}

// ── DOM rebuild ───────────────────────────────────────────

function makeAddBtn(insertIdx) {
  const row = document.createElement('div');
  row.className = 'nb-add-row';
  const lineL = document.createElement('span');
  lineL.className = 'nb-add-line';
  const btn = document.createElement('button');
  btn.className = 'nb-add-btn';
  btn.title = 'Add cell';
  btn.textContent = '+';
  const lineR = document.createElement('span');
  lineR.className = 'nb-add-line';
  row.append(lineL, btn, lineR);

  attachAddBtnHook({ btn, insertIdx, makeCell, getCells, rebuildCells, saveAll });

  return row;
}

let _updateCellCount = () => {};

function rebuildCells() {
  if (!_cellsEl) return;
  _cellsEl.innerHTML = '';
  _cells.forEach((cell, i) => {
    cell.numEl.textContent = i + 1;
    _cellsEl.appendChild(cell.el);
    requestAnimationFrame(() => { autoResize(cell.editor); cell._icmSync?.(); });
    _cellsEl.appendChild(makeAddBtn(i + 1));
  });
  _updateCellCount();
  document.dispatchEvent(new CustomEvent('notebook-cells-reordered', {
    detail: { order: _cells.map(c => c.id) }
  }));
}

// ── Run All ───────────────────────────────────────────────

async function runAll(btn) {
  if (btn) btn.disabled = true;

  document.dispatchEvent(new CustomEvent('notebook-clear-output'));

  for (let i = 0; i < _cells.length; i++) {
    const cell = _cells[i];
    const code = cell.editor.value.trim();
    if (!code) continue;

    if (cell.lang === 'python' && /\binput\s*\(/.test(code)) {
      document.dispatchEvent(new CustomEvent('run-in-terminal', { detail: { code } }));
      continue;
    }

    cell.counter.textContent = '*';
    const cellRunBtn = cell.el.querySelector('.nb-run');
    if (cellRunBtn) cellRunBtn.disabled = true;

    const outputs = await compile(code, cell.lang);

    if (cellRunBtn) cellRunBtn.disabled = false;
    _runSeq++;
    cell.counter.textContent = _runSeq;

    document.dispatchEvent(new CustomEvent('compile-result', {
      detail: { outputs, cellId: cell.id, cellLabel: `Cell ${i + 1} · ${cell.lang}`, sourceCode: code, sourceLang: cell.lang }
    }));
  }

  if (btn) btn.disabled = false;
}

// ── Public init ───────────────────────────────────────────

export function init(container, externalTopbar) {
  let savedData = null;
  try { savedData = JSON.parse(localStorage.getItem(CELLS_KEY)); } catch (_) {}

  if (!Array.isArray(savedData) || !savedData.length) {
    const legacyCode = localStorage.getItem(OLD_CODE_KEY) ?? '';
    savedData = [{ id: uid(), lang: 'python', code: legacyCode }];
  }

  _cells  = savedData.map(d => makeCell(d.lang ?? 'python', d.code ?? '', d.id ?? uid()));
  _runSeq = 0;

  const nb = document.createElement('div');
  nb.className = 'nb-notebook';

  const runAllBtn = document.createElement('button');
  runAllBtn.className = 'nb-run-all-btn';
  runAllBtn.innerHTML = '&#9654;&#9654;&nbsp;Run All';
  runAllBtn.title = 'Run all cells in order';

  const cellCount = document.createElement('span');
  cellCount.className = 'nb-cell-count';

  _updateCellCount = () => {
    cellCount.textContent = `${_cells.length} cell${_cells.length === 1 ? '' : 's'}`;
  };

  const icmSlot = document.createElement('div');
  icmSlot.className = 'cds-icm-slot';
  mountICM(icmSlot);

  if (externalTopbar) {
    externalTopbar.appendChild(icmSlot);
    externalTopbar.appendChild(runAllBtn);
    externalTopbar.appendChild(cellCount);
  } else {
    const topbar = document.createElement('div');
    topbar.className = 'nb-topbar';
    topbar.appendChild(icmSlot);
    topbar.appendChild(runAllBtn);
    topbar.appendChild(cellCount);
    nb.appendChild(topbar);
  }

  // Sync all cells when ICM is toggled
  icmOnChange(() => _cells.forEach(c => c._icmSync?.()));

  const cellsEl = document.createElement('div');
  cellsEl.className = 'nb-cells';
  _cellsEl = cellsEl;
  nb.appendChild(cellsEl);

  rebuildCells();
  // initial ICM activation after DOM is mounted
  requestAnimationFrame(() => _cells.forEach(c => c._icmSync?.()));

  const statusBar = document.createElement('div');
  statusBar.className = 'compiler-status-bar';
  statusBar.textContent = 'Idle — Python loads on first run.';
  nb.appendChild(statusBar);

  attachNotebookHooks({ runAllBtn, statusBar, runAll, getCells, autoResize, saveAll });

  container.appendChild(nb);

  requestIdleCallback
    ? requestIdleCallback(preloadPython)
    : setTimeout(preloadPython, 2000);
}

export function getCellOrder() {
  return _cells.map(c => c.id);
}

export function addImportedCell(lang, code) {
  if (!_cellsEl) return;
  const cell = makeCell(lang, code, uid());
  _cells.push(cell);

  // Append without full rebuild to avoid touching existing cells
  const insertBeforeEl = _cellsEl.lastElementChild; // last add-row
  _cellsEl.insertBefore(cell.el, insertBeforeEl);
  _cellsEl.appendChild(makeAddBtn(_cells.length));
  cell.numEl.textContent = _cells.length;
  _updateCellCount();
  saveAll();

  // Let the browser lay out the tall content before ICM overlays itself
  requestAnimationFrame(() => {
    autoResize(cell.editor);
    requestAnimationFrame(() => {
      cell._icmSync?.();
      cell.el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}
