const CLASS_NAME = "theme-amoled";

export function start(): void {
  document.body.classList.add(CLASS_NAME);
}

export function stop(): void {
  document.body.classList.remove(CLASS_NAME);
}
