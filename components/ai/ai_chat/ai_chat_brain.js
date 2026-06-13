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
  micro:    2000,
  brief:    2800,
  normal:   3400,
  detailed: 6000,
};

// ── Directives ────────────────────────────────────────────────────────────────
// Soft guidance only — persona character takes priority over length.

const LENGTH_DIRECTIVE = {
  micro:
    `【回复风格提示】用户发了简短的消息，用自然对话的语气回应，` +
    `2-4句即可，不需要展开成长篇，但要有温度和个性。`,

  brief:
    `【回复风格提示】用户发了简短的问题或想法，正常对话回应，` +
    `3-5句，可以有自己的看法和补充，不要敷衍。`,

  normal:
    `【回复风格提示】用户发了正常长度的消息，充分回应，` +
    `可以展开思路，保持对话节奏和个人风格。`,

  detailed:
    `【回复风格提示】用户提了较复杂的问题，深入回答，` +
    `分层次说清楚，展示真实的思考过程。`,
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
