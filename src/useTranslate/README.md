# useTranslate `es6` `react` `react-intl`

Translates message

## Examples

```js
import React from 'react'

export const useTranslate = () => {
  const translate = useTranslate();
  const [name, setName] = useState("world");

  return (
    <div>
      <p>{translate("hello")}</p>
      <p>{translate("hello.with-name", { name })}</p>
    </div>
  )
}
```
