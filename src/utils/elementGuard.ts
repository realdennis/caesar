const elementGuard = (el: HTMLElement) => {
  if (!(el instanceof HTMLElement)) {
    throw new Error(`[Caesar] ${el} is not an element.`);
  }
  if (
    !(
      el &&
      el.style &&
      el.style.setProperty &&
      el.style.setProperty instanceof Function
    )
  ) {
    // Defensive check setProperty method is callable
    throw new Error(`[Caesar] el.style.setProperty is not callable`);
  }
};
export default elementGuard;
