# minLength `ts` `react-final-form` `react-intl`

Checks if given string is smaller than minimum length

## Example

```js
const min5 = minLength(5);

min5("123456") // undefined
min5("1234") // { message: "validators.minLength", params: { length: 5 } }
```
