// components/language_selector/language_selector.js

const LANGUAGES = [
  { id: 'en', label: 'English',  short: 'EN' },
  { id: 'zh', label: '中文',     short: '中' },
  { id: 'ja', label: '日本語',   short: '日' },
  { id: 'ko', label: '한국어',   short: '한' },
  { id: 'fr', label: 'Français', short: 'FR' },
  { id: 'it', label: 'Italiano', short: 'IT' },
  { id: 'es', label: 'Español',  short: 'ES' },
  { id: 'ru', label: 'Русский',  short: 'RU' },
];

const STORAGE_KEY = 'dreaming-polar-lang';

// ── UI translations ────────────────────────────────────
const T = {
  en: {
    nav:        'Navigation',
    pages:      'Pages',
    content:    'Content',
    code:       'Code',
    output:     'Output',
    run:        'Run',
    idle:       'Idle — Python loads on first run.',
    out_hint:   'Run code to see output here.',
    placeholder:`# Example — try running this:
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas & numpy are preloaded.
# Ctrl/Cmd+Enter to run.`,
  },
  zh: {
    nav:        '导航',
    pages:      '页面',
    content:    '内容',
    code:       '代码',
    output:     '输出',
    run:        '运行',
    idle:       '空闲 — Python 在首次运行时加载。',
    out_hint:   '运行代码后，结果将显示在这里。',
    placeholder:`# 示例 — 试着运行这个：
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy、matplotlib、pandas 和 numpy 已预加载。
# Ctrl/Cmd+Enter 运行。`,
  },
  ja: {
    nav:        'ナビゲーション',
    pages:      'ページ',
    content:    'コンテンツ',
    code:       'コード',
    output:     '出力',
    run:        '実行',
    idle:       'アイドル — Python は初回実行時に読み込まれます。',
    out_hint:   'コードを実行すると、ここに結果が表示されます。',
    placeholder:`# 例 — 実行してみてください：
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy、matplotlib、pandas、numpy がプリロードされています。
# Ctrl/Cmd+Enter で実行。`,
  },
  ko: {
    nav:        '탐색',
    pages:      '페이지',
    content:    '내용',
    code:       '코드',
    output:     '출력',
    run:        '실행',
    idle:       '대기 중 — Python은 첫 실행 시 로드됩니다.',
    out_hint:   '코드를 실행하면 여기에 결과가 표시됩니다.',
    placeholder:`# 예시 — 실행해 보세요：
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas, numpy가 미리 로드되었습니다.
# Ctrl/Cmd+Enter로 실행。`,
  },
  fr: {
    nav:        'Navigation',
    pages:      'Pages',
    content:    'Contenu',
    code:       'Code',
    output:     'Sortie',
    run:        'Exécuter',
    idle:       'Inactif — Python se charge au premier lancement.',
    out_hint:   'Exécutez le code pour voir les résultats ici.',
    placeholder:`# Exemple — essayez d'exécuter ceci :
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas et numpy sont préchargés.
# Ctrl/Cmd+Entrée pour exécuter.`,
  },
  it: {
    nav:        'Navigazione',
    pages:      'Pagine',
    content:    'Contenuto',
    code:       'Codice',
    output:     'Output',
    run:        'Esegui',
    idle:       'Inattivo — Python si carica al primo avvio.',
    out_hint:   'Esegui il codice per vedere i risultati qui.',
    placeholder:`# Esempio — prova a eseguire:
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas e numpy sono precaricati.
# Ctrl/Cmd+Invio per eseguire.`,
  },
  es: {
    nav:        'Navegación',
    pages:      'Páginas',
    content:    'Contenido',
    code:       'Código',
    output:     'Salida',
    run:        'Ejecutar',
    idle:       'Inactivo — Python se carga en el primer uso.',
    out_hint:   'Ejecuta el código para ver los resultados aquí.',
    placeholder:`# Ejemplo — prueba a ejecutar esto:
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas y numpy están precargados.
# Ctrl/Cmd+Intro para ejecutar.`,
  },
  ru: {
    nav:        'Навигация',
    pages:      'Страницы',
    content:    'Содержание',
    code:       'Код',
    output:     'Вывод',
    run:        'Запустить',
    idle:       'Ожидание — Python загружается при первом запуске.',
    out_hint:   'Запустите код, чтобы увидеть результат.',
    placeholder:`# Пример — попробуйте запустить:
from sympy import symbols, expand, latex
x = symbols('x')
expand((x + 1)**4)

# SymPy, matplotlib, pandas и numpy предзагружены.
# Ctrl/Cmd+Enter для запуска.`,
  },
};

function applyTranslations(langId) {
  const t = T[langId] || T.en;

  const qs = s => document.querySelector(s);

  // Navigation sidebar
  const navTitle = qs('.nav-title');
  if (navTitle) navTitle.textContent = t.nav;

  const navPages = qs('.nav-section-label');
  if (navPages) navPages.textContent = t.pages;

  // Screen labels
  const contentLabel = qs('.content-screen-label');
  if (contentLabel) contentLabel.textContent = t.content;

  const codeLabel = qs('.coding-screen-label');
  if (codeLabel) codeLabel.textContent = t.code;

  const outputLabel = qs('.compiling-screen-label');
  if (outputLabel) outputLabel.textContent = t.output;

  // Run button
  const runBtn = qs('.run-btn');
  if (runBtn) runBtn.innerHTML = `&#9654; ${t.run}`;

  // Code editor placeholder
  const editor = qs('.code-editor');
  if (editor) editor.placeholder = t.placeholder;

  // Output placeholder (only if showing the default hint, not real output)
  const outPlaceholder = qs('.output-placeholder');
  if (outPlaceholder) outPlaceholder.textContent = t.out_hint;

  // Status bar (only if still showing the idle text)
  const statusBar = qs('.compiler-status-bar');
  if (statusBar && !statusBar.querySelector('.status-spinner')) {
    const currentText = statusBar.textContent.trim();
    const isIdle = Object.values(T).some(lang => currentText === lang.idle || currentText === 'Idle — Python loads on first run.');
    if (isIdle) statusBar.textContent = t.idle;
  }
}

function applyLanguage(lang, defer = false) {
  document.documentElement.setAttribute('data-lang', lang.id);
  document.documentElement.lang = lang.id;
  localStorage.setItem(STORAGE_KEY, lang.id);
  document.dispatchEvent(new CustomEvent('language-change', { detail: { lang } }));

  if (defer) {
    // Wait for all components to finish rendering before translating
    requestAnimationFrame(() => requestAnimationFrame(() => applyTranslations(lang.id)));
  } else {
    applyTranslations(lang.id);
  }
}

// ── Setup ──────────────────────────────────────────────
function setupLanguageButton() {
  const header = document.querySelector('.page-header');
  if (!header) return;

  const savedId = localStorage.getItem(STORAGE_KEY) || 'en';
  let current   = LANGUAGES.find(l => l.id === savedId) ?? LANGUAGES[0];

  applyLanguage(current, true); // defer on initial load

  // ── Button ──
  const btn = document.createElement('button');
  btn.className = 'lang-btn';
  btn.setAttribute('aria-label', 'Switch language');
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('title', current.label);
  btn.textContent = current.short;

  // ── Dropdown ──
  const dropdown = document.createElement('div');
  dropdown.className = 'lang-dropdown';
  dropdown.setAttribute('role', 'listbox');

  function buildList() {
    dropdown.innerHTML = '';
    for (const lang of LANGUAGES) {
      const item = document.createElement('button');
      item.className = 'lang-option' + (lang.id === current.id ? ' active' : '');
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(lang.id === current.id));
      item.innerHTML = `<span class="lang-option-short">${lang.short}</span><span class="lang-option-label">${lang.label}</span>`;
      item.addEventListener('click', () => {
        current = lang;
        applyLanguage(lang);
        btn.textContent = lang.short;
        btn.setAttribute('title', lang.label);
        close();
      });
      dropdown.appendChild(item);
    }
  }

  function open() {
    buildList();
    dropdown.classList.add('lang-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('open');
  }

  function close() {
    dropdown.classList.remove('lang-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('open');
  }

  // Toggle on button click
  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.contains('lang-open') ? close() : open();
  });

  // Close only when clicking outside the header — clicking other header controls
  // (theme, font, etc.) keeps the dropdown open so users can compare styles live.
  document.addEventListener('click', e => {
    if (header.contains(e.target)) return;
    close();
  });

  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // ── Wrapper ──
  var wrapper = document.createElement('div');
  wrapper.className = 'lang-btn-wrapper';
  wrapper.appendChild(btn);
  wrapper.appendChild(dropdown);

  const fontBtn = header.querySelector('.font-switcher-btn');
  if (fontBtn) {
    header.insertBefore(wrapper, fontBtn);
  } else {
    header.appendChild(wrapper);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLanguageButton);
} else {
  setupLanguageButton();
}
