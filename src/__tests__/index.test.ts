import caesar from '../index';
import '@testing-library/jest-dom/extend-expect';

const getElement = () => {
  const el = document.createElement('div');
  // Since jsdom does not support correct setProperty & getProperty implement
  // https://github.com/jsdom/jsdom/issues/1895
  (el as any).__temp__css__var = {};
  el.style.setProperty = (key, value) => {
    (el as any).__temp__css__var = { [key]: value };
  };
  el.style.getPropertyValue = key => {
    return (el as any).__temp__css__var[key] || ''; // If property did not exist, it should return empty string instead of undefined.
  };
  return el;
};

test('Assign should be work', () => {
  const el = getElement();
  expect(el.style.getPropertyValue('--foo')).toBe('');
  caesar.assign(el, {
    foo: 'bar'
  });
  expect(el.style.getPropertyValue('--foo')).toBe('bar');
});

test('Query should be work', () => {
  const el = getElement();
  el.style.setProperty('--foo', 'bar');
  const { foo } = caesar.query(el, ['foo']);
  expect(foo).toBe('bar');
});