/* Mobile tab-bar controller
   Runs only on ≤768px screens.
   Opens all three panels so their internal JS initialises,
   then uses CSS (mob-visible) to show one at a time. */

const TABS = [
  { id: 'content',   screenId: 'content-screen',   icon: '◈', label: 'Content' },
  { id: 'coding',    screenId: 'coding-screen',     icon: '⌨', label: 'Code'    },
  { id: 'compiling', screenId: 'compiling-screen',  icon: '⚡', label: 'Output'  },
];

function isMobile() { return window.innerWidth <= 768; }

function init() {
  if (!isMobile()) return;

  let active = 0;

  /* ── Force all screens open so their JS initialises ── */
  requestAnimationFrame(() => requestAnimationFrame(() => {
    TABS.forEach(({ id }) => {
      const state = window.screenController?.getState(id);
      if (state === 'closed' || state === null) {
        window.screenController?.open(id);
      }
    });
    showPanel(0);
  }));

  /* ── Build tab bar ──────────────────────────────────── */
  const bar = document.createElement('div');
  bar.className = 'mob-tab-bar';

  const tabEls = TABS.map(({ icon, label }, i) => {
    const btn = document.createElement('button');
    btn.className = 'mob-tab' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', label);
    btn.innerHTML = `<span class="mob-tab-icon">${icon}</span><span>${label}</span>`;
    btn.addEventListener('click', () => switchTo(i));
    bar.appendChild(btn);
    return btn;
  });

  document.body.appendChild(bar);

  /* ── Panel switch ───────────────────────────────────── */
  function showPanel(idx) {
    TABS.forEach(({ screenId }, i) => {
      document.getElementById(screenId)?.classList.toggle('mob-visible', i === idx);
    });
    tabEls.forEach((el, i) => el.classList.toggle('active', i === idx));
  }

  function switchTo(idx) {
    if (idx === active) return;
    active = idx;
    showPanel(idx);
  }

  /* ── Tear down if resized to desktop ────────────────── */
  window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      TABS.forEach(({ screenId }) =>
        document.getElementById(screenId)?.classList.remove('mob-visible')
      );
      bar.remove();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
