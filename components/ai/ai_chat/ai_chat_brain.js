// ── AI Chat Brain ─────────────────────────────────────────────────────────────
//
//  Calibrates 小梦's response style per message.
//  The style directive is PREPENDED before the personality prompt so the model
//  sees the length constraint first (highest priority).
//
//  Future: addLearnedExamples() accepts crawler-fetched real-chat pairs.

// ── Input weight ──────────────────────────────────────────────────────────────

function measureWeight(text) {
  const len = text.trim().length;
  if (len < 12)  return 'micro';
  if (len < 40)  return 'brief';
  if (len < 120) return 'normal';
  return 'detailed';
}

const MAX_TOKENS = {
  micro:    400,
  brief:    800,
  normal:   1200,
  detailed: 3000,
};

// ── Directives ────────────────────────────────────────────────────────────────
// These are prepended before the personality, so the model reads them first.

const LENGTH_DIRECTIVE = {
  micro:
    `【长度规则 — 必须执行】\n` +
    `用户只发了几个字。只回一句话，绝不超过12字。` +
    `禁止括号动作描述（如（转过身）（耳朵抖了抖））。` +
    `就像发短信，不解释，不拓展。风格参考下方示例。`,

  brief:
    `【长度规则 — 必须执行】\n` +
    `用户发了一句话。最多2句，不超过25字。` +
    `禁止括号动作描述。不列举，不展开。风格参考下方示例。`,

  normal:
    `【回复长度】用户发了正常长度的消息。` +
    `回复3-5句，保持对话节奏，不要写成小作文，禁止括号动作描述。`,

  detailed:
    `【回复长度】用户发了较长的消息或复杂问题。` +
    `可以详细回答，最多8句，分层次说清楚。`,
};

// ── Examples block builder ────────────────────────────────────────────────────
// examples come from the active persona (see ai_persona_switch.js)

function buildExamplesBlock(weight, examples) {
  const pairs = examples[weight] ?? examples.normal ?? [];
  const lines = pairs.map(({ u, a }) => `用户: ${u}\n小梦: ${a}`).join('\n\n');
  return `[对话示例 — 严格遵守这个长度风格]\n\n${lines}`;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Returns the style prefix and maxTokens for a given user message.
 * This should be PREPENDED before SYSTEM_DEFAULT so it takes priority.
 *
 * @param {string} userText
 * @returns {{ prefix: string, maxTokens: number }}
 */
export function calibrate(userText, examples) {
  const weight = measureWeight(userText);
  const prefix = `${LENGTH_DIRECTIVE[weight]}\n\n${buildExamplesBlock(weight, examples)}`;
  return { prefix, maxTokens: MAX_TOKENS[weight] };
}
