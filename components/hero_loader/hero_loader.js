function setupHeroLoader() {
  document.getElementById('dp-veil')?.remove();

  const hero = document.querySelector('main.hero');
  if (!hero) return;

  const loader = document.createElement('div');
  loader.className = 'hero-loader';
  loader.innerHTML = `
    <div class="hl-corner hl-corner--tl"></div>
    <div class="hl-corner hl-corner--tr"></div>
    <div class="hl-corner hl-corner--bl"></div>
    <div class="hl-corner hl-corner--br"></div>
    <div class="hl-scan"></div>
    <div class="hl-center">
      <div class="hl-logo-wrap">
        <img src="${window.BASE}/assets/app_logo/dreaming_polar.png" alt="" class="hero-loader-brand-icon">
        <div class="hl-logo-ring"></div>
      </div>
      <div class="hl-title">
        <span class="hl-title-main">Dreaming Polar</span>
        <span class="hl-title-sub">Python · AI · Research Environment</span>
      </div>
    </div>
    <div class="hl-status-bar">
      <span class="hl-status-label">READY</span>
      <div class="hl-status-track">
        <div class="hl-status-fill" id="hl-fill"></div>
      </div>
    </div>
  `;
  hero.appendChild(loader);

  const statusLabel = loader.querySelector('.hl-status-label');
  const fillEl      = loader.querySelector('#hl-fill');

  function setLabel(text) {
    statusLabel.textContent = text;
  }

  // ── Badge on the </> button ──────────────────────────────────────────────
  let badge = null;

  function addBadge() {
    const btn = document.getElementById('start-coding-btn');
    if (!btn || btn.querySelector('.start-coding-badge')) return;
    badge = document.createElement('span');
    badge.className = 'start-coding-badge';
    btn.appendChild(badge);
  }

  function removeBadge() {
    badge?.remove();
    badge = null;
  }

  // ── Dismiss ──────────────────────────────────────────────────────────────
  let dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    removeBadge();
    loader.classList.add('hero-loader--out');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    setTimeout(() => loader.remove(), 1000);
  }

  // ── compiler-status handler ──────────────────────────────────────────────
  let _seenLoading = false;
  let _dismissTimer = null;

  document.addEventListener('compiler-status', ({ detail }) => {
    if (dismissed) return;

    if (detail.status === 'loading') {
      if (!_seenLoading) {
        _seenLoading = true;
        setLabel('INITIALIZING');
      }
      if (detail.percent != null) {
        fillEl.style.width = detail.percent + '%';
      }
      if (detail.message) {
        const short = detail.message.replace(/\(.*?\)/g, '').replace(/…$/, '').trim().toUpperCase();
        setLabel(short.slice(0, 30));
      }
    }

    if (detail.status === 'ready') {
      clearTimeout(_dismissTimer);
      fillEl.style.width = '100%';
      setLabel('READY');
      loader.classList.add('hl-ready');
      _dismissTimer = setTimeout(dismiss, 900);
    }
  });

  // Auto-dismiss: 2 s brand splash if no compiler events fire
  const _fallback = setTimeout(dismiss, 2000);
  document.addEventListener('compiler-status', ({ detail }) => {
    if (detail.status === 'ready') clearTimeout(_fallback);
  }, { once: true });

  requestAnimationFrame(() => requestAnimationFrame(addBadge));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHeroLoader);
} else {
  setupHeroLoader();
}
