import { highlightMatch } from './search_bar_utilities.js';

// Attach all event listeners for the nav search widget.
// Receives a single context object so each handler shares the same state refs.
export function attachHooks({
  input, clearBtn, resultsList, navSections,
  getItems, setActive, selectItem, clearSearch, ensureIndex,
}) {
  // Track whether the user just closed search via Esc (2 s reopen window)
  let _justClosed   = false;
  let _reopenTimer  = null;

  function closeSearch() {
    clearSearch();
    input.value = '';
    input.blur();
    _justClosed = true;
    clearTimeout(_reopenTimer);
    _reopenTimer = setTimeout(() => { _justClosed = false; }, 2000);
  }

  // Global Esc: re-open if search was just closed
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !_justClosed) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    _justClosed = false;
    clearTimeout(_reopenTimer);
    input.focus();
  });
  // ── Text input ────────────────────────────────────────────
  input.addEventListener('input', async () => {
    const query = input.value.trim().toLowerCase();

    if (!query) { clearSearch(); return; }

    clearBtn.hidden = false;
    if (navSections) navSections.hidden = true;

    const idx = await ensureIndex();
    if (!idx) return;

    const matches = idx.filter(s =>
      s.label.toLowerCase().includes(query)
    ).slice(0, 40);

    resultsList.innerHTML = '';

    if (matches.length === 0) {
      resultsList.innerHTML = '<li class="nav-search-empty">No results</li>';
      resultsList.hidden    = false;
      return;
    }

    matches.forEach(item => {
      const li = buildResultItem(item, query, { getItems, setActive, selectItem, clearSearch, input });
      resultsList.appendChild(li);
    });

    resultsList.hidden = false;
  });

  // ── Keyboard nav on the input ─────────────────────────────
  input.addEventListener('keydown', e => {
    const items = getItems();
    if (resultsList.hidden || !items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min(getActiveIdx(items) + 1, items.length - 1);
      setActive(next); items[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = getActiveIdx(items) - 1;
      if (prev >= 0) { setActive(prev); items[prev]?.focus(); }
    } else if (e.key === 'Enter') {
      const ai = getActiveIdx(items);
      if (ai >= 0) { e.preventDefault(); selectItem(items[ai]); }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // ── Clear button ──────────────────────────────────────────
  clearBtn.addEventListener('click', () => {
    input.value = ''; clearSearch(); input.focus();
  });
}

// ── Per-result-item keydown (attached in buildResultItem) ───
function attachItemKeydown(li, { input, getItems, setActive, selectItem, clearSearch }) {
  li.addEventListener('keydown', e => {
    const items = getItems();
    const ai    = getActiveIdx(items);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min(ai + 1, items.length - 1);
      setActive(next); items[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (ai <= 0) { input.focus(); setActive(-1); }
      else         { setActive(ai - 1); items[ai - 1]?.focus(); }
    } else if (e.key === 'Enter') {
      e.preventDefault(); selectItem(li);
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });
}

// ── Build a single result <li> element ──────────────────────
function buildResultItem({ label, id, dataFile, module }, query, ctx) {
  const { getItems, setActive, selectItem, clearSearch, input } = ctx;

  const hl = highlightMatch(label, query);

  const li = document.createElement('li');
  li.className        = 'nav-search-item';
  li.dataset.dataFile = dataFile;
  li.dataset.id       = id;
  li.setAttribute('tabindex', '-1');
  li.innerHTML = `
    <span class="nav-search-item-label">${hl}</span>
    <span class="nav-search-item-module">${module}</span>
  `;

  li.addEventListener('click', () => selectItem(li));
  attachItemKeydown(li, { input, getItems, setActive, selectItem, clearSearch });

  return li;
}

// ── Read active index from the live DOM ─────────────────────
function getActiveIdx(items) {
  return items.findIndex(el => el.classList.contains('active'));
}
