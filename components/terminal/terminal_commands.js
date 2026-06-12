// ── Dreaming Polar terminal command registry ───────────────
// Handlers may be async. executeCommand awaits them so async commands work.

const _registry = new Map();

export function registerCommand(name, handler) {
  _registry.set(name.toLowerCase(), handler);
}

export async function executeCommand(line, print) {
  const trimmed = line.trim();
  if (!trimmed) return;

  // Support both "ai prompt text" and "ai<prompt text>" syntax
  let cmd, args;
  const angleMatch = trimmed.match(/^([a-zA-Z_-]+)<(.+)>$/s);
  if (angleMatch) {
    cmd  = angleMatch[1];
    args = angleMatch[2].trim().split(/\s+/);
  } else {
    [cmd, ...args] = trimmed.split(/\s+/);
  }

  const handler = _registry.get(cmd.toLowerCase());
  if (!handler) {
    print(`Unknown command: ${cmd}. Type 'help' for a list.`);
    return;
  }

  await handler(args, print);
}

export function commandList() {
  return [..._registry.keys()].sort();
}

// ── Built-in commands ──────────────────────────────────────

registerCommand('help', (args, print) => {
  const cmds = commandList();
  print('Polar Bear (小梦) — Dreaming Polar terminal');
  print('');
  print('Available commands:');
  for (const name of cmds) print(`  › ${name}`);
  print('');
  print("Tip: type 'ai' then Enter, or 'ai <task>' — 小梦 writes and runs the code for you.");
});

registerCommand('clear', () => {
  throw '__CLEAR__';
});

// ── AI command ─────────────────────────────────────────────
//  Usage:
//    ai                          → show prompt hint
//    ai <description>            → generate + run code
//    ai<description>             → same, angle-bracket style

let _aiPendingPrompt = false;  // true after bare 'ai' Enter

registerCommand('ai', async (args, print) => {
  if (!args.length) {
    // Bare "ai" — prime the terminal to accept the next line as the prompt
    _aiPendingPrompt = true;
    print('\x1b[36m小梦 engineering mode — type your task and press Enter:\x1b[0m');
    return;
  }

  _aiPendingPrompt = false;
  const prompt = args.join(' ');
  await _runAiPrompt(prompt, print);
});

export function consumeAiPending(line, print) {
  if (!_aiPendingPrompt) return false;
  _aiPendingPrompt = false;
  _runAiPrompt(line.trim(), print);
  return true;
}

async function _runAiPrompt(prompt, print) {
  if (!prompt) { print('No prompt given.'); return; }

  print(`\x1b[2m⚙  ${prompt}\x1b[0m`);

  try {
    const { ask, SYSTEM_BY_MODE, SYSTEM_TERMINAL } = await import('../ai/ai_client.js');
    const { detectLang }  = await import('../ai/input_filter/input_filter.js');
    const { setMode }     = await import('../compiler/compiler_mode_switcher/compiler_mode_switcher.js');

    // Route by content — same logic as ai_header.js
    // If nothing code-like is detected (ai_chat), fall back to Python task
    const detected = detectLang(prompt);
    const lang     = detected === 'ai_chat' ? 'python' : detected;
    const system   = SYSTEM_BY_MODE[lang] ?? SYSTEM_TERMINAL;

    const code = await ask(prompt, system);

    print('');
    print('\x1b[32m# 小梦:\x1b[0m');
    for (const line of code.split('\n')) print(line);
    print('');

    setMode(lang);
    document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code, lang } }));
    print(`\x1b[2m✓ ${lang} → Code panel.\x1b[0m`);

  } catch (e) {
    print(`\x1b[31m⚠ ${e.message}\x1b[0m`);
  }
}

// ── Screen commands ────────────────────────────────────────

const SCREEN_ALIASES = {
  content:   'content-screen',
  code:      'coding-screen',
  coding:    'coding-screen',
  compile:   'compiling-screen',
  compiling: 'compiling-screen',
  output:    'compiling-screen',
  terminal:  'terminal',
};

function resolveScreen(arg) {
  if (!arg) return null;
  return SCREEN_ALIASES[arg.toLowerCase()] ?? arg;
}

registerCommand('fullscreen', (args, print) => {
  const id = resolveScreen(args[0]);
  if (!id) { print('Usage: fullscreen <content|coding|compiling>'); return; }
  window.screenController?.maximize?.(id) ?? window.screenController?.open?.(id);
  print(`Fullscreen → ${id}`);
});

registerCommand('open', (args, print) => {
  const id = resolveScreen(args[0]);
  if (!id) { print('Usage: open <content|coding|compiling|terminal>'); return; }
  window.screenController?.open(id);
  print(`Opened → ${id}`);
});

registerCommand('close', (args, print) => {
  const id = resolveScreen(args[0]);
  if (!id) { print('Usage: close <content|coding|compiling|terminal>'); return; }
  window.screenController?.close(id);
  print(`Closed → ${id}`);
});

registerCommand('escape', (args, print) => {
  const sc = window.screenController;
  if (!sc) return;
  ['content-screen', 'coding-screen', 'compiling-screen'].forEach(id => {
    if (sc.getState?.(id) === 'maximized') sc.restore?.(id) ?? sc.open?.(id);
  });
  print('Restored screens.');
});

registerCommand('screens', (args, print) => {
  const sc = window.screenController;
  if (!sc) { print('No screen controller found.'); return; }
  print('Screen states:');
  const ids = ['content-screen', 'coding-screen', 'compiling-screen', 'terminal'];
  for (const id of ids) {
    const state = sc.getState?.(id) ?? 'unknown';
    print(`  ${state === 'normal' ? '●' : '○'} ${id.padEnd(20)} ${state}`);
  }
});
