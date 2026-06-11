// ── Flatten PAGES tree → [{dataFile, module}] ──────────────
export function flattenEntries(pages) {
  const out = [];
  for (const page of pages) {
    if (page.dataFile) out.push({ dataFile: page.dataFile, module: page.title });
    if (page.children) out.push(...flattenEntries(page.children));
  }
  return out;
}

// ── Wrap query matches in <mark> tags ───────────────────────
export function highlightMatch(label, query) {
  const safe    = label.replace(/</g, '&lt;');
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(escaped, 'gi'), m => `<mark class="nav-search-mark">${m}</mark>`);
}

// ── Fetch all tutorial JSONs and build a flat search index ──
export async function buildIndex(pages) {
  const entries = flattenEntries(pages);
  const index   = [];

  await Promise.all(entries.map(async ({ dataFile, module }) => {
    try {
      const res = await fetch(dataFile);
      if (!res.ok) return;
      const data = await res.json();
      (data.blocks || []).forEach(block => {
        if (!block.label) return;
        index.push({
          label:    block.label,
          id:       block.label.toLowerCase().replace(/\s+/g, '-'),
          dataFile,
          module,
        });
      });
    } catch {}
  }));

  return index;
}
