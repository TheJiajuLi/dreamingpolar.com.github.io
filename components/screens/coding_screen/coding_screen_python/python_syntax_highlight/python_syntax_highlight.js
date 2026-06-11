const KW = new Set([
  'False','None','True','and','as','assert','async','await',
  'break','class','continue','def','del','elif','else','except',
  'finally','for','from','global','if','import','in','is',
  'lambda','nonlocal','not','or','pass','raise','return',
  'try','while','with','yield',
]);

const BUILTINS = new Set([
  'abs','all','any','ascii','bin','bool','bytearray','bytes',
  'callable','chr','classmethod','compile','complex','delattr',
  'dict','dir','divmod','enumerate','eval','exec','filter',
  'float','format','frozenset','getattr','globals','hasattr',
  'hash','help','hex','id','input','int','isinstance','issubclass',
  'iter','len','list','locals','map','max','memoryview','min',
  'next','object','oct','open','ord','pow','print','property',
  'range','repr','reversed','round','set','setattr','slice',
  'sorted','staticmethod','str','sum','super','tuple','type',
  'vars','zip',
]);

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function tokenize(code) {
  const out = [];
  let i = 0, n = code.length;

  while (i < n) {
    const c = code[i];

    // comment
    if (c === '#') {
      let j = i; while (j < n && code[j] !== '\n') j++;
      out.push({ t: 'comment', v: code.slice(i, j) }); i = j; continue;
    }

    // triple string
    if ((c === '"' || c === "'") && code[i+1] === c && code[i+2] === c) {
      const q = c + c + c; let j = i + 3;
      while (j < n && code.slice(j, j+3) !== q) { if (code[j] === '\\') j++; j++; }
      j += 3;
      out.push({ t: 'string', v: code.slice(i, j) }); i = j; continue;
    }

    // single string
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && code[j] !== c && code[j] !== '\n') { if (code[j] === '\\') j++; j++; }
      if (code[j] === c) j++;
      out.push({ t: 'string', v: code.slice(i, j) }); i = j; continue;
    }

    // number
    if ((c >= '0' && c <= '9') || (c === '.' && code[i+1] >= '0' && code[i+1] <= '9')) {
      let j = i;
      if (c === '0' && 'xXoObB'.includes(code[i+1])) {
        j += 2; while (j < n && /[0-9a-fA-F_]/.test(code[j])) j++;
      } else {
        while (j < n && /[0-9_]/.test(code[j])) j++;
        if (code[j] === '.') { j++; while (j < n && /[0-9_]/.test(code[j])) j++; }
        if (j < n && 'eE'.includes(code[j])) { j++; if ('+-'.includes(code[j])) j++; while (j < n && /[0-9]/.test(code[j])) j++; }
        if (j < n && 'jJ'.includes(code[j])) j++;
      }
      out.push({ t: 'number', v: code.slice(i, j) }); i = j; continue;
    }

    // decorator
    if (c === '@') {
      let j = i + 1; while (j < n && /[a-zA-Z0-9_.]/.test(code[j])) j++;
      out.push({ t: 'decorator', v: code.slice(i, j) }); i = j; continue;
    }

    // word
    if (/[a-zA-Z_]/.test(c)) {
      let j = i; while (j < n && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const w = code.slice(i, j);
      let k = j; while (k < n && (code[k] === ' ' || code[k] === '\t')) k++;

      if (KW.has(w)) {
        out.push({ t: 'keyword', v: w }); i = j;
        // name after def/class
        if (w === 'def' || w === 'class') {
          let ws = ''; while (i < n && (code[i] === ' ' || code[i] === '\t')) { ws += code[i]; i++; }
          if (ws) out.push({ t: 'ws', v: ws });
          let nj = i; while (nj < n && /[a-zA-Z0-9_]/.test(code[nj])) nj++;
          if (nj > i) { out.push({ t: w === 'def' ? 'funcdef' : 'classdef', v: code.slice(i, nj) }); i = nj; }
        }
      } else if (BUILTINS.has(w)) {
        out.push({ t: 'builtin', v: w }); i = j;
      } else if (code[k] === '(') {
        out.push({ t: 'funcall', v: w }); i = j;
      } else {
        out.push({ t: 'ident', v: w }); i = j;
      }
      continue;
    }

    // 2-char operators
    const op2 = code.slice(i, i+2);
    if (['**','//','==','!=','<=','>=','+=','-=','*=','/=','%=','->','**=','//='].includes(op2)) {
      out.push({ t: 'op', v: op2 }); i += 2; continue;
    }

    if ('+-*/%=<>!&|^~'.includes(c)) { out.push({ t: 'op', v: c }); i++; continue; }
    if ('()[]{}:,.'.includes(c))     { out.push({ t: 'punct', v: c }); i++; continue; }

    out.push({ t: 'ws', v: c }); i++;
  }
  return out;
}

export function highlight(code) {
  return tokenize(code).map(({ t, v }) => {
    if (t === 'ws' || t === 'ident') return esc(v);
    return `<span class="psh-${t}">${esc(v)}</span>`;
  }).join('') + '\n';
}

// ── Factory ─────────────────────────────────────────────

export function create() {
  let _editor = null, _backdrop = null, _active = false, _raf = null;

  function _sync() {
    if (!_active) return;
    _backdrop.innerHTML = highlight(_editor.value);
    _backdrop.scrollTop  = _editor.scrollTop;
    _backdrop.scrollLeft = _editor.scrollLeft;
  }
  function _onInput()  { if (_raf) cancelAnimationFrame(_raf); _raf = requestAnimationFrame(_sync); }
  function _onScroll() { if (_backdrop) { _backdrop.scrollTop = _editor.scrollTop; _backdrop.scrollLeft = _editor.scrollLeft; } }

  return {
    init(editor, editorArea) {
      if (_active) return;
      _editor = editor;
      _backdrop = document.createElement('div');
      _backdrop.className = 'psh-backdrop';
      _backdrop.setAttribute('aria-hidden', 'true');
      editorArea.insertBefore(_backdrop, editor);
      editor.classList.add('psh-active');
      editor.addEventListener('input',  _onInput);
      editor.addEventListener('scroll', _onScroll);
      _active = true;
      _sync();
    },
    update() { _sync(); },
    destroy() {
      if (!_active) return;
      _editor.removeEventListener('input',  _onInput);
      _editor.removeEventListener('scroll', _onScroll);
      _backdrop.remove();
      _editor.classList.remove('psh-active');
      _editor = null; _backdrop = null; _active = false;
    },
    isActive() { return _active; },
  };
}

// ── Singleton for single-cell view ────────────────────

const _s = create();
export const init     = (...a) => _s.init(...a);
export const update   = ()     => _s.update();
export const destroy  = ()     => _s.destroy();
export const isActive = ()     => _s.isActive();
