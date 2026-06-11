// components/font_switcher/font_switcher.js

const FONTS = [
  {
    id: 'inter',
    label: 'Inter',
    stack: 'Inter, system-ui, -apple-system, sans-serif',
    google: null,
    monoStack: '"JetBrains Mono", "Courier New", monospace',
    monoGoogle: 'JetBrains+Mono:wght@400;600',
  },
  {
    id: 'source-serif',
    label: 'Source Serif',
    stack: '"Source Serif 4", Georgia, serif',
    google: 'Source+Serif+4:ital,wght@0,400;0,600;1,400',
    monoStack: '"Source Code Pro", "Courier New", monospace',
    monoGoogle: 'Source+Code+Pro:wght@400;600',
  },
  {
    id: 'noto-sans',
    label: 'Noto Sans',
    stack: '"Noto Sans", sans-serif',
    google: 'Noto+Sans:wght@400;600',
    monoStack: '"Noto Sans Mono", "Courier New", monospace',
    monoGoogle: 'Noto+Sans+Mono:wght@400;600',
  },
  {
    id: 'ibm-plex',
    label: 'IBM Plex',
    stack: '"IBM Plex Sans", sans-serif',
    google: 'IBM+Plex+Sans:wght@400;600',
    monoStack: '"IBM Plex Mono", "Courier New", monospace',
    monoGoogle: 'IBM+Plex+Mono:wght@400;500',
  },
  {
    id: 'lora',
    label: 'Lora',
    stack: 'Lora, Georgia, serif',
    google: 'Lora:ital,wght@0,400;0,600;1,400',
    monoStack: '"JetBrains Mono", "Courier New", monospace',
    monoGoogle: 'JetBrains+Mono:wght@400;600',
  },
  {
    id: 'jetbrains',
    label: 'JetBrains',
    stack: '"JetBrains Mono", "Courier New", monospace',
    google: 'JetBrains+Mono:wght@400;600',
    monoStack: '"JetBrains Mono", "Courier New", monospace',
    monoGoogle: null,
  },
];

const STORAGE_KEY = 'mathfield-font';

function loadGoogleFont(font) {
  if (!font.google) return;
  const id = `gf-${font.id}`;
  if (document.getElementById(id)) return; // already loaded
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font.google}&display=swap`;
  document.head.appendChild(link);
}

function loadMonoFont(font) {
  if (!font.monoGoogle) return;
  const id = `gf-mono-${font.id}`;
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font.monoGoogle}&display=swap`;
  document.head.appendChild(link);
}

function applyFont(font) {
  document.documentElement.style.setProperty('--body-font', font.stack);
  document.documentElement.style.setProperty('--code-font', font.monoStack);

  // Apply to all text elements across the page
  document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, label, button:not(.font-switcher-btn), input')
    .forEach(el => {
      // Skip code blocks — monospace should stay monospace
      if (el.closest('pre, code, .code-block')) return;
      el.style.fontFamily = font.stack;
    });

  loadGoogleFont(font);
  loadMonoFont(font);
  localStorage.setItem(STORAGE_KEY, font.id);
}

function setupFontSwitcher() {
  const header = document.querySelector('.page-header');
  if (!header) return;

  // Read saved font, default to index 0
  const savedId = localStorage.getItem(STORAGE_KEY);
  let currentIndex = FONTS.findIndex(f => f.id === savedId);
  if (currentIndex === -1) currentIndex = 0;

  // Apply on load
  loadGoogleFont(FONTS[currentIndex]);
  applyFont(FONTS[currentIndex]);

  // Build button
  const btn = document.createElement('button');
  btn.className = 'font-switcher-btn';
  btn.setAttribute('aria-label', 'Switch font');
  btn.setAttribute('title', `Font: ${FONTS[currentIndex].label}`);
  btn.textContent = 'Aa';

  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % FONTS.length;
    const next = FONTS[currentIndex];
    loadGoogleFont(next);
    applyFont(next);
    btn.setAttribute('title', `Font: ${next.label}`);
    showToast(next.label);
  });

  header.appendChild(btn);

  // Toast — shows the font name briefly
  const toast = document.createElement('div');
  toast.className = 'font-switcher-toast';
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  let toastTimer;
  function showToast(name) {
    toast.textContent = name;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 1800);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupFontSwitcher);
} else {
  setupFontSwitcher();
}