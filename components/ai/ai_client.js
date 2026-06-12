const PROXY_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3001/api/ai'
  : 'https://dreamingpolar-com.onrender.com/api/ai';

// Default system identity — proxy also uses this as fallback
export const SYSTEM_DEFAULT = `You are Polar Bear (小梦), the AI assistant built into Dreaming Polar (极梦) — an interactive mathematics and Python learning platform. Be helpful, concise, and encouraging.`;

// Specialised system prompts used by each integration point
export const SYSTEM_PYTHON = `You are Polar Bear (小梦), the Python code assistant inside Dreaming Polar. Available libraries: numpy, matplotlib, sympy, scipy, pandas. Generate clean, working Python code. Return ONLY the Python code — no explanation, no markdown fences.`;

export const SYSTEM_EXPLAIN = `You are Polar Bear (小梦), a friendly coding assistant inside Dreaming Polar. The user encountered an error or issue with their code. Explain what went wrong in 2–3 sentences and suggest one specific fix. Be concise and encouraging. Respond in the same language the user used (Chinese or English).`;

export function systemExplainForLang(lang) {
  const hints = {
    python:   'Python (available: numpy, matplotlib, sympy, scipy, pandas)',
    latex:    'LaTeX (rendered via KaTeX/MathJax)',
    mathjax:  'MathJax/LaTeX math expressions',
    markdown: 'Markdown',
  };
  const langHint = hints[lang?.toLowerCase()] ?? lang ?? 'code';
  return `You are Polar Bear (小梦), a friendly coding assistant inside Dreaming Polar. The user wrote ${langHint} and encountered an issue. Explain what went wrong in 2–3 sentences and suggest one specific fix. Be concise and encouraging. Respond in the same language the user used (Chinese or English).`;
}

export const SYSTEM_TERMINAL = `You are Polar Bear (小梦) inside the Dreaming Polar terminal. The user will describe a mathematical or computational task. Generate self-contained Python code using numpy, matplotlib, and sympy as needed. The code will execute immediately. Return ONLY the Python code — no fences, no explanation.`;

export const SYSTEM_CONTENT = `You are Polar Bear (小梦), the content assistant inside Dreaming Polar. Help the user understand mathematics, create outlines, explain concepts, and answer questions about math topics. Respond in the same language the user uses (Chinese or English).`;

export const SYSTEM_LATEX = `You are Polar Bear (小梦). The user wants a LaTeX document. Return ONLY valid LaTeX — a complete \\documentclass…\\end{document} document, no explanation, no markdown fences.`;

export const SYSTEM_MATHJAX = `You are Polar Bear (小梦) inside Dreaming Polar. The user wants a math expression rendered with MathJax. Return ONLY the raw LaTeX math — no $$, no \\[\\], no explanation, no fences. Example output: \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}`;

export const SYSTEM_MARKDOWN = `You are Polar Bear (小梦) inside Dreaming Polar. The user wants Markdown content. Return ONLY valid Markdown — no surrounding explanation, no triple-backtick wrapper around the whole response.`;

/**
 * Send a message to Polar Bear.
 * @param {string} userMessage
 * @param {string} [systemPrompt] — override system prompt
 * @param {number} [maxTokens]
 * @returns {Promise<string>} — AI response text
 */
export async function ask(userMessage, systemPrompt = SYSTEM_DEFAULT, maxTokens = 1024) {
  let res;
  try {
    res = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages:   [{ role: 'user', content: userMessage }],
        system:     systemPrompt,
        max_tokens: maxTokens,
      }),
    });
  } catch {
    throw new Error('Cannot reach Polar Bear proxy. Is the backend running? (cd backend && npm start)');
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? `Request failed (${res.status})`);
  }

  const { content } = await res.json();
  return content;
}

/**
 * Send a conversation (multi-turn) to Polar Bear.
 * @param {Array<{role:'user'|'assistant', content:string}>} messages
 * @param {string} [systemPrompt]
 */
export async function chat(messages, systemPrompt = SYSTEM_DEFAULT, maxTokens = 2048) {
  let res;
  try {
    res = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages,
        system:     systemPrompt,
        max_tokens: maxTokens,
      }),
    });
  } catch {
    throw new Error('Cannot reach Polar Bear proxy. Is the backend running? (cd backend && npm start)');
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? `Request failed (${res.status})`);
  }

  const { content } = await res.json();
  return content;
}
