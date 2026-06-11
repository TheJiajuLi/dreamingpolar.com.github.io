// ── Compiler Mode Switcher ──────────────────────────────
// Renders a pill of mode buttons and exports getCurrentMode().

const MODES = [
  { id: 'python',    label: 'Python'    },
  { id: 'latex',     label: 'LaTeX'     },
  { id: 'mathjax',   label: 'MathJax'   },
  { id: 'markdown',  label: 'Markdown'  },
  { id: 'customise', label: 'Customise' },
];

const MODE_KEY = 'dreaming-polar-mode';

const _saved = localStorage.getItem(MODE_KEY);
let _currentMode = (MODES.some(m => m.id === _saved) ? _saved : 'python');

export function getCurrentMode() { return _currentMode; }

export function mountModeSwitcher(container) {
  const pill = document.createElement('div');
  pill.className = 'compiler-mode-switcher';

  for (const m of MODES) {
    const btn = document.createElement('button');
    btn.className  = 'mode-btn' + (m.id === _currentMode ? ' active' : '');
    btn.textContent = m.label;
    btn.dataset.mode = m.id;

    btn.addEventListener('click', () => {
      _currentMode = m.id;
      localStorage.setItem(MODE_KEY, _currentMode);
      pill.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.dispatchEvent(new CustomEvent('compiler-mode-change', { detail: { mode: _currentMode } }));
    });

    pill.appendChild(btn);
  }

  container.appendChild(pill);
}
