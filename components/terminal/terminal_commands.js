// ── Dreaming Polar terminal command registry ───────────────
// Handlers may be async. executeCommand awaits them so async commands work.

const _registry = new Map();

export function registerCommand(name, handler) {
  _registry.set(name.toLowerCase(), handler);
}

export async function executeCommand(line, print) {
  const trimmed = line.trim();
  if (!trimmed) return;

  const [cmd, ...args] = trimmed.split(/\s+/);
  const handler = _registry.get(cmd.toLowerCase());

  if (!handler) {
    print(`Unknown command: ${cmd}. Type 'help' for a list.`);
    return;
  }

  // __CLEAR__ sentinel thrown by 'clear' propagates up to terminal.js.
  // All other errors are handled inside each handler.
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
  print("Tip: 'ai <description>' asks Polar Bear to write and run Python code.");
});

registerCommand('clear', () => {
  throw '__CLEAR__';
});

// ── AI command ─────────────────────────────────────────────
registerCommand('ai', async (args, print) => {
  if (!args.length) {
    print('Usage: ai <describe what you want>');
    print('Example: ai plot a 3D Gaussian distribution');
    return;
  }

  const prompt = args.join(' ');
  print(`\x1b[2m小梦: thinking about "${prompt}"…\x1b[0m`);

  try {
    const { ask, SYSTEM_TERMINAL } = await import('../ai/ai_client.js');
    const code = await ask(prompt, SYSTEM_TERMINAL);

    print('');
    print('\x1b[32m# 小梦 generated:\x1b[0m');
    for (const line of code.split('\n')) print(line);
    print('');

    document.dispatchEvent(new CustomEvent('ai-insert-and-run', { detail: { code } }));
    print('\x1b[2m✓ Code inserted and running in Code panel.\x1b[0m');

  } catch (e) {
    print(`\x1b[31m小梦 error: ${e.message}\x1b[0m`);
  }
});

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
