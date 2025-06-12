export function capitalize(t: string) {
  if (t.length <= 2) return t.toUpperCase();
  return t[0].toUpperCase() + t.slice(1);
}

export async function getVimeoAPIPlayer() {
  return new Promise((res, rej) => {
    let expire = 10000;
    const wait = setInterval(() => {
      if (window?.Vimeo) {
        res(window.Vimeo.Player);
        clearInterval(wait);
      }
      expire -= 100;
      if (expire <= 0) rej();
    }, 100);
  });
}
