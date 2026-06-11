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
    <svg class="icm-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.5" cy="6.5" r="2.2" stroke="currentColor" stroke-width="1.15"/>
      <line x1="6.5" y1="0.5" x2="6.5" y2="3.3" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="6.5" y1="9.7" x2="6.5" y2="12.5" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="0.5" y1="6.5" x2="3.3" y2="6.5" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="9.7" y1="6.5" x2="12.5" y2="6.5" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="2.09" y1="2.09" x2="4.06" y2="4.06" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="8.94" y1="8.94" x2="10.91" y2="10.91" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="2.09" y1="10.91" x2="4.06" y2="8.94" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
      <line x1="8.94" y1="4.06" x2="10.91" y2="2.09" stroke="currentColor" stroke-width="1.15" stroke-linecap="round"/>
    </svg>
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
