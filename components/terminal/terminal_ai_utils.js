// ── Terminal AI — shared utilities ────────────────────────────────────────────
//  Imported by terminal_ai.js. Lives here so terminal_ai.js stays focused
//  on orchestration rather than low-level text processing.

// ── Text ──────────────────────────────────────────────────────────────────────

export function stripMd(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

// ── Language normalisation ────────────────────────────────────────────────────

const KNOWN_LANGS   = new Set(['python', 'mathjax', 'latex', 'markdown', 'javascript', 'html', 'css']);
const LANG_ALIASES  = { js: 'javascript', html: 'mathjax', htm: 'mathjax' };
const LANG_PRIORITY = ['mathjax', 'latex', 'markdown', 'python', 'javascript', 'css'];

export function normaliseLang(tag) {
  const t = (tag || '').toLowerCase().trim();
  if (!t) return 'python';
  return LANG_ALIASES[t] ?? (KNOWN_LANGS.has(t) ? t : 'python');
}

// ── Code block extraction ─────────────────────────────────────────────────────

export function extractCodeBlock(reply) {
  // 1. All closed fenced blocks — pick highest-priority lang
  const all = [...reply.matchAll(/```(\w*)[^\n]*\n([\s\S]*?)```/g)].map(m => ({
    lang: normaliseLang(m[1]),
    code: m[2].trim(),
  }));
  if (all.length > 0) {
    const primary = LANG_PRIORITY.reduce((best, p) => best ?? all.find(b => b.lang === p), null) ?? all[0];
    return { lang: primary.lang, code: primary.code, text: reply.replace(/```[^\n]*\n[\s\S]*?```/g, '').trim() };
  }

  // 2. Truncated response — opening fence, no closing fence yet
  const open = reply.match(/```(\w*)[^\n]*\n([\s\S]+)$/);
  if (open) {
    return { lang: normaliseLang(open[1]), code: open[2].trim(), text: reply.slice(0, reply.indexOf('```')).trim() };
  }

  // 3. Unfenced display math: \[...\] or $$...$$ dominating the reply
  const mathMatch = reply.match(/(\\\[[\s\S]+?\\\]|\$\$[\s\S]+?\$\$)/);
  if (mathMatch && mathMatch[0].length / reply.length > 0.25) {
    return { lang: 'mathjax', code: reply.trim(), text: '' };
  }

  // 4. Inline <img>/<iframe> tags anywhere in the reply
  const embedTags = [...reply.matchAll(/<(img|iframe)\b[^>]*(?:\/>|>(?:[\s\S]*?<\/(?:img|iframe)>)?)/gi)];
  if (embedTags.length > 0) {
    const code = embedTags.map(m => m[0]).join('\n');
    const text = reply.replace(/<(img|iframe)\b[^>]*(?:\/>|>(?:[\s\S]*?<\/(?:img|iframe)>)?)/gi, '').trim();
    return { lang: 'mathjax', code, text };
  }

  // 5. Block-level HTML fragment (≥3 tags, no LaTeX)
  const blockCount = (reply.match(/<\s*(div|figure|section|article|table|ul|ol|video|audio|embed)[^>]*>/gi) || []).length;
  if (blockCount >= 3) {
    return { lang: 'mathjax', code: reply.trim(), text: '' };
  }

  return null;
}

// ── History management ────────────────────────────────────────────────────────

const MAX_HISTORY_PAIRS = 8;

export function trimHistory(history) {
  const max = MAX_HISTORY_PAIRS * 2;
  if (history.length > max) history.splice(0, history.length - max);
}

// Replace the most-recent assistant message with a compact receipt.
// Called after code/media is dispatched so bulky responses don't eat quota
// on the next turn.
export function compressLastAssistant(history, lang, lineCount) {
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].role === 'assistant') {
      history[i] = { role: 'assistant', content: `[已生成${lang}内容 (${lineCount}行) 并发送至编辑器]` };
      return;
    }
  }
}

// ── Adaptive token budget ─────────────────────────────────────────────────────

export function tokenBudget(mode) {
  // Code/media generation needs headroom; pure chat is much cheaper
  return mode === 'ai_chat' ? 1500 : 4000;
}
