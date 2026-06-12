const PROXY_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3001/api/ai'
  : 'https://dreamingpolar-com.onrender.com/api/ai';

// All personas live in ai_personalities.js — edit there for prompt engineering.
export {
  SYSTEM_DEFAULT,
  SYSTEM_PYTHON,
  SYSTEM_EXPLAIN,
  SYSTEM_TERMINAL,
  SYSTEM_CONTENT,
  SYSTEM_LATEX,
  SYSTEM_MATHJAX,
  SYSTEM_MARKDOWN,
  SYSTEM_BY_MODE,
  systemExplainForLang,
} from './ai_personalities.js';

function stripFences(raw) {
  return raw.replace(/^```[a-zA-Z]*\r?\n?/, '').replace(/\r?\n?```\s*$/, '').trim();
}

/**
 * Send a message to Polar Bear.
 * @param {string} userMessage
 * @param {string} [systemPrompt] — override system prompt
 * @param {number} [maxTokens]
 * @returns {Promise<string>} — AI response text (code fences stripped)
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
  return stripFences(content);
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
