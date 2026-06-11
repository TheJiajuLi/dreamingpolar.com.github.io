const _KEY = 'dreaming-polar-outputs';

export function persistOutputs(sections) {
  const data = [];
  sections.forEach((sec, cellId) => {
    const label = sec.labelEl.querySelector('span').textContent;
    const outputs = sec.outputs;
    if (outputs.length) data.push({
      cellId,
      cellLabel:  label,
      outputs,
      sourceCode: sec.sourceCode ?? null,
      sourceLang: sec.sourceLang ?? null,
    });
  });
  try {
    sessionStorage.setItem(_KEY, JSON.stringify(data));
  } catch (_) {}
}

export function recoverOutputs() {
  try {
    const raw = sessionStorage.getItem(_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

export function wipeOutputs() {
  sessionStorage.removeItem(_KEY);
}
