// ── Compiler ─────────────────────────────────────────────
// Execution engine: Python (Pyodide), LaTeX, MathJax, Markdown.
// Dispatches 'compiler-status' events for UI status bars.

const PYODIDE_VERSION = '314.0.0';
const PYODIDE_INDEX   = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const PACKAGES        = ['numpy', 'sympy', 'matplotlib', 'pandas'];

let _pyodide = null;
let _loading = null;

// ── Utilities ─────────────────────────────────────────────

function _dispatch(status, message) {
  document.dispatchEvent(new CustomEvent('compiler-status', { detail: { status, message } }));
}

function _loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src    = src;
    s.onload  = resolve;
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

// ── Pyodide bootstrap ─────────────────────────────────────

async function _getPyodide() {
  if (_pyodide) return _pyodide;
  if (_loading)  return _loading;

  _loading = (async () => {
    _dispatch('loading', 'Loading Python runtime…');
    await _loadScript(PYODIDE_INDEX + 'pyodide.js');

    const py = await window.loadPyodide({ indexURL: PYODIDE_INDEX });

    _dispatch('loading', `Loading packages: ${PACKAGES.join(', ')}…`);
    await py.loadPackage(PACKAGES, { messageCallback: () => {} });

    await py.runPythonAsync(`import matplotlib; matplotlib.use('agg')`);

    // Load a CJK font via JS fetch → Pyodide FS so matplotlib can render Chinese text
    try {
      const fontResp = await fetch(`${window.BASE || ''}/assets/fonts/NotoSansSC-Regular.ttf`);
      if (fontResp.ok) {
        const buf = await fontResp.arrayBuffer();
        py.FS.writeFile('/tmp/NotoSansSC.ttf', new Uint8Array(buf));
        await py.runPythonAsync(`
import matplotlib.font_manager as _fm
_fm.fontManager.addfont('/tmp/NotoSansSC.ttf')
import matplotlib as _mpl
_mpl.rcParams['font.family'] = 'Noto Sans SC'
`);
      }
    } catch (_) {}

    _dispatch('ready', 'Python ready');
    _pyodide = py;
    document.body.classList.add('dp-ready');
    document.body.dispatchEvent(new Event('dp-ready-event'));
    return py;
  })();

  return _loading;
}

// ── Python runner ─────────────────────────────────────────
// The user's code is passed via pyodide.globals so no quoting issues.

const RUNNER = `
import sys, io, base64, ast, traceback, json as _j
import matplotlib as _mpl
_mpl.use('agg')
import matplotlib.pyplot as _plt
import warnings as _warnings
_warnings.filterwarnings('ignore', category=UserWarning)
_plt.show = lambda *a, **kw: None

_out = io.StringIO()
_err = io.StringIO()
_orig_out, _orig_err = sys.stdout, sys.stderr
sys.stdout = _out
sys.stderr = _err

_rich = []
_exc  = None
_ns   = {}

try:
    exec(_user_code, _ns)

    for _n in _plt.get_fignums():
        _f = _plt.figure(_n)
        _b = io.BytesIO()
        _f.savefig(_b, format='png', bbox_inches='tight', dpi=150)
        _b.seek(0)
        _rich.append({'type': 'image', 'content': base64.b64encode(_b.read()).decode()})
    _plt.close('all')

    try:
        _tree = ast.parse(_user_code)
        if _tree.body and isinstance(_tree.body[-1], ast.Expr):
            _pos = _out.tell()
            _v = eval(compile(ast.Expression(_tree.body[-1].value), '<expr>', 'eval'), _ns)
            _out.seek(_pos); _out.truncate()
            if _v is not None:
                try:
                    from sympy import latex as _ltx, Basic as _SB
                    if isinstance(_v, _SB):
                        _rich.append({'type': 'latex', 'content': _ltx(_v)})
                    elif isinstance(_v, (list, tuple, set)) and _v and all(isinstance(i, _SB) for i in _v):
                        _rich.append({'type': 'latex', 'content': _ltx(list(_v))})
                    else:
                        _out.write(repr(_v))
                except ImportError:
                    _out.write(repr(_v))
    except Exception:
        pass

except Exception:
    _exc = traceback.format_exc()
finally:
    sys.stdout = _orig_out
    sys.stderr = _orig_err

_j.dumps({'stdout': _out.getvalue(), 'stderr': _err.getvalue(), 'error': _exc, 'rich': _rich})
`;

async function _runPython(code) {
  try {
    _dispatch('running', 'Running…');
    const py  = await _getPyodide();
    // Auto-load any Pyodide-supported packages the user imports (e.g. scipy)
    await py.loadPackagesFromImports(code, { messageCallback: () => {} });
    py.globals.set('_user_code', code);
    const raw = await py.runPythonAsync(RUNNER);
    const d   = JSON.parse(raw);
    _dispatch('ready', 'Done');

    const out = [];
    if (d.stdout)        out.push({ type: 'text',  content: d.stdout });
    for (const o of d.rich) out.push(o);
    if (d.error)         out.push({ type: 'error', content: d.error });
    else if (d.stderr)   out.push({ type: 'error', content: d.stderr });
    if (!out.length)     out.push({ type: 'info',  content: 'Executed (no output).' });
    return out;
  } catch (e) {
    _dispatch('error', e.message);
    return [{ type: 'error', content: String(e) }];
  }
}

// ── Other modes ───────────────────────────────────────────

function _runMarkdown(code) {
  if (window.marked) return [{ type: 'html', content: window.marked.parse(code) }];
  return [{ type: 'text', content: code }];
}

function _normalizeLatexMath(src) {
  return src
    .replace(/\$\$([\s\S]*?)\$\$/g, (_, m) => `\\[${m}\\]`)
    .replace(/\$([^$\n]+?)\$/g, (_, m) => `\\(${m}\\)`)
    .replace(/\\begin\{math\}([\s\S]*?)\\end\{math\}/g, (_, m) => `\\(${m}\\)`)
    .replace(/\\begin\{displaymath\}([\s\S]*?)\\end\{displaymath\}/g, (_, m) => `\\[${m}\\]`);
}

function _escHtmlInline(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _latexBodyToHtml(body) {
  const slots = [];
  const protect = tex => { const k = `\x00M${slots.length}\x00`; slots.push(tex); return k; };
  const restore = s => s.replace(/\x00M(\d+)\x00/g, (_, i) => slots[+i]);

  let s = body;

  // ── Protect all math spans first so they survive text transforms ──
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, m => protect(m));
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_, c) => protect(`\\[${c}\\]`));
  for (const e of ['equation', 'equation\\*', 'align', 'align\\*', 'gather', 'gather\\*',
                   'multline', 'multline\\*', 'eqnarray', 'eqnarray\\*']) {
    s = s.replace(new RegExp(`\\\\begin\\{${e}\\}([\\s\\S]*?)\\\\end\\{${e}\\}`, 'g'), m => protect(m));
  }
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, m => protect(m));
  s = s.replace(/\$([^$\n]+?)\$/g, (_, c) => protect(`\\(${c}\\)`));

  // ── Verbatim (before anything else touches braces/content) ──────
  s = s.replace(/\\verb([^a-zA-Z\s])(.*?)\1/g, (_, d, c) => `<code>${_escHtmlInline(c)}</code>`);
  s = s.replace(/\\begin\{verbatim\}([\s\S]*?)\\end\{verbatim\}/g,
    (_, c) => `<pre class="latex-verbatim"><code>${_escHtmlInline(c.trim())}</code></pre>`);

  // ── Named logos & special chars ─────────────────────────────────
  s = s.replace(/\\LaTeX(\{\})?/g, 'LaTeX');
  s = s.replace(/\\TeX(\{\})?/g, 'TeX');
  s = s.replace(/\\BibTeX(\{\})?/g, 'BibTeX');
  s = s.replace(/\\ldots(\{\})?|\\dots(\{\})?/g, '…');
  s = s.replace(/\\textbackslash(\{\})?/g, '\\');
  s = s.replace(/\\%/g, '%');
  s = s.replace(/\\&/g, '&amp;');
  s = s.replace(/\\\$/g, '$');
  s = s.replace(/\\#/g, '#');
  s = s.replace(/---/g, '—');
  s = s.replace(/--/g, '–');
  s = s.replace(/``/g, '“');
  s = s.replace(/''/g, '”');

  // ── Inline text formatting ───────────────────────────────────────
  const fmt = (cmd, open, close) => {
    s = s.replace(new RegExp(`\\\\${cmd}\\{((?:[^{}]|\\{[^{}]*\\})*)\\}`, 'g'), `${open}$1${close}`);
  };
  fmt('textbf', '<strong>', '</strong>');
  fmt('textit', '<em>', '</em>');
  fmt('emph',   '<em>', '</em>');
  fmt('texttt', '<code>', '</code>');
  fmt('underline', '<u>', '</u>');
  fmt('textrm', '', '');
  fmt('textsc', '', '');
  s = s.replace(/\\footnote\{([^}]+)\}/g, '<sup title="$1">[note]</sup>');
  s = s.replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, '<a href="$1">$2</a>');
  s = s.replace(/\\url\{([^}]+)\}/g, (_, u) => `<a href="${u}">${u}</a>`);

  // ── Sectioning ──────────────────────────────────────────────────
  s = s.replace(/\\section\*?\{([^}]+)\}/g,       '<h2 class="latex-heading">$1</h2>');
  s = s.replace(/\\subsection\*?\{([^}]+)\}/g,    '<h3 class="latex-heading">$1</h3>');
  s = s.replace(/\\subsubsection\*?\{([^}]+)\}/g, '<h4 class="latex-heading">$1</h4>');
  s = s.replace(/\\title\{([^}]+)\}/g,  '<h1 class="latex-title">$1</h1>');
  s = s.replace(/\\maketitle\b/g,       '');
  s = s.replace(/\\author\{[^}]+\}/g,   '');
  s = s.replace(/\\date\{[^}]*\}/g,     '');

  // ── Environments ────────────────────────────────────────────────
  s = s.replace(/\\begin\{quote\}([\s\S]*?)\\end\{quote\}/g,
    (_, c) => `<blockquote class="latex-quote">${c.trim()}</blockquote>`);
  s = s.replace(/\\begin\{quotation\}([\s\S]*?)\\end\{quotation\}/g,
    (_, c) => `<blockquote class="latex-quote">${c.trim()}</blockquote>`);
  s = s.replace(/\\begin\{center\}([\s\S]*?)\\end\{center\}/g,
    (_, c) => `<div class="latex-center">${c.trim()}</div>`);
  s = s.replace(/\\begin\{flushleft\}([\s\S]*?)\\end\{flushleft\}/g,
    (_, c) => `<div style="text-align:left">${c.trim()}</div>`);
  s = s.replace(/\\begin\{flushright\}([\s\S]*?)\\end\{flushright\}/g,
    (_, c) => `<div style="text-align:right">${c.trim()}</div>`);
  s = s.replace(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/g,
    (_, c) => `<div class="latex-abstract"><strong>Abstract.</strong> ${c.trim()}</div>`);

  // Lists
  const listItems = inner => inner.split('\\item').slice(1).map(t => {
    const m = t.match(/^\[([^\]]*)\]([\s\S]*)/);
    return m ? `<li><strong>${m[1]}</strong> ${m[2].trim()}</li>` : `<li>${t.trim()}</li>`;
  }).join('');
  s = s.replace(/\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g,
    (_, c) => `<ul class="latex-list">${listItems(c)}</ul>`);
  s = s.replace(/\\begin\{enumerate\}([\s\S]*?)\\end\{enumerate\}/g,
    (_, c) => `<ol class="latex-list">${listItems(c)}</ol>`);
  s = s.replace(/\\begin\{description\}([\s\S]*?)\\end\{description\}/g, (_, c) => {
    const items = c.split('\\item').slice(1).map(t => {
      const m = t.match(/^\[([^\]]*)\]([\s\S]*)/);
      return m ? `<dt><strong>${m[1]}</strong></dt><dd>${m[2].trim()}</dd>` : `<dd>${t.trim()}</dd>`;
    }).join('');
    return `<dl class="latex-list">${items}</dl>`;
  });

  // Theorem-like environments
  for (const [env, title] of [['theorem','Theorem'],['lemma','Lemma'],['proof','Proof'],
      ['definition','Definition'],['corollary','Corollary'],['proposition','Proposition'],
      ['remark','Remark'],['example','Example']]) {
    s = s.replace(new RegExp(`\\\\begin\\{${env}\\}([\\s\\S]*?)\\\\end\\{${env}\\}`, 'g'),
      (_, c) => `<div class="latex-theorem latex-${env}"><strong>${title}.</strong> ${c.trim()}</div>`);
  }

  // Remaining unknown environments — keep content, drop wrapper tags
  s = s.replace(/\\begin\{[^}]+\}([\s\S]*?)\\end\{[^}]+\}/g, '$1');

  // ── Misc layout commands ─────────────────────────────────────────
  s = s.replace(/\\noindent\s*/g, '');
  s = s.replace(/\\centering\s*/g, '');
  s = s.replace(/\\par\b\s*/g, '\n\n');
  s = s.replace(/\\\\\s*(\[[^\]]*\])?/g, '<br>');
  s = s.replace(/\\(vspace|hspace|vskip|hskip)\*?\{[^}]*\}/g, '');
  s = s.replace(/\\(clearpage|newpage|pagebreak)\b/g, '<hr class="latex-pagebreak">');
  s = s.replace(/\\label\{[^}]*\}/g, '');
  s = s.replace(/\\ref\{([^}]*)\}/g, '[ref]');
  s = s.replace(/\\cite\{([^}]*)\}/g, (_, k) => `[${k}]`);

  // ── Strip remaining unknown commands (keep braced argument) ─────
  s = s.replace(/\\[a-zA-Z]+\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1');
  s = s.replace(/\\[a-zA-Z]+\*?\s*/g, '');
  s = s.replace(/[{}]/g, '');

  // ── Paragraph split ──────────────────────────────────────────────
  const paras = s.split(/\n\n+/).filter(p => p.trim());
  const html = paras.map(p => {
    const t = p.trim();
    if (/^<(h[1-6]|ul|ol|dl|blockquote|div|pre|hr|table)/.test(t)) return t;
    return `<p class="latex-para">${t.replace(/\n/g, ' ')}</p>`;
  }).join('\n');

  return restore(html);
}

function _runLatex(code) {
  const bodyMatch = code.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);
  if (bodyMatch) {
    return [{ type: 'html', content: _latexBodyToHtml(bodyMatch[1].trim()) }];
  }
  // Bare math / snippet — normalize math notation and render directly
  const normalized = _normalizeLatexMath(code.trim());
  return [{ type: 'latex', content: /^(\\\[|\\\()/.test(normalized) ? normalized : `\\[${normalized}\\]` }];
}

function _runMathJax(code) {
  const normalized = _normalizeLatexMath(code);
  const html = normalized
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => `<p class="latex-para">${p.trim().replace(/\n/g, ' ')}</p>`)
    .join('\n');
  return [{ type: 'html', content: html || `<p class="latex-para">${normalized}</p>` }];
}

// ── Public API ────────────────────────────────────────────

export async function compile(code, mode) {
  switch (mode) {
    case 'python':   return _runPython(code);
    case 'markdown': return _runMarkdown(code);
    case 'latex':    return _runLatex(code);
    case 'mathjax':  return _runMathJax(code);
    default:         return [{ type: 'error', content: `Unknown mode: ${mode}` }];
  }
}

export function preloadPython() {
  _getPyodide().catch(() => {});
}

export async function getPyodide() {
  return _getPyodide();
}
