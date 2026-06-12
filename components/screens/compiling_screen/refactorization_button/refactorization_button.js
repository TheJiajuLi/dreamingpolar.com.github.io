import { ask, systemRefactorForLang } from '../../../ai/ai_client.js';

/**
 * Creates a "Refactor" button for the AI explanation label.
 *
 * @param {object} opts
 * @param {string}  opts.sourceCode   — original code that was run
 * @param {string}  opts.sourceLang   — language (python / latex / etc.)
 * @param {string}  opts.cellId       — '__standalone__' or notebook cell UUID
 * @param {string}  opts.explanation  — raw AI explanation text (from the suggestion box)
 */
export function createRefactorBtn({ sourceCode, sourceLang, cellId, explanation }) {
  const btn = document.createElement('button');
  btn.className = 'refactor-btn';
  btn.title = 'Fix and refactor the code based on this AI suggestion';
  btn.textContent = '⟳ Refactor';

  btn.addEventListener('click', async () => {
    if (!sourceCode) return;
    btn.disabled = true;
    btn.innerHTML = '<span class="status-spinner"><i></i><i></i><i></i></span> Refactoring';

    try {
      const prompt = `AI suggestion:\n${explanation}\n\nOriginal code:\n${sourceCode}`;
      const raw = await ask(prompt, systemRefactorForLang(sourceLang), 2048);

      // Strip markdown fences if the model wraps the code anyway
      const code = raw
        .replace(/^```[\w]*\s*\n?/m, '')
        .replace(/\n?```\s*$/m, '')
        .trim();

      document.dispatchEvent(new CustomEvent('refactor-code', {
        detail: { code, cellId, lang: sourceLang },
      }));

      btn.textContent = '✓ Applied';
    } catch (e) {
      btn.textContent = '✗ Failed';
      btn.disabled = false;
      btn.title = e.message;
    }
  });

  return btn;
}
