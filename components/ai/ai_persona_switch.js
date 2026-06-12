// ── AI Persona Switch — the valve ─────────────────────────────────────────────
//  Manages which persona is active. Import this wherever you need to
//  read or write the active persona.

import * as XmPersona   from './ai_personas/xm/xm_persona.js';
import * as BobyPersona from './ai_personas/boby/boby_persona.js';

export const PERSONAS = [XmPersona, BobyPersona];

const STORAGE_KEY = 'dp-ai-persona';

export function getActivePersona() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return PERSONAS.find(p => p.id === saved) ?? XmPersona;
}

export function setActivePersona(id) {
  localStorage.setItem(STORAGE_KEY, id);
  document.dispatchEvent(new CustomEvent('ai-persona-changed', { detail: { id } }));
}

export function cyclePersona() {
  const currentId = localStorage.getItem(STORAGE_KEY) ?? XmPersona.id;
  const idx       = PERSONAS.findIndex(p => p.id === currentId);
  const next      = PERSONAS[(idx + 1) % PERSONAS.length];
  setActivePersona(next.id);
  return next;
}
