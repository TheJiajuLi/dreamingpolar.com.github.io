// ── AI Chat Storage & Token Budget ──────────────────────────────────────────
//
//  Persists conversation history + daily token usage in localStorage.
//  Budget resets automatically each calendar day.
//
//  Token counting is estimated (~1 token per 2.5 chars, balancing EN/ZH).
//  Real token counts require backend support — this is a client-side proxy.
//
//  IP-based rate limiting requires backend middleware; tracked in backlog.

const STORE_KEY   = 'dp-ai-chat';
const DAILY_LIMIT = 10_000;  // estimated tokens per day
const COMPACT_AT  = 20;      // auto-compact when history exceeds this

// ── Rough token estimator ────────────────────────────────────────────────────

export function estimateTokens(text) {
  return Math.ceil((text ?? '').length / 2.5);
}

// ── Internal store helpers ────────────────────────────────────────────────────

function today() {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function flush(data) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (_) {}
}

function getStore() {
  const data = load();
  // Reset on new day
  if (!data || data.date !== today()) {
    return { date: today(), tokensUsed: 0, history: [] };
  }
  return data;
}

// ── Auto-compact ─────────────────────────────────────────────────────────────
//  Keeps last 8 messages verbatim; condenses earlier ones into a stub so the
//  AI retains some context without ballooning the request size.

function compact(history) {
  if (history.length <= 8) return history;
  const older  = history.slice(0, -8);
  const recent = history.slice(-8);
  const lines  = older
    .map(m => `[${m.role}] ${m.content.slice(0, 60)}${m.content.length > 60 ? '…' : ''}`)
    .join('\n');
  return [
    { role: 'user',      content: `[Earlier context — auto-compacted]\n${lines}` },
    { role: 'assistant', content: '好的，波比我记下了~' },
    ...recent,
  ];
}

// ── Public API ───────────────────────────────────────────────────────────────

export function getHistory() {
  return getStore().history;
}

export function getTokensUsed() {
  return getStore().tokensUsed;
}

export function getRemainingTokens() {
  return Math.max(0, DAILY_LIMIT - getStore().tokensUsed);
}

export function canSend() {
  return getStore().tokensUsed < DAILY_LIMIT;
}

export function appendMessage(role, content) {
  const s = getStore();
  s.tokensUsed += estimateTokens(content);
  s.history.push({ role, content });
  if (s.history.length > COMPACT_AT) s.history = compact(s.history);
  flush(s);
}

export function clearHistory() {
  const s = getStore();
  s.history = [];
  flush(s);
}
