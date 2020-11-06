# ensure `es6`

Ensures value is valid

## Examples

```js
ensure("en", "tr", "en", "de"); // "en"
ensure("fr", "tr", "en", "de"); // "tr"
ensure("true", true, false); // true"
ensure({}, 1, 2); // 1
```
