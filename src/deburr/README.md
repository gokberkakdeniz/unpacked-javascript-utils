# deburr `es6`

Removes accents and diacritics from text

## Examples

```js
deburr("Pijamalı hasta yağız şoföre çabucak güvendi."); // "Pijamalı hasta yagız sofore cabucak guvendi."
deburr("Zwölf Boxkämpfer jagen Viktor quer über den grossen Sylter Deich"); // "Zwolf Boxkampfer jagen Viktor quer uber den grossen Sylter Deich"

// This ones won't work!
deburr("ß ł"); // ß ł
```
