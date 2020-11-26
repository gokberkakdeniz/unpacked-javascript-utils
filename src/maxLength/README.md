# maxLength `ts` `react-final-form` `react-intl`

Checks if given string exceeds maximum length

## Example

```js
const max5 = maxLength(5);

max5("1234") // undefined
max5("123456") // { message: "validators.maxLength", params: { length: 5 } }
```
