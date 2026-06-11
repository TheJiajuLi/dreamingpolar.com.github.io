const dataStore = {
  data: null,
};

async function loadRenderData() {
  try {
    const dataFile = window.renderDataFile || 'math-data.json';
    const dataResp = await fetch(dataFile);

    if (!dataResp.ok) {
      console.error('Failed to load render data', dataFile, dataResp.status);
      return;
    }

    dataStore.data = await dataResp.json();
    renderBlocks();
  } catch (error) {
    console.error('Unable to load render assets:', error);
  }
}

function renderBlocks() {
  const container = document.getElementById('content');
  if (!container) return;

  const { setup, blocks } = dataStore.data;

  container.innerHTML = `
    <section class="card" id="setup">
      <h2>Setup</h2>
      <pre class="code-block"><code>${escapeHtml(setup.trim())}</code></pre>
    </section>`;

  for (const block of blocks) {
    const id = block.label.toLowerCase().replace(/\s+/g, '-');

    // Support both single code/result and multiple examples
    const examples = block.examples || [{ code: block.code, result: block.result }];

    const examplesHtml = examples.map(ex => `
      <pre class="code-block"><code>${escapeHtml(ex.code || '')}</code></pre>
      <div class="expression">\\[${ex.result || ''}\\]</div>
    `).join('');

    container.innerHTML += `
      <section class="card" id="${id}">
        <h2>${escapeHtml(block.label)}</h2>
        ${examplesHtml}
      </section>`;

    window.renderSections?.push({ title: block.label, href: '#' + id });
  }

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([container]);
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

loadRenderData();