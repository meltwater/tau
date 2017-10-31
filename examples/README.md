# Examples

<!--- TODO: Update all uses of is-true with added example. -->

## Running Examples Locally

### Local configuration

Set required and optional configuration options in `examples/local.json`, e.g.,

```json
{
  "logLevel": "info",
  "logOutputMode": "short"
}
```

Override any option with the corresponding environment variable:

- `LOG_LEVEL` (optional)
- `LOG_OUTPUT_MODE` (optional)

### Running examples with arguments

List all runnable examples with

```
$ yarn run example
```

Run provided examples with, e.g.,

```
$ yarn run example is-true
```

Pass arguments to examples with

```
$ yarn run example is-true false
```

Automatically watch and rerun an example on changes with, e.g.,

```
$ yarn run example:watch is-true
```

#### Debugging examples

Debug examples with, e.g.,

```
$ yarn run example:inspect is-true
```

For examples which run a single process and then exit,
create a breakpoint by adding the statement `debugger`
to the top of the example function, e.g.,

```js
export default ({log}) => async () => {
  debugger
  // ...
}
```

Automatically watch and rerun a debuggable example on changes with, e.g.,

```
$ yarn run example:inspect:watch is-true
```

## Writing New Examples

1. Create a new file in `examples` or add an example to an existing file.
   Any new dependencies which are only used
   in examples should be installed as devDependencies.
   The return value of the function will be logged as `data`.
   All exported functions can take options and arguments with defaults, e.g.,

   ```js
   /* examples/query-api.js */
   import request from 'request-promise'

   export default ({
     log,
     fooApi = 'https://example.com'
   }) => async (query = 'foo', page = 1) => {
     const qs = {page: parseInt(page)}
     log.debug({query, qs})
     return request(`${fooApi}/search/${query}`, {qs})
   }
   ```

2. Import and add the example to `examples/index.js`, e.g.,

   ```js
   /* examples/index.js */
   import queryApi from './query-api'

   export const examples = {
     queryApi,
     // ...
   }
   ```

3. Add any new options to this README and in `examples/index.js`, e.g.,

   ```js
   /* examples/index.js */
   const envVars = [
     'FOO_API',
     // ...
   ]
   ```

   ````
   /* examples/README.md */
   ### Local configuration

   Set required and optional configuration options in `examples/local.json`, e.g.,

   ```json
   {
     "queryApi": "https://example.com",
     ...
   }
   ```

   Override any option with the corresponding environment variable:

   - QUERY_API
   - ...
   ````
