function setupThemeController() {
  const themes = [
    { key: 'light',  label: 'Light',  icon: `${window.BASE}/assets/icons/theme_controller/light_theme.png`  },
    { key: 'dark',   label: 'Dark',   icon: `${window.BASE}/assets/icons/theme_controller/dark_theme.png`   },
    { key: 'grey',   label: 'Grey',   icon: `${window.BASE}/assets/icons/theme_controller/grey_theme.svg`   },
    { key: 'aurora', label: 'Aurora', icon: `${window.BASE}/assets/icons/theme_controller/aurora_theme.png` },
  ];

  const saved = localStorage.getItem('theme') || 'light';

  const controller = document.createElement('div');
  controller.className = 'theme-controller';
  controller.innerHTML = themes.map(t => `
    <button
      class="theme-btn ${t.key === saved ? 'active' : ''}"
      data-theme="${t.key}"
      title="${t.label}"
      aria-label="Switch to ${t.label} theme"
    ><img src="${t.icon}" alt="${t.label}" class="theme-icon"></button>
  `).join('');

  applyTheme(saved);

  controller.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      localStorage.setItem('theme', theme);
      controller.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Insert left of search bar if it exists, otherwise append to header
  const header = document.querySelector('.page-header');
  if (!header) return;

  const searchContainer = header.querySelector('.search-bar-container');
  if (searchContainer) {
    header.insertBefore(controller, searchContainer);
  } else {
    header.appendChild(controller);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupThemeController);
} else {
  setupThemeController();
}