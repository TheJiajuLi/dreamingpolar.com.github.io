function setupStartCodingBtn() {
  const header = document.querySelector('header.page-header');
  if (!header) return;

  const btn = document.createElement('button');
  btn.className = 'start-coding-btn';
  btn.id = 'start-coding-btn';
  btn.title = 'Open code editor';
  btn.setAttribute('aria-label', 'Toggle code editor');
  btn.innerHTML = `<img src="/assets/icons/start_coding/start_coding.svg" alt="" class="start-coding-icon" aria-hidden="true">`;

  // Insert before theme controller if present, otherwise append
  const themeController = header.querySelector('.theme-controller');
  if (themeController) {
    header.insertBefore(btn, themeController);
  } else {
    header.appendChild(btn);
  }

  function syncActiveState() {
    const state = window.screenController?.getState('coding');
    const isOpen = state === 'normal' || state === 'maximized' || state === 'minimized';
    btn.classList.toggle('active', isOpen);
    btn.title = isOpen ? 'Close code editor' : 'Open code editor';
  }

  btn.addEventListener('click', () => {
    const state = window.screenController?.getState('coding');
    if (!state || state === 'closed') {
      window.screenController?.open('coding');
    } else {
      window.screenController?.close('coding');
    }
  });

  document.addEventListener('screen-opened', ({ detail }) => {
    if (detail.id === 'coding') syncActiveState();
  });
  document.addEventListener('screen-closed', ({ detail }) => {
    if (detail.id === 'coding') syncActiveState();
  });

  // Sync after coding screen has had a chance to register (it uses rAF internally)
  requestAnimationFrame(() => requestAnimationFrame(syncActiveState));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupStartCodingBtn);
} else {
  setupStartCodingBtn();
}
