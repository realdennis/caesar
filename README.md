<div align="center">
<h1>Caesar</h1></br>
<br/>
<quote>"THIS IS THE LAST OF MY HAMON! TAKE IT!"</quote> <p>by Caesar Anthonio Zeppeli</p>

</div>

Caesar is a **developer-friendly** library for CSS3 variables get & set.

- Set CSS variables by `Caesar.assign` method like `Object.assign`.
- Get CSS variable value by name using `Caesar.query`.

## Install

```sh
$ npm install @realdennis/caesar
```

## Usage

Only two methods `Caesar.assign` & `Caesar.query`, the below is usage.

```javascript
import Caesar from "@realdennis/caesar";

const el = document.querySelector("div.container");
Caesar.assign(el, {
  duration: "2s",
  delay: "1.5s",
  height: "20px"
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
const { duration, height } = Caesar.query(el, ["duration", "height"]);
console.log(duration); // "2s"
console.log(height); // "20px"
```

## Note

- When variable does not exist, it'll return empty string (default value is '').
- Caesar **CANNOT** get the initial CSS variable value in stylesheet. 
- Each query return would be `string` type, though you assign in `number` type.
example:
```javascript
Caesar.assign(el, {
  containerTop: 20,
  containerBottom:10
});
const top = Caesar.query(el,['containerTop']).containerTop;
console.log(typeof top); // string
```

---

LICENSE MIT © 2019 realdennis