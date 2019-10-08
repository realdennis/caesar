import isFunction from './isFunction';
const elementGuard = (el: HTMLElement) => {
  if (!(el instanceof HTMLElement)) {
    throw new Error(`[Caesar] ${el} is not an element.`);
  }
  if (
    !(
      el &&
      el.style &&
      el.style.setProperty &&
      isFunction(el.style.setProperty)
    )
  ) {
    // Defensive check setProperty method is callable
    throw new Error(`[Caesar] el.style.setProperty is not callable`);
  }
};
export default elementGuard;
