// ── AI Chat Engine ────────────────────────────────────────────────────────────
//
//  Manages multi-turn conversation state and delegates network calls to
//  ai_client.js. Storage & token budget live in ai_chat_saving.js.

import { chat, streamChat } from '../ai_client.js';
import { getActivePersona } from '../ai_persona_switch.js';
import { calibrate } from './ai_chat_brain.js';
import {
  getHistory,
  appendMessage,
  canSend,
  getRemainingTokens,
  clearHistory,
} from './ai_chat_saving.js';

export { getHistory, clearHistory, getRemainingTokens, canSend };

/**
 * Send a message and stream the reply chunk by chunk.
 * @param {string} userText
 * @param {{ onChunk?: (chunk: string) => void }} [opts]
 * @returns {Promise<string>} full reply
 */
export async function sendMessage(userText, { onChunk } = {}) {
  if (!canSend()) {
    throw new Error('今日对话额度已用完，明天再来找小梦吧~');
  }
  appendMessage('user', userText);

  const persona = getActivePersona();
  const { prefix, maxTokens } = calibrate(userText, persona.EXAMPLES);
  const system = `${prefix}\n\n${persona.buildSystemPrompt()}`;

  let full = '';
  if (onChunk) {
    for await (const chunk of streamChat(getHistory(), system, maxTokens)) {
      full += chunk;
      onChunk(chunk);
    }
  } else {
    full = await chat(getHistory(), system, maxTokens);
  }

  appendMessage('assistant', full);
  return full;
}
