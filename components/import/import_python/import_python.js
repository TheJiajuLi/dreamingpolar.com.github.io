export function triggerImport(onContent) {
  const input = document.createElement('input');
  input.type   = 'file';
  input.accept = '.py,.txt';
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => onContent(e.target.result, file.name);
    reader.readAsText(file);
  });
  input.click();
}
