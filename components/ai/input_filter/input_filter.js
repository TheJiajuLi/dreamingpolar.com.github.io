// ── AI Input Filter ──────────────────────────────────────────────────────────
//
//  Single source of routing logic for every AI input (header, future inputs).
//  Returns a target mode string so the caller knows how to handle the response.
//
//  Routing rules (priority order):
//    1. Explicit LaTeX keywords        → 'latex'
//    2. Explicit MathJax/formula kw    → 'mathjax'
//    3. Explicit Markdown keywords     → 'markdown'
//    4. Explicit Python/code/plot kw   → 'python'
//    5. Everything else                → 'ai_chat'  (conversational)
//
//  Callers may apply additional context overrides (e.g. customise-mode fallback).
//  The caller is responsible for acting on the returned mode:
//    - 'latex' | 'mathjax' | 'markdown' | 'python' → call ask(), dispatch ai-insert-and-run
//    - 'ai_chat'                                    → dispatch ai-chat-send, skip ask()

export function detectLang(prompt, currentMode = 'python') {
  const low = prompt.toLowerCase();

  if (/\blatex\b/.test(low))                                        return 'latex';
  if (/\bmathjax\b|公式|formula|方程式|equation|数学表达式/.test(low)) return 'mathjax';
  if (/\bmarkdown\b|readme/.test(low))                              return 'markdown';
  if (/python|plot\b|图表|图像|画图|代码|程序|编程/.test(low))          return 'python';

  // No engineering signal detected → conversational
  return 'ai_chat';
}
