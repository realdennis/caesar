export const VERSION = 1.1;
interface customProperties {
  [name: string]: string | number;
}

export const assign: (el: HTMLElement, customProperties: customProperties) => void = (
  el,
  customProperties
) => {
  Object.keys(customProperties).forEach(name => {
    const value = String(customProperties[name]);
    el.style.setProperty(`--${name}`, value);
  });
};

export const query: (el: HTMLElement, names: string[]) => customProperties = (
  el,
  names
) => {
  return names
    .map(name => {
      const varObj = { [name]: el.style.getPropertyValue(`--${name}`) };
      return varObj;
    })
    .reduce((prev, next) => Object.assign({}, prev, next)) as customProperties;
};
