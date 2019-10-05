import elementGuard from "./utils/elementGuard";

const VERSION = 1.0;

const assign: (el: HTMLElement, varObj: object) => void = (el, varObj) => {
  elementGuard(el);
  Object.keys(varObj).forEach(name =>
    el.style.setProperty(`--${name}`, varObj[name])
  );
};

const query: (el: HTMLElement, names: [string]) => object = (el, names) => {
  elementGuard(el);
  return names
    .map(name => {
      const varObj = { [name]: el.style.getPropertyValue(`--${name}`) };
      return varObj;
    })
    .reduce((prev, next) => Object.assign({}, prev, next));
};

export default { assign, query, _version: VERSION };
