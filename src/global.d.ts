declare global {
  interface Window {
    Vimeo: {
      Player: any; // Or import the actual Vimeo.Player type if available
    };
  }
}
export {};
