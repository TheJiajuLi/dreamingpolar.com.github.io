const ICON_SOURCE = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const ICON_COPY   = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const ICON_CHECK  = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

export function createSourceWidget() {
  let _code = null;
  let _lang = null;
  let _popover = null;

  // ── Trigger button ──────────────────────────────────────
  const btn = document.createElement('button');
  btn.className = 'lus-btn';
  btn.title = 'View source code';
  btn.innerHTML = ICON_SOURCE;
  btn.style.display = 'none';

  // ── Popover ─────────────────────────────────────────────
  function closePopover() {
    if (!_popover) return;
    _popover.remove();
    _popover = null;
    btn.classList.remove('lus-btn--active');
  }

  function openPopover() {
    if (_popover) { closePopover(); return; }
    if (!_code) return;

    _popover = document.createElement('div');
    _popover.className = 'lus-popover';

    const header = document.createElement('div');
    header.className = 'lus-popover-header';

    const langLabel = document.createElement('span');
    langLabel.className = 'lus-lang-label';
    langLabel.textContent = (_lang ?? '').toUpperCase();

    const copyBtn = document.createElement('button');
    copyBtn.className = 'lus-copy-btn';
    copyBtn.innerHTML = ICON_COPY;
    copyBtn.title = 'Copy source';
    copyBtn.addEventListener('click', e => {
      e.stopPropagation();
      navigator.clipboard?.writeText(_code).then(() => {
        copyBtn.innerHTML = ICON_CHECK;
        copyBtn.classList.add('lus-copy-btn--done');
        setTimeout(() => {
          copyBtn.innerHTML = ICON_COPY;
          copyBtn.classList.remove('lus-copy-btn--done');
        }, 1600);
      });
    });

    header.append(langLabel, copyBtn);

    const pre = document.createElement('pre');
    pre.className = 'lus-code';
    const codeEl = document.createElement('code');
    codeEl.textContent = _code;
    pre.appendChild(codeEl);

    _popover.append(header, pre);

    // Mount inside the section so it's scoped to it
    const section = btn.closest('.nb-output-section');
    if (section) {
      section.style.position = 'relative';
      section.appendChild(_popover);
    }

    btn.classList.add('lus-btn--active');
  }

  btn.addEventListener('click', e => { e.stopPropagation(); openPopover(); });

  // Close on outside click
  document.addEventListener('click', e => {
    if (_popover && !_popover.contains(e.target) && e.target !== btn) closePopover();
  });

  return {
    element: btn,
    setSource(code, lang) {
      _code  = code ?? null;
      _lang  = lang ?? null;
      btn.style.display = _code ? '' : 'none';
      if (_popover) {
        _popover.querySelector('.lus-code code').textContent = _code ?? '';
        _popover.querySelector('.lus-lang-label').textContent = (_lang ?? '').toUpperCase();
      }
    },
  };
}
