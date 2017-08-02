# Node.js npm Package Skeleton

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Fmakenew--node--lib-blue.svg)](https://www.npmjs.com/package/@meltwater/makenew-node-lib)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/makenew-node-lib)
[![docs](https://img.shields.io/badge/docs-master-green.svg)](https://github.com/meltwater/makenew-node-lib/tree/master/docs)
[![Codecov](https://img.shields.io/codecov/c/token/eHEIOjPT5u/github/meltwater/makenew-node-lib.svg)](https://codecov.io/gh/meltwater/makenew-node-lib)
[![CircleCI](https://circleci.com/gh/meltwater/makenew-node-lib.svg?style=shield&circle-token=30395fe910ca2b9f7553c6311e85bd8ebe1ee059)](https://circleci.com/gh/meltwater/makenew-node-lib)

## Description

Bootstrap a new [Node.js] [npm package] in less than a minute.

[Node.js]: https://nodejs.org/
[npm package]: https://docs.npmjs.com/how-npm-works/packages

### Features

- [Node.js]'s [npm] package structure.
- Fast, reliable, and secure dependency management with [yarn].
- Next generation JavaScript with [Babel].
- Write working examples with configurable options and arguments.
- Linting with the [JavaScript Standard Style] and [JSON Lint].
- Automatically lint on changes with [gulp].
- Futuristic unit testing with [AVA].
- Code coverage reporting with [Istanbul], [nyc], and [Codecov].
- Continuous testing and automated package publishing with [CircleCI].
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- Badges from [Shields.io].

[AVA]: https://github.com/avajs/ava
[Babel]: https://babeljs.io/
[CircleCI]: https://circleci.com/
[Codecov]: https://codecov.io/
[EditorConfig]: http://editorconfig.org/
[gulp]: http://gulpjs.com/
[Keep a CHANGELOG]: http://keepachangelog.com/
[Istanbul]: https://istanbul.js.org/
[JavaScript Standard Style]: http://standardjs.com/
[JSON Lint]: https://github.com/zaach/jsonlint
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[nyc]: https://github.com/istanbuljs/nyc
[Shields.io]: http://shields.io/
[yarn]: https://yarnpkg.com/

### Bootstrapping a New Project

1. Clone the master branch of this repository with

   ```
   $ git clone --single-branch git@github.com:meltwater/makenew-node-lib.git <new-node-lib>
   $ cd <new-node-lib>
   ```

   Optionally, reset to the latest version with

   ```
   $ git reset --hard <version-tag>
   ```

2. Create an empty (non-initialized) repository on GitHub.

3. Create a new [CircleCI] project.
   Add `NPM_TOKEN` as an environment variable.
   Create a project API token with status scope
   to use for the README build badge.

4. Optionally setup [Codecov].
   Navigate to the settings page for the Codecov project,
   use the Upload Token to add `CODECOV_TOKEN`
   as an environment variable to the CircleCI project,
   and note the Graphing Token to use for the README badge.

5. Run

   ```
   $ ./makenew.sh
   ```

   This will replace the boilerplate, delete itself,
   remove the git remote, remove upstream tags,
   and stage changes for commit.

6. Add and commit the changes and push to GitHub with

   ```
   $ git add .
   $ git commit -m "Replace makenew boilerplate"
   $ git remote add origin git@github.com:meltwater/<new-node-lib>.git
   $ git push -u origin master
   ```

7. Ensure the CircleCI build passes,
   then publish the initial version of the package with

   ```
   $ nvm install
   $ yarn
   $ npm version patch
   ```

8. Update the branch protection options for `master`
   to require all status checks to pass.

### Updating

If you want to pull in future updates from this skeleton,
you can fetch and merge in changes from this repository.

Add this as a new remote with

```
$ git remote add upstream git@github.com:meltwater/makenew-node-lib.git
```

You can then fetch and merge changes with

```
$ git fetch --no-tags upstream
$ git merge upstream/master
```

#### Changelog

Note that `CHANGELOG.md` is just a template for this skeleton.
The actual changes for this project are documented in the commit history
and summarized under [Releases].

[Releases]: https://github.com/meltwater/makenew-node-lib/releases

## Installation

Add this as a dependency to your project using [yarn] with

```
$ yarn add @meltwater/makenew-node-lib
```

[yarn]: https://yarnpkg.com/

## Usage

**See the complete [API documentation](./docs) and [working examples](./examples).**

This package provides an async function which checks if its argument is true.

```js
import isTrue from '@meltwater/makenew-node-lib'

const logTrue = async () => {
  const trueValue = await isTrue(true)
  console.log(trueValue)
}

logTrue()
// true
```

## Development Quickstart

```
$ git clone https://github.com/meltwater/makenew-node-lib.git
$ cd makenew-node-lib
$ nvm install
$ yarn
```

Run each command below in a separate terminal window:

```
$ yarn run watch
$ yarn run watch:test
```

## Development and Testing

### Source Code

The [makenew-node-lib source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:meltwater/makenew-node-lib.git
```

[makenew-node-lib source]: https://github.com/meltwater/makenew-node-lib

### Requirements

You will need [Node.js] with [yarn].

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

and set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn
```

[Node.js]: https://nodejs.org/
[nvm]: https://github.com/creationix/nvm

#### CircleCI

The following environment variables must be set on CircleCI:

- `NPM_TOKEN`: npm token for installing and publishing private packages.
- `CODECOV_TOKEN`: Codecov token for uploading coverage reports (optional).

These may be set manually or by running the script `./circleci/envvars.sh`.

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

#### Examples

##### Configuration

Set required and optional configuration options in `examples/local.json`, e.g.,

```json
{
  "logLevel": "debug"
}
```

or override any options with the corresponding environment variable:

  - `LOG_LEVEL` (optional)

##### Running locally

List all runnable examples with

```
$ yarn run example
```

Run provided examples with, e.g.,

```
$ yarn run example -- is-true | yarn run bunyan
```

or more compactly with, e.g.,

```
$ yarn example is-true | yarn bunyan
```

Pass arguments to examples with

```
$ yarn example is-true false | yarn bunyan
```

Automatically watch and rerun an example on changes with, e.g.,

```
$ yarn run example:watch -- is-true | yarn run bunyan
```

In bash or zsh, you may define a convenience function with

```
$ function yrx () { yarn run example $@ | yarn run bunyan; }
```

###### Debugging

Debug examples with, e.g.,

```
$ yarn run example:inspect -- is-true | yarn run bunyan
```

In bash or zsh, you may define a convenience function with

```
$ function yrxi () { yarn run example:inspect $@ | yarn run bunyan; }
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

##### Importing

All examples are included with this package as importable modules.

_Imported examples are not supported as a stable API._

_Some examples may use devDependencies
which need to be installed as dependencies
by any package which imports them._

Create and run an example with

```js
import { createExample } from '@meltwater/makenew-node-lib'

// createExample(exampleName, options)(...args)
createExample('is-true')().catch(err => { console.error(err) })
```

or import them directly with

```js
import createLogger from '@meltwater/mlabs-logger'
import { examples } from '@meltwater/makenew-node-lib'

const isTrue = examples.isTrue({log: createLogger()})

isTrue().then(data => { console.log(data) }).catch(err => { console.error(err) })
```

##### Writing examples

1. Create a new file in `examples`.
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
     return request(`${fooApi}/query`, {qs})
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
   export const envVars = [
     'LOG_LEVEL',
     'FOO_API',
     // ...
   ]
   ```

#### Production Build

Lint, test, and transpile the production build to `dist` with

```
$ yarn run dist
```

##### Publishing a new release

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit,
and trigger CircleCI to publish the new version to npm.

[npm version]: https://docs.npmjs.com/cli/version

#### Linting

Linting against the [JavaScript Standard Style] and [JSON Lint]
is handled by [gulp].

View available commands with

```
$ yarn run gulp -- --tasks
```

In a separate window, use gulp to watch for changes
and lint JavaScript and JSON files with

```
$ yarn run watch
```

Automatically fix most JavaScript formatting errors with

```
$ yarn run format
```

[gulp]: http://gulpjs.com/
[JavaScript Standard Style]: http://standardjs.com/
[JSON Lint]: https://github.com/zaach/jsonlint

#### Tests

Unit testing is handled by [AVA] and coverage is reported by [Istanbul].
Watch and run tests on change with

```
$ yarn run watch:test
```

Generate a coverage report with

```
$ yarn run report
```

##### Debugging tests

Create a breakpoint by adding the statement `debugger` to the test
and start a debug session with, e.g.,

```
$ yarn run ava:inspect lib/true.spec.js
```

An HTML version will be saved in `coverage`.

[AVA]: https://github.com/avajs/ava
[Istanbul]: https://istanbul.js.org/

## Contributing

The author and active contributors may be found in `package.json`,

```
$ jq .author < package.json
$ jq .contributors < package.json
```

To submit a patch:

1. Request repository access by submitting a new issue.
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes and write tests.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This npm package is Copyright (c) 2016-2017 Meltwater Group.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
