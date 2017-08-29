# API Reference

<!--- TODO: Update docs for added module(s). -->

## Top-Level Exports

- [`isTrue(check)`](#istruecheck)

### Importing

Every function described above is a top-level export.
You can import any of them like this:

```js
import { isTrue } from '@meltwater/makenew-node-lib'
```

---
### `isTrue(check)`

Checks if its argument is true.

#### Arguments

1. `check` (*any*): The thing to check.

#### Returns

(*boolean*): If `check` is `true`.

#### Example

```js
async () => {
  const x = await isTrue(true)
  x === true
}

async () => {
  const y = await isTrue('')
  y === false
}
```
