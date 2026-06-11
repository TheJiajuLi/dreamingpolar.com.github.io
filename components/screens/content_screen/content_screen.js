import { escapeHtml, renderJson,
         createMaximizeBtn, createMinimizeBtn }             from './content_screen_utility.js';
import { CONTENT_PATH_KEY,
         attachContentScreenHooks, restoreLastContent }     from './content_screen_hook.js';

// ── Setup ──────────────────────────────────────────────
function setupContentScreen() {
  const hero = document.getElementById('content-screen');
  if (!hero) return;

  const maximizeBtn = createMaximizeBtn();
  const minimizeBtn = createMinimizeBtn();

  const toolbar = document.createElement('div');
  toolbar.className = 'sc-toolbar';
  toolbar.append(maximizeBtn, minimizeBtn);

  const header = document.createElement('div');
  header.className = 'content-screen-header';
  header.innerHTML = `<span class="content-screen-label">Content</span>`;
  header.append(toolbar);

  const body = document.createElement('div');
  body.className = 'content-screen-body';
  body.id        = 'content-screen-body';
  body.innerHTML = '<p class="content-loading">Select a topic from the navigation panel.</p>';

  hero.classList.add('content-screen');
  hero.append(header, body);

  const getBody = () => document.getElementById('content-screen-body');

  attachContentScreenHooks(hero, maximizeBtn, minimizeBtn, getBody);

  window.contentScreen = {
    render(html) { getBody().innerHTML = html; },
    clear()      { getBody().innerHTML = ''; },
    getBody,

    async renderFromJson(jsonPath, { openScreen = true } = {}) {
      if (openScreen) window.screenController?.ensureVisible('content');
      hero.classList.add('cs-active');
      localStorage.setItem(CONTENT_PATH_KEY, jsonPath);

      const b = getBody();
      b.innerHTML = '<p class="content-loading">Loading…</p>';
      try {
        const resp = await fetch(jsonPath);
        if (!resp.ok) throw new Error(`${resp.status} ${resp.statusText}`);
        const data = await resp.json();
        renderJson(data, b);
      } catch (err) {
        b.innerHTML = `<p class="content-error">Could not load content (${escapeHtml(err.message)})</p>`;
      }
    },
  };

  restoreLastContent();
}

// ── Init ───────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupContentScreen);
} else {
  setupContentScreen();
}
