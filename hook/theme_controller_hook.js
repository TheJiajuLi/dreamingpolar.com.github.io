// Time-based theme default — only fires on first visit (no saved preference).
// Once the user manually picks a theme, theme_controller.js writes to
// localStorage and that choice always wins on subsequent visits.

const _THEME_KEY = 'theme';

function _autoTheme() {
  const h = new Date().getHours(); // browser-local hour, reflects user's timezone
  return (h >= 6 && h < 20) ? 'light' : 'dark';
}

if (!localStorage.getItem(_THEME_KEY)) {
  const theme = _autoTheme();
  localStorage.setItem(_THEME_KEY, theme);
  // Apply immediately so theme_controller.js reads the value it just wrote
  document.documentElement.setAttribute('data-theme', theme);
}
