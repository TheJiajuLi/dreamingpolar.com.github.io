const CODE_KEY = 'dreaming-polar-code';

export function loadCode() {
  return localStorage.getItem(CODE_KEY) ?? '';
}

export function saveCode(value) {
  try { localStorage.setItem(CODE_KEY, value); } catch (_) {}
}
