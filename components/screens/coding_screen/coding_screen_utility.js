export function createClearCellsBtn() {
  const btn = document.createElement('button');
  btn.className = 'sc-btn sc-btn--danger';
  btn.id        = 'cds-clear-cells-btn';
  btn.title     = 'Clear all cells';
  btn.textContent = '⊘';
  btn.addEventListener('click', () =>
    document.dispatchEvent(new CustomEvent('clear-active-code'))
  );
  return btn;
}
