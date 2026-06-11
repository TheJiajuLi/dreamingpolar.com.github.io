const ICM_KEY  = 'dp-icm-enabled';
const _cbs     = new Set();
let   _enabled = localStorage.getItem(ICM_KEY) !== 'false'; // default: on

export function isEnabled()  { return _enabled; }

export function setEnabled(val) {
  if (_enabled === val) return;
  _enabled = !!val;
  try { localStorage.setItem(ICM_KEY, _enabled); } catch (_) {}
  _cbs.forEach(fn => fn(_enabled));
}

export function toggle() { setEnabled(!_enabled); }

export function onChange(fn) {
  _cbs.add(fn);
  return () => _cbs.delete(fn);
}

export function mount(container) {
  const btn = document.createElement('button');
  btn.id        = 'icm-btn';
  btn.className = `icm-btn${_enabled ? ' icm-on' : ''}`;
  btn.title     = 'Intelligent Coding Mode (syntax, text highlight, auto-complete)';
  btn.innerHTML = `
    <img class="icm-icon" src="${window.BASE}/assets/icons/intelligent_code_mode/ai-technology.png" alt="" aria-hidden="true">
    <span class="icm-label">ICM</span>
  `;

  btn.addEventListener('click', () => {
    toggle();
    btn.classList.toggle('icm-on', _enabled);
  });

  onChange(on => btn.classList.toggle('icm-on', on));

  container.appendChild(btn);
  return btn;
}
