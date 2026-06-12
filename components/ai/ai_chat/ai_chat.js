// ── AI Chat Engine ────────────────────────────────────────────────────────────
//
//  Manages multi-turn conversation state and delegates network calls to
//  ai_client.js. Storage & token budget live in ai_chat_saving.js.

import { chat } from '../ai_client.js';
import { SYSTEM_DEFAULT } from '../ai_personalities.js';
import { PREFERENCES_CONTEXT } from '../ai_preferences.js';
import { calibrate } from './ai_chat_brain.js';
import {
  getHistory,
  appendMessage,
  canSend,
  getRemainingTokens,
  clearHistory,
} from './ai_chat_saving.js';

export { getHistory, clearHistory, getRemainingTokens, canSend };

export async function sendMessage(userText) {
  if (!canSend()) {
    throw new Error('今日对话额度已用完，明天再来找波比我吧~ 🐻');
  }
  appendMessage('user', userText);
  // Length prefix comes FIRST so the model sees it before the personality
  const { prefix, maxTokens } = calibrate(userText);
  const system = `${prefix}\n\n${SYSTEM_DEFAULT}\n\n${PREFERENCES_CONTEXT}`;
  const content = await chat(getHistory(), system, maxTokens);
  appendMessage('assistant', content);
  return content;
}
