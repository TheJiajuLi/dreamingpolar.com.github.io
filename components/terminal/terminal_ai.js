// ── Terminal AI — response processing & conversation mode ─────────────────────
//
//  Imported by both terminal_commands.js (for runAiPrompt) and
//  terminal.js (for chat-mode state: isAiChatActive / exitAiChat / consumeAiChat).
//  Lives here to avoid a circular dependency between those two files.

// ── Confirm callback (injected by terminal.js to avoid circular import) ────────

let _confirmFn = null;

export function setConfirmFn(fn) { _confirmFn = fn; }

// ── Chat-mode state + conversation history ─────────────────────────────────────

let _aiChatActive = false;
let _history = []; // [{role:'user'|'assistant', content}]

export function isAiChatActive() { return _aiChatActive; }

export function exitAiChat(print) {
  _aiChatActive = false;
  _history = [];
  document.dispatchEvent(new CustomEvent('terminal-ai-mode', { detail: { active: false } }));
  print?.('\x1b[2m← 已退出 AI 对话\x1b[0m');
}

export async function consumeAiChat(line, print) {
  if (!_aiChatActive) return false;
  const trimmed = line.trim();
  if (trimmed) await _runAiTextReply(trimmed, print);
  return true;
}

// ── Public entry (called by terminal_commands.js 'ai' handler) ─────────────────

// Max history turns kept (user+assistant pairs) to avoid token overflow
const MAX_HISTORY_PAIRS = 8;

function _trimHistory() {
  // Keep at most MAX_HISTORY_PAIRS * 2 messages (one pair = user + assistant)
  const max = MAX_HISTORY_PAIRS * 2;
  if (_history.length > max) _history.splice(0, _history.length - max);
}

export async function runAiPrompt(prompt, print) {
  if (!prompt) { print('No prompt given.'); return; }

  // Fresh ai <prompt> invocation outside chat mode → start a new conversation
  if (!_aiChatActive) _history = [];

  const { detectLang } = await import('../ai/input_filter/input_filter.js');
  const detected = detectLang(prompt);

  if (detected === 'ai_chat') {
    await _runAiTextReply(prompt, print);
    return;
  }

  print(`\x1b[2m⚙  ${prompt}\x1b[0m`);

  try {
    const { chat, SYSTEM_BY_MODE, SYSTEM_TERMINAL } = await import('../ai/ai_client.js');
    const { getActivePersona } = await import('../ai/ai_persona_switch.js');

    const lang       = detected;
    const persona    = getActivePersona();
    const modeSystem = SYSTEM_BY_MODE[lang] ?? SYSTEM_TERMINAL;
    const system     = `${persona.buildSystemPrompt()}\n\n${modeSystem}${TERMINAL_PLATFORM_CONTEXT}`;
    _history.push({ role: 'user', content: prompt });
    _trimHistory();
    const response   = await chat(_history, system, 4000);
    _history.push({ role: 'assistant', content: response });
    const extracted  = _extractCodeBlock(response);

    if (extracted) {
      // AI included a proper code block — print explanation, dispatch code
      const textLines = _stripMd(extracted.text).split('\n').filter(l => l.trim());
      if (textLines.length) {
        print('');
        print('\x1b[36m小梦:\x1b[0m');
        for (const ln of textLines) print(ln);
      }
      print('');
      await _dispatchCode(extracted.lang || lang, extracted.code, print);
    } else {
      // AI returned pure text — print in terminal, don't touch code panel
      print('');
      print('\x1b[36m小梦:\x1b[0m');
      for (const ln of _stripMd(response).split('\n')) print(ln);
      print('');
      if (!_aiChatActive) {
        _aiChatActive = true;
        document.dispatchEvent(new CustomEvent('terminal-ai-mode', { detail: { active: true } }));
        print('\x1b[2m— 已进入 AI 对话 · 按 Esc 退出 —\x1b[0m');
      }
    }

  } catch (e) {
    print(`\x1b[31m⚠ ${e.message}\x1b[0m`);
  }
}

// ── Private helpers ────────────────────────────────────────────────────────────

const TERMINAL_PLATFORM_CONTEXT = `

[平台能力 — 必须了解]
你正在运行于 Dreaming Polar 的终端对话模式中。这是一个浏览器端编程平台，支持多种输出格式——根据问题类型选择最合适的代码块：

**Python（代码 / 图表）** — \`\`\`python
- 通过 Pyodide 在浏览器本地运行；numpy、matplotlib、pandas、sympy 均已预加载。
- 图表直接输出，不要说"无法生成图片"；用户问"画图"、"可视化"时直接写 matplotlib 代码。

**MathJax（数学公式）** — \`\`\`mathjax
- 平台原生支持 MathJax 渲染 LaTeX 公式，渲染后呈现在内容区。
- 示例：\`\`\`mathjax\\n\\\\[e^{i\\\\pi}+1=0\\\\]\\n\`\`\`
- 用户问定理、公式推导、方程时，优先用此格式。

**LaTeX（文档排版）** — \`\`\`latex
- 输出完整 LaTeX 文档；适合需要排版的长篇内容。

**Markdown** — \`\`\`markdown
- 输出富文本说明；适合带标题、列表、表格的解释性内容。

**HTML / 网络内容引用** — \`\`\`mathjax（HTML 模式）
- MathJax 模式是完整 HTML 渲染器，支持任意 HTML 标签和外部资源。

图片 — 优先使用以下可靠来源，无需用户提供 URL：
  LoremFlickr 关键词图（最推荐，始终有效，来自 Flickr 真实照片库）：
    格式：<img src="https://loremflickr.com/1200/800/arctic,iceberg" style="max-width:100%;border-radius:8px">
    关键词用英文逗号分隔，URL 路径末尾直接跟关键词，无需参数符号。
    示例：arctic → /1200/800/arctic,landscape；熊猫 → /1200/800/panda,bamboo
  注意：不要使用 source.unsplash.com（已停止服务，图片无法加载）。
  Wikimedia Commons（仅当你有把握知道准确路径时使用）
  用户自己提供的任意 URL → 直接嵌入

视频 — YouTube / Bilibili embed：
  格式：<iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
  如果用户要看某主题视频，用你知道的真实 VIDEO_ID，或告知用户搜索关键词。

决策树：
  用户想看图片 → 用 Unsplash 关键词 URL 嵌入真实照片（mathjax HTML 代码块）
  用户想看图表/数据可视化 → python matplotlib
  用户想看公式 → mathjax LaTeX
  用户想看视频 → mathjax iframe（给出 YouTube embed 或搜索建议）
  用户想看文档/笔记 → markdown 或 latex

规则：绝对不要编造随机 URL；Unsplash 关键词 URL 是安全的，随时可用。`;

function _stripMd(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

const KNOWN_LANGS = new Set(['python', 'mathjax', 'latex', 'markdown', 'javascript', 'js', 'html', 'css']);

// html → mathjax because our mathjax panel is a full HTML renderer
const LANG_ALIASES = { js: 'javascript', html: 'mathjax', htm: 'mathjax' };

function _normaliseLang(tag) {
  const t = (tag || '').toLowerCase().trim();
  if (!t) return 'python';
  return LANG_ALIASES[t] ?? (KNOWN_LANGS.has(t) ? t : 'python');
}

// Priority order when multiple blocks appear in one reply
const LANG_PRIORITY = ['mathjax', 'latex', 'markdown', 'python', 'javascript', 'css'];

function _extractCodeBlock(reply) {
  // 1. Collect ALL closed fenced blocks
  const all = [...reply.matchAll(/```(\w*)[^\n]*\n([\s\S]*?)```/g)].map(m => ({
    lang: _normaliseLang(m[1]),
    code: m[2].trim(),
  }));

  if (all.length > 0) {
    // Pick the highest-priority block; tie-break by first occurrence
    const primary = LANG_PRIORITY.reduce((best, p) => best ?? all.find(b => b.lang === p), null) ?? all[0];
    const text = reply.replace(/```[^\n]*\n[\s\S]*?```/g, '').trim();
    return { lang: primary.lang, code: primary.code, text };
  }

  // 2. Truncated response — opening fence with no closing fence yet
  const open = reply.match(/```(\w*)[^\n]*\n([\s\S]+)$/);
  if (open) {
    return {
      lang: _normaliseLang(open[1]),
      code: open[2].trim(),
      text: reply.slice(0, reply.indexOf('```')).trim(),
    };
  }

  // 3. Unfenced display math: \[...\] or $$...$$ that dominates the reply
  const mathMatch = reply.match(/(\\\[[\s\S]+?\\\]|\$\$[\s\S]+?\$\$)/);
  if (mathMatch && mathMatch[0].length / reply.length > 0.25) {
    return { lang: 'mathjax', code: reply.trim(), text: '' };
  }

  // 4. Inline img/iframe anywhere in the reply — extract tags, strip from text
  const embedTags = [...reply.matchAll(/<(img|iframe)\b[^>]*(?:\/>|>(?:[\s\S]*?<\/(?:img|iframe)>)?)/gi)];
  if (embedTags.length > 0) {
    const code = embedTags.map(m => m[0]).join('\n');
    const text = reply.replace(/<(img|iframe)\b[^>]*(?:\/>|>(?:[\s\S]*?<\/(?:img|iframe)>)?)/gi, '').trim();
    return { lang: 'mathjax', code, text };
  }

  // 5. Unfenced HTML block: reply is dominated by block-level HTML tags
  const blockTags = (reply.match(/<\s*(div|figure|section|article|table|ul|ol|video|audio|embed)[^>]*>/gi) || []).length;
  if (blockTags >= 3) {
    return { lang: 'mathjax', code: reply.trim(), text: '' };
  }

  return null;
}

// Single point for confirmation + code-panel dispatch — used by both paths.
async function _dispatchCode(lang, code, print) {
  if (_confirmFn) {
    const isMedia = lang === 'mathjax' && /<(img|iframe)\b/i.test(code);
    const question = isMedia
      ? '\x1b[33m▶ 是否在内容区显示此内容？(y/n)\x1b[0m'
      : '\x1b[33m⚠ 即将覆盖代码编辑器中的内容，确认继续？(y/n)\x1b[0m';
    const ok = await _confirmFn(question, print);
    if (!ok) { print('\x1b[2m✕ 已取消\x1b[0m'); return false; }
  }
  const { setMode } = await import('../compiler/compiler_mode_switcher/compiler_mode_switcher.js');
  setMode(lang);
  document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code, lang } }));
  print(`\x1b[2m✓ ${lang} → Code panel.\x1b[0m`);
  return true;
}

async function _runAiTextReply(prompt, print) {
  print(`\x1b[2m⚙  ${prompt}\x1b[0m`);

  try {
    const { chat }             = await import('../ai/ai_client.js');
    const { getActivePersona } = await import('../ai/ai_persona_switch.js');

    const persona   = getActivePersona();
    const system    = persona.buildSystemPrompt() + TERMINAL_PLATFORM_CONTEXT;
    _history.push({ role: 'user', content: prompt });
    _trimHistory();
    const reply     = await chat(_history, system, 4000);
    _history.push({ role: 'assistant', content: reply });
    const extracted = _extractCodeBlock(reply);

    if (extracted) {
      const textLines = _stripMd(extracted.text).split('\n').filter(l => l.trim());
      if (textLines.length) {
        print('');
        print('\x1b[36m小梦:\x1b[0m');
        for (const ln of textLines) print(ln);
      }
      print('');

      await _dispatchCode(extracted.lang, extracted.code, print);
    } else {
      print('');
      print('\x1b[36m小梦:\x1b[0m');
      for (const ln of _stripMd(reply).split('\n')) print(ln);
      print('');
    }

    if (!_aiChatActive) {
      _aiChatActive = true;
      document.dispatchEvent(new CustomEvent('terminal-ai-mode', { detail: { active: true } }));
      print('\x1b[2m— 已进入 AI 对话 · 按 Esc 退出 —\x1b[0m');
    }

  } catch (e) {
    print(`\x1b[31m⚠ ${e.message}\x1b[0m`);
  }
}
