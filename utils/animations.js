export const isReduced = () => {
  if (!window) {
    window.location("/");
  } else {
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  }
};
