// ── Dreaming Polar terminal command registry ───────────────
// Handlers may be async. executeCommand awaits them so async commands work.

import { runAiPrompt } from './terminal_ai.js';

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
  print('我是助手小梦 — 您正处于Dreaming Polar的终端');
  print('');
  print('Available commands:');
  for (const name of cmds) print(`  › ${name}`);
  print('');
  print("Tip: type 'ai' then Enter, or 'ai <task>' — I will writes and runs the code for you.");
});

registerCommand('clear', () => {
  throw '__CLEAR__';
});

// ── AI command ─────────────────────────────────────────────
//  Usage:
//    ai                          → show prompt hint
//    ai <description>            → auto-routes: text reply in terminal or code in panel
//    ai<description>             → same, angle-bracket style

let _aiPendingPrompt = false;

registerCommand('ai', async (args, print) => {
  if (!args.length) {
    _aiPendingPrompt = true;
    print('\x1b[36m小梦 — type your task and press Enter:\x1b[0m');
    return;
  }

  _aiPendingPrompt = false;
  await runAiPrompt(args.join(' '), print);
});

export function consumeAiPending(line, print) {
  if (!_aiPendingPrompt) return false;
  _aiPendingPrompt = false;
  runAiPrompt(line.trim(), print);
  return true;
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
