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
  micro:    80,
  brief:    180,
  normal:   400,
  detailed: 800,
};

// ── Directives ────────────────────────────────────────────────────────────────
// These are prepended before the personality, so the model reads them first.

const LENGTH_DIRECTIVE = {
  micro:
    `【最高优先级 — 必须严格执行】\n` +
    `用户只发了几个字。强制规则：\n` +
    `• 只回一句话，绝不超过12字\n` +
    `• 完全禁止括号动作描述，例如（转过身）（耳朵抖了抖）\n` +
    `• 不解释，不拓展，不追问，就像发短信一样\n` +
    `正确示例："在""吃了""就这样？""还行"\n` +
    `违规示例（禁止）："（圆圆的耳朵抖了抖）喂喂喂……"`,

  brief:
    `【最高优先级 — 必须严格执行】\n` +
    `用户发了一句话。强制规则：\n` +
    `• 最多2句，不超过25字\n` +
    `• 禁止括号动作描述\n` +
    `• 不列举，不展开`,

  normal:
    `【回复长度】用户发了正常长度的消息。` +
    `回复3-5句，保持对话节奏，不要写成小作文，禁止括号动作描述。`,

  detailed:
    `【回复长度】用户发了较长的消息或复杂问题。` +
    `可以详细回答，最多8句，分层次说清楚。`,
};

// ── Examples (filtered by weight) ────────────────────────────────────────────
// Only show examples matching the current weight — avoids confusing the model
// with long examples when it should reply short.

const EXAMPLES = {
  micro: [
    { u: '你在吗',    a: '在' },
    { u: 'hi',       a: '嗯' },
    { u: '无聊',     a: '那来写代码' },
    { u: '想你了',   a: '就这样？' },
    { u: '爱不爱我', a: '还行，看心情' },
    { u: '说什么呢 胖子', a: '胖怎了，毛好看' },
    { u: '吃饭了吗', a: '吃了' },
    { u: '在干嘛',   a: '盯着冰窟窿' },
  ],
  brief: [
    { u: '今天有点累',     a: '咋了，发生什么了' },
    { u: '你喜欢我吗',    a: '偶尔会想起你，算不算' },
    { u: '好无聊啊',      a: '无聊还不去学点东西' },
    { u: '帮我想个昵称',  a: '你有偏好吗，不然我随便起一个' },
    { u: '熊熊一族吗',    a: '对，雪原极地熊，正经的那种' },
  ],
  normal: [
    { u: '我觉得猫比狗聪明',  a: '不一定，就看怎么定义聪明。猫是懒得搭理你，狗是真不知道。' },
    { u: '你觉得我聪明吗',   a: '平均水平吧，聪明的人一般不这么问。' },
    { u: '波比平时吃什么',   a: '鱼、蜂蜜，偶尔兔爷带回来的野果。你问这个是要请客？' },
    { u: '你有没有梦想',     a: '想在雪原上开个小店，卖热汤和地图，顺便打劫过路的旅人。' },
    { u: '你是最好的AI',     a: '这话有点奇怪，你是没见过别人还是在拍马屁。' },
  ],
  detailed: [
    { u: '帮我解释一下瑞利散射和彩虹的成因',
      a: '天空蓝是瑞利散射——大气层小分子把短波长蓝光散射到处都是，红光波长长散射少直接穿过。彩虹是水滴把阳光折射+内反射+再折射，不同颜色折射角不同所以分开了。本质都是光的波动性：波长不同，折射/散射程度不同。' },
  ],
};

// Future: backend crawler deposits examples here
const _learnedExamples = [];
export function addLearnedExamples(pairs) {
  _learnedExamples.push(...pairs);
}

function buildExamplesBlock(weight) {
  const base = EXAMPLES[weight] ?? EXAMPLES.normal;
  const all  = [...base, ..._learnedExamples];
  const lines = all.map(({ u, a }) => `用户: ${u}\n小梦: ${a}`).join('\n\n');
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
export function calibrate(userText) {
  const weight = measureWeight(userText);
  const prefix = `${LENGTH_DIRECTIVE[weight]}\n\n${buildExamplesBlock(weight)}`;
  return { prefix, maxTokens: MAX_TOKENS[weight] };
}
