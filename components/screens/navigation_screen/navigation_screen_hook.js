// Persists navigation tree open/collapsed state across page refreshes.
// Uses a path-based key (ancestor titles joined) so items are uniquely identified
// even when the same label appears in different branches.

const EXPANDED_KEY = 'dreaming-polar-nav-expanded';

function getItemKey(item) {
  const parts = [];
  let cur = item;
  while (cur) {
    const link = cur.querySelector(':scope > .nav-row > .nav-link');
    if (link) parts.unshift(link.textContent.trim());
    cur = cur.parentElement?.closest('.nav-item');
  }
  return parts.join('\x00');
}

function save() {
  const tree = document.getElementById('nav-pages-tree');
  if (!tree) return;
  const keys = [];
  tree.querySelectorAll('.nav-item.open').forEach(item => keys.push(getItemKey(item)));
  try { localStorage.setItem(EXPANDED_KEY, JSON.stringify(keys)); } catch (_) {}
}

function restore() {
  const tree = document.getElementById('nav-pages-tree');
  if (!tree || !tree.querySelector('.nav-item')) return;

  let keys;
  try { keys = JSON.parse(localStorage.getItem(EXPANDED_KEY)); } catch (_) {}
  if (!Array.isArray(keys) || !keys.length) return;

  const saved = new Set(keys);
  tree.querySelectorAll('.nav-item').forEach(item => {
    if (!saved.has(getItemKey(item))) return;
    const children = item.querySelector(':scope > .nav-children');
    const btn      = item.querySelector(':scope > .nav-row > .nav-toggle');
    if (children && btn) {
      children.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      item.classList.add('open');
    }
  });
}

function attach(tree) {
  // Restore state whenever the tree is rebuilt (fires as microtask after
  // refreshTree()'s synchronous active-link expansion, so both coexist).
  const observer = new MutationObserver(() => restore());
  observer.observe(tree, { childList: true });

  // Save after every toggle or parent-link click (delegation covers
  // both direct button clicks and programmatic toggle.click() calls).
  tree.addEventListener('click', e => {
    if (e.target.closest('.nav-toggle')) {
      requestAnimationFrame(save);
    }
  });

  // Restore immediately if the tree is already populated on first attach.
  if (tree.querySelector('.nav-item')) restore();
}

function init() {
  const tree = document.getElementById('nav-pages-tree');
  if (tree) { attach(tree); return; }

  // nav-pages-tree doesn't exist yet — wait for navigation_screen.js to create it.
  const bodyObserver = new MutationObserver(() => {
    const t = document.getElementById('nav-pages-tree');
    if (t) { bodyObserver.disconnect(); attach(t); }
  });
  bodyObserver.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
