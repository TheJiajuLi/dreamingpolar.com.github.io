// ── AI Chat Engine ────────────────────────────────────────────────────────────
//
//  Manages multi-turn conversation state and delegates network calls to
//  ai_client.js. Storage & token budget live in ai_chat_saving.js.

import { chat } from '../ai_client.js';
import { SYSTEM_DEFAULT } from '../ai_personalities.js';
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
  const content = await chat(getHistory(), SYSTEM_DEFAULT, 1024);
  appendMessage('assistant', content);
  return content;
}
