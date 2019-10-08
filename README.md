<div align="center">
<h1>Caesar</h1>
</br>
<quote>"THIS IS THE LAST OF MY HAMON! TAKE IT!"</quote>
<p>by Caesar Anthonio Zeppeli</p>
<a href="https://www.npmjs.com/package/@realdennis/caesar">
<img src="https://media.giphy.com/media/11TN3gkseh4Vos/source.gif" alt="Joseph Joestar Cry"/>
</a>

<a href="https://github.com/realdennis/caesar/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/realdennis/caesar.svg" alt="License" />
</a>
<a href="https://www.npmjs.com/package/@realdennis/caesar">
   <img src="https://img.shields.io/npm/dm/@realdennis/caesar.svg" alt="npm downloads" />
</a>
<a href="https://github.com/realdennis/caesar/stargazers">
   <img src="https://img.shields.io/github/stars/realdennis/caesar.svg" alt="GitHub Stars" />
</a>
<a href="https://travis-ci.org/realdennis/caesar">
   <img src="https://travis-ci.org/realdennis/caesar.svg?branch=master" alt="Build Status" />
</a>
    
    
</div>
</br>

Caesar is a **developer-friendly** library for CSS3 variables get & set.

- Set CSS variables by `caesar.assign` method like `Object.assign`.
- Get CSS variable value by name using `caesar.query`.

[Demo](https://codepen.io/realdennis/pen/YzzzORR)

## Install

```sh
$ npm install @realdennis/caesar
```

or script tag

```html
<script src="https://unpkg.com/@realdennis/caesar@1.0.4/dist/index.umd.js"></script>
```

## Usage

Only two methods `caesar.assign` & `caesar.query`, the below is usage.

```javascript
import caesar from '@realdennis/caesar';

const el = document.querySelector('div.container');
caesar.assign(el, {
  duration: '2s',
  delay: '1.5s',
  height: '20px'
});
/* Now the container style would be like below
 ** div.container{
 **   --duration: 2s;
 **   --delay: 1.5s;
 **   --height: 20px;
 **   transition-delay: var(--duration);
 ** }
 **
 */
const { duration, height } = caesar.query(el, ['duration', 'height']);
console.log(duration); // "2s"
console.log(height); // "20px"
```

## Note

- When variable does not exist, it'll return empty string (default value is '').
- Caesar **CANNOT** get the initial CSS variable value in stylesheet.
- Each query return would be `string` type, though you assign in `number` type.
  example:

```javascript
caesar.assign(el, {
  containerTop: 20,
  containerBottom: 10
});
const top = caesar.query(el, ['containerTop']).containerTop;
console.log(typeof top); // string
```

- If you are using `typescript` and `querySelector`, it'll get `Element` type, please type assertion `as HTMLElement`.
- Full document will coming soon...

---

LICENSE MIT © 2019 realdennis
