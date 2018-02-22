# Tau

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Ftau-blue.svg)](https://www.npmjs.com/package/@meltwater/tau)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/tau)
[![docs](https://img.shields.io/badge/docs-master-green.svg)](https://github.com/meltwater/tau/tree/master/docs)
[![Codecov](https://img.shields.io/codecov/c/token/6QCpyuHSMW/github/meltwater/tau.svg)](https://codecov.io/gh/meltwater/tau)
[![CircleCI](https://circleci.com/gh/meltwater/tau.svg?style=shield&circle-token=465c0d014b4cb8b2869f4c7edda5965a302a130b)](https://circleci.com/gh/meltwater/tau)

## Description

Functional time and date library.

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install @meltwater/tau
```

or using [Yarn] with

```
$ yarn add @meltwater/tau
```

[npm]: https://www.npmjs.com/
[Yarn]: https://yarnpkg.com/

## Usage

<!--- TODO: Update usage example for added module(s). -->

**See the complete [API documentation](./docs) and [working examples](./examples).**

This package provides an async function which checks if its argument is true.

```js
import isTrue from '@meltwater/tau'

const logTrue = async () => {
  const trueValue = await isTrue(true)
  console.log(trueValue)
}

logTrue().catch(err => { console.log(err) })
// true
```

## Development Quickstart

```
$ git clone https://github.com/meltwater/tau.git
$ cd tau
$ nvm install
$ yarn
```

Run each command below in a separate terminal window:

```
$ yarn run watch
$ yarn run watch:test
```

## Development and Testing

### Source code

The [tau source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:meltwater/tau.git
```

[tau source]: https://github.com/meltwater/tau

### Requirements

You will need [Node.js] with [npm], [Yarn],
and a [Node.js debugging] client.

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

#### CircleCI

_CircleCI should already be configured: this section is for reference only._

The following environment variables must be set on [CircleCI]:

- `NPM_TOKEN`: npm token for installing and publishing packages.
- `NPM_TEAM`: npm team to grant read-only package access
  (format `org:team`, optional).
- `CODECOV_TOKEN`: Codecov token for uploading coverage reports (optional).

These may be set manually or by running the script `./circleci/envvars.sh`.

Greenkeeper requires a deployment key with write permission:
see the [CircleCI documentation for adding one][CircleCI deployment key].

[CircleCI]: https://circleci.com/
[CircleCI deployment key]: https://circleci.com/docs/1.0/adding-read-write-deployment-key/

### Development tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

#### Production build

Lint, test, and transpile the production build to `dist` with

```
$ yarn run dist
```

##### Publishing a new release

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit,
and trigger CircleCI to publish the new version to npm.

- **Update the CHANGELOG before each new release after version 1.**
- New versions are released when the commit message is a valid version number.
- Versions are only published on release branches:
  `master` branch or any branch matching `ver/*`.
- If branch protection options are enabled,
  you must first run `npm version` on a separate branch,
  wait for the commit to pass any required checks,
  then merge and push the changes to a release branch.
- **Do not use the GitHub pull request button to merge version commits**
  as the commit tagged with the new version number will not match after merging.

[npm version]: https://docs.npmjs.com/cli/version

#### Examples

**See the [full documentation on using examples](./examples).**

View all examples with

```
$ yarn run example
```

#### Linting

Linting against the [JavaScript Standard Style] and [JSON Lint]
is handled by [gulp].

View available commands with

```
$ yarn run gulp --tasks
```

Run all linters with

```
$ yarn run lint
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

Unit and integration testing is handled by [AVA]
and coverage is reported by [Istanbul] and uploaded to [Codecov].

- Test files end in `.spec.js`.
- Unit tests are placed under `lib` alongside the tested module.
- Integration tests are placed in `test`.
- Static files used in tests are placed in `fixtures`.

Watch and run tests on changes with

```
$ yarn run watch:test
```

If using [AVA snapshot testing], update snapshots with

```
$ yarn run test:update
```

Generate a coverage report with

```
$ yarn run report
```

An HTML version will be saved in `coverage`.

##### Debugging tests

Create a breakpoint by adding the statement `debugger` to the test
and start a debug session with, e.g.,

```
$ yarn run ava:inspect lib/true.spec.js
```

Watch and restart the debugging session on changes with

```
$ yarn run ava:inspect:watch lib/true.spec.js
```

[AVA]: https://github.com/avajs/ava
[AVA snapshot testing]: https://github.com/avajs/ava#snapshot-testing
[Codecov]: https://codecov.io/
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

This npm package is Copyright (c) 2016-2018 Meltwater Group.

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
