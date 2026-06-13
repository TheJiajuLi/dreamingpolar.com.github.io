function setupHeroLoader() {
  // Remove the veil unconditionally — must happen before any early return
  // so the page is never permanently hidden if the loader can't initialize.
  document.getElementById('dp-veil')?.remove();

  const hero = document.querySelector('main.hero');
  if (!hero) return;

  // ── Build loader DOM ─────────────────────────────────
  const loader = document.createElement('div');
  loader.className = 'hero-loader';
  loader.innerHTML = `
    <div class="hero-loader-brand">
      <span class="hero-loader-brand-word">Dreaming</span>
      <img src="${window.BASE}/assets/app_logo/dreaming_polar.png" alt="" class="hero-loader-brand-icon">
      <span class="hero-loader-brand-word">Polar</span>
    </div>
    <p class="hero-loader-text" data-phase="idle">
      <span class="hl-label"></span>
      <span class="hl-dots">
        <span class="hl-dot">.</span><span class="hl-dot">.</span><span class="hl-dot">.</span>
      </span>
    </p>
  `;
  hero.appendChild(loader);

  const textEl  = loader.querySelector('.hero-loader-text');
  const labelEl = loader.querySelector('.hl-label');

  // ── Phase transition (fade out → swap → fade in) ─────
  let _phaseTimer = null;
  function setPhase(label, phase) {
    clearTimeout(_phaseTimer);
    textEl.classList.add('hl-phase-out');
    _phaseTimer = setTimeout(() => {
      labelEl.textContent = label;
      textEl.dataset.phase = phase;
      textEl.classList.remove('hl-phase-out');
    }, 180);
  }

  // Show status immediately — don't wait for compiler events.
  // On mobile, Pyodide can take 30-60 s to signal; users need feedback now.
  setPhase('Loading', 'loading');

  // ── Badge on the </> button ──────────────────────────
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

  // ── Dismiss ──────────────────────────────────────────
  let dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    removeBadge();
    loader.classList.add('hero-loader--out');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    setTimeout(() => loader.remove(), 700);
  }

  // ── compiler-status → phase transitions ──────────────
  let _seenLoading = false;
  let _dismissTimer = null;

  document.addEventListener('compiler-status', ({ detail }) => {
    if (dismissed) return;

    if (detail.status === 'loading' && !_seenLoading) {
      _seenLoading = true;
      setPhase('Launching', 'loading');
    }

    if (detail.status === 'ready') {
      clearTimeout(_dismissTimer);
      setPhase('Done', 'done');
      _dismissTimer = setTimeout(dismiss, 900);
    }
  });

  // Fallback: dismiss if compiler never signals ready.
  // Touch devices get a shorter cap — Pyodide may not load at all on some mobile browsers.
  const _isTouch   = window.matchMedia('(pointer: coarse)').matches;
  const _fallbackMs = _isTouch ? 12_000 : 45_000;
  const _fallback   = setTimeout(dismiss, _fallbackMs);
  document.addEventListener('compiler-status', ({ detail }) => {
    if (detail.status === 'ready') clearTimeout(_fallback);
  }, { once: true });

  // Badge: add once the header button exists
  requestAnimationFrame(() => requestAnimationFrame(addBadge));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHeroLoader);
} else {
  setupHeroLoader();
}
