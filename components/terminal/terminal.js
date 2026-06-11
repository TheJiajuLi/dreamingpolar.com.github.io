import { executeCommand } from './terminal_commands.js';

const ICON_TERMINAL = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
const ICON_CLEAR    = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4h8v2"/></svg>`;
const ICON_CLOSE    = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

let _toggleBtn = null;
let _output    = null;
let _input     = null;

export function openTerminal()  { window.screenController?.open('terminal'); }
export function closeTerminal() { window.screenController?.close('terminal'); }

function syncToggleBtn(open) {
  _toggleBtn?.classList.toggle('active', open);
}

// ── ANSI → HTML ────────────────────────────────────────────
const ANSI_MAP = { '1':'bold','2':'dim','31':'red','32':'green','33':'yellow','34':'blue','35':'magenta','36':'cyan' };

function ansiToHtml(raw) {
  const s = raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let open = 0;
  const out = s.replace(/\x1b\[([0-9;]*)m/g, (_, c) => {
    if (c === '0' || c === '') { const close = '</span>'.repeat(open); open = 0; return close; }
    const cls = ANSI_MAP[c]; if (!cls) return '';
    open++; return `<span class="term-${cls}">`;
  });
  return out + '</span>'.repeat(open);
}

// ── Output helpers ─────────────────────────────────────────
export function printLine(text) {
  if (!_output) return;
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = ansiToHtml(text);
  _output.appendChild(div);
  _output.scrollTop = _output.scrollHeight;
}

export function clearOutput() {
  if (_output) _output.innerHTML = '';
}

// ── Input handler ──────────────────────────────────────────
async function handleEnter() {
  const raw = _input?.value ?? '';
  if (_input) _input.value = '';
  const line = raw.trim();
  if (!line) return;

  const echo = document.createElement('div');
  echo.className = 'term-line term-echo';
  echo.innerHTML = `<span class="term-prompt-inline">›</span> ${line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}`;
  _output?.appendChild(echo);

  try {
    await executeCommand(line, printLine);
  } catch (e) {
    if (String(e) === '__CLEAR__') { clearOutput(); return; }
    printLine(`\x1b[31m${String(e)}\x1b[0m`);
  }

  _output && (_output.scrollTop = _output.scrollHeight);
}

// ── Toolbar toggle button (injected into coding-toolbar) ───
function injectToggleBtn() {
  _toggleBtn = document.createElement('button');
  _toggleBtn.className = 'dp-terminal-toolbar-btn';
  _toggleBtn.title     = 'Toggle terminal  (>_)';
  _toggleBtn.innerHTML = ICON_TERMINAL;
  _toggleBtn.addEventListener('click', () => {
    const state = window.screenController?.getState('terminal');
    (state === 'closed' || !state) ? openTerminal() : closeTerminal();
  });

  const toolbar = document.querySelector('.coding-toolbar');
  if (toolbar) {
    const runBtn = toolbar.querySelector('.run-btn');
    runBtn ? toolbar.insertBefore(_toggleBtn, runBtn) : toolbar.appendChild(_toggleBtn);
  }
}

// ── Resize handle ──────────────────────────────────────────
function setupResizeHandle(panel) {
  const handle = panel.querySelector('.terminal-resize-handle');
  if (!handle) return;

  let startY = 0, startH = 0;
  handle.addEventListener('mousedown', e => {
    startY = e.clientY;
    startH = panel.offsetHeight;
    handle.classList.add('dragging');
    e.preventDefault();

    const onMove = mv => {
      const newH = Math.max(80, Math.min(startH + (startY - mv.clientY), window.innerHeight * 0.75));
      document.documentElement.style.setProperty('--terminal-h', newH + 'px');
    };
    const onUp = () => {
      handle.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ── Panel setup ────────────────────────────────────────────
function setup() {
  const panel = document.getElementById('terminal-panel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="terminal-resize-handle"></div>
    <div class="terminal-header">
      <span class="terminal-label">
        <span class="terminal-status-dot" id="term-status-dot"></span>
        Terminal
      </span>
      <div class="sc-toolbar">
        <button class="sc-btn term-clear-btn" title="Clear">${ICON_CLEAR}</button>
        <button class="sc-btn term-close-btn" title="Close">${ICON_CLOSE}</button>
      </div>
    </div>
    <div class="terminal-body">
      <div class="terminal-output" id="terminal-output"></div>
      <div class="terminal-input-row">
        <span class="terminal-prompt">›</span>
        <input class="terminal-input" id="terminal-input" type="text"
               autocomplete="off" spellcheck="false" placeholder="type a command…">
      </div>
    </div>
  `;

  _output = document.getElementById('terminal-output');
  _input  = document.getElementById('terminal-input');

  if (!document.documentElement.style.getPropertyValue('--terminal-h')) {
    document.documentElement.style.setProperty('--terminal-h', Math.round(window.innerHeight * 0.15) + 'px');
  }

  window.screenController?.register('terminal', panel, { label: 'Terminal', persisted: true });

  const startOpen = window.screenController?.getState('terminal') === 'normal';
  syncToggleBtn(startOpen);
  if (startOpen) requestAnimationFrame(() => _input?.focus());

  injectToggleBtn();
  setupResizeHandle(panel);

  printLine('Dreaming Polar  ›  Terminal');
  printLine("\x1b[2mType 'help' for available commands.\x1b[0m");
  printLine('');

  _input?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); handleEnter(); }
  });

  panel.querySelector('.term-clear-btn')?.addEventListener('click', clearOutput);
  panel.querySelector('.term-close-btn')?.addEventListener('click', closeTerminal);

  document.addEventListener('screen-opened', ({ detail }) => {
    if (detail.id === 'terminal') { syncToggleBtn(true); requestAnimationFrame(() => _input?.focus()); }
  });
  document.addEventListener('screen-closed', ({ detail }) => {
    if (detail.id === 'terminal') syncToggleBtn(false);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
