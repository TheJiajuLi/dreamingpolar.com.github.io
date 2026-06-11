// Active-line highlight

export function create() {
  let _editor = null, _lineEl = null, _active = false;

  function _lineIndex() {
    return _editor.value.slice(0, _editor.selectionStart).split('\n').length - 1;
  }
  function _update() {
    if (!_active || !_lineEl) return;
    const style  = getComputedStyle(_editor);
    const lineH  = parseFloat(style.lineHeight) || 20;
    const padTop = parseFloat(style.paddingTop)  || 0;
    _lineEl.style.top    = `${padTop + _lineIndex() * lineH - _editor.scrollTop}px`;
    _lineEl.style.height = `${lineH}px`;
  }
  function _hide() { if (_lineEl) _lineEl.style.opacity = '0'; }
  function _show() { if (_lineEl) _lineEl.style.opacity = '1'; }

  return {
    init(editor, editorArea) {
      if (_active) return;
      _editor = editor;
      _lineEl = document.createElement('div');
      _lineEl.className = 'pth-line';
      _lineEl.setAttribute('aria-hidden', 'true');
      editorArea.insertBefore(_lineEl, editorArea.firstChild);
      editor.addEventListener('keyup',   _update);
      editor.addEventListener('mouseup', _update);
      editor.addEventListener('click',   _update);
      editor.addEventListener('input',   _update);
      editor.addEventListener('scroll',  _update);
      editor.addEventListener('focus',   _show);
      editor.addEventListener('blur',    _hide);
      _active = true;
      _update();
    },
    destroy() {
      if (!_active) return;
      _editor.removeEventListener('keyup',   _update);
      _editor.removeEventListener('mouseup', _update);
      _editor.removeEventListener('click',   _update);
      _editor.removeEventListener('input',   _update);
      _editor.removeEventListener('scroll',  _update);
      _editor.removeEventListener('focus',   _show);
      _editor.removeEventListener('blur',    _hide);
      _lineEl.remove();
      _editor = null; _lineEl = null; _active = false;
    },
    isActive() { return _active; },
  };
}

// ── Singleton for single-cell view ────────────────────

const _s = create();
export const init     = (...a) => _s.init(...a);
export const destroy  = ()     => _s.destroy();
export const isActive = ()     => _s.isActive();
