import elementGuard from './utils/elementGuard';
const VERSION = 1.0;
interface CssVarObj {
  [name: string]: string | number;
}

const assign: (el: HTMLElement, varObj: CssVarObj) => void = (el, varObj) => {
  elementGuard(el);
  Object.keys(varObj).forEach(name => {
    const value = String(varObj[name]);
    el.style.setProperty(`--${name}`, value);
  });
};

const query: (el: HTMLElement, names: [string]) => CssVarObj = (el, names) => {
  elementGuard(el);
  return names
    .map(name => {
      const varObj = { [name]: el.style.getPropertyValue(`--${name}`) };
      return varObj;
    })
    .reduce((prev, next) => Object.assign({}, prev, next)) as CssVarObj;
};

export default { assign, query, _version: VERSION };
