const DISMISSED_KEY = 'dp-pwa-dismissed';

const ICON_DOWNLOAD = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M7 1v8M4 6l3 3 3-3"/>
  <path d="M2 11h10"/>
</svg>`;

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
}

function isStandalone() {
  return window.navigator.standalone === true
    || window.matchMedia('(display-mode: standalone)').matches;
}

function createButton() {
  const btn = document.createElement('button');
  btn.id = 'pwa-install-btn';
  btn.setAttribute('aria-label', 'Install Dreaming Polar');
  btn.innerHTML = `${ICON_DOWNLOAD}<span class="pwa-label">安装</span>`;
  return btn;
}

function showIOSSheet() {
  const sheet = document.createElement('div');
  sheet.className = 'pwa-ios-sheet';
  sheet.innerHTML = `
    <div class="pwa-ios-sheet-inner">
      <p class="pwa-ios-sheet-title">将 Dreaming Polar 添加到主屏幕</p>
      <ol class="pwa-ios-sheet-steps">
        <li><span class="pwa-ios-step-num">1</span>点击底部工具栏的 <strong>分享</strong> 按钮 ⬆</li>
        <li><span class="pwa-ios-step-num">2</span>向下滚动，选择 <strong>添加到主屏幕</strong></li>
        <li><span class="pwa-ios-step-num">3</span>点击右上角 <strong>添加</strong></li>
      </ol>
      <button class="pwa-ios-sheet-close">知道了</button>
    </div>`;

  sheet.querySelector('.pwa-ios-sheet-close').addEventListener('click', () => {
    sheet.remove();
    localStorage.setItem(DISMISSED_KEY, '1');
  });
  sheet.addEventListener('click', e => { if (e.target === sheet) sheet.remove(); });
  document.body.appendChild(sheet);
}

function setup() {
  // Already installed or previously dismissed — do nothing
  if (isStandalone() || localStorage.getItem(DISMISSED_KEY)) return;

  const header = document.querySelector('header.page-header');
  if (!header) return;

  const btn = createButton();
  // Insert before the logo (second child), so it sits left of logo on desktop
  // and is naturally grouped with header controls
  header.appendChild(btn);

  // ── iOS Safari path ──────────────────────────────────────────────────────
  if (isIOS()) {
    btn.classList.add('pwa-ready');
    btn.addEventListener('click', showIOSSheet);
    return;
  }

  // ── Chrome / Android path ────────────────────────────────────────────────
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    btn.classList.add('pwa-ready');
  });

  btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.classList.remove('pwa-ready');
    if (outcome === 'dismissed') {
      localStorage.setItem(DISMISSED_KEY, '1');
    }
  });

  // Hide button once installed via any means
  window.addEventListener('appinstalled', () => {
    btn.classList.remove('pwa-ready');
    localStorage.setItem(DISMISSED_KEY, '1');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup);
} else {
  setup();
}
