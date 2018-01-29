# Node.js npm Package Skeleton

[![Greenkeeper badge](https://badges.greenkeeper.io/meltwater/makenew-node-lib.svg?token=86ebddd3bc16fcb366c0f0500d4866a76ed1afd7b8d575f7de332858707afb85&ts=1517269577026)](https://greenkeeper.io/)

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Fmakenew--node--lib-blue.svg)](https://www.npmjs.com/package/@meltwater/makenew-node-lib)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/makenew-node-lib)
[![docs](https://img.shields.io/badge/docs-master-green.svg)](https://github.com/meltwater/makenew-node-lib/tree/master/docs)
[![Codecov](https://img.shields.io/codecov/c/token/eHEIOjPT5u/github/meltwater/makenew-node-lib.svg)](https://codecov.io/gh/meltwater/makenew-node-lib)
[![CircleCI](https://circleci.com/gh/meltwater/makenew-node-lib.svg?style=shield&circle-token=30395fe910ca2b9f7553c6311e85bd8ebe1ee059)](https://circleci.com/gh/meltwater/makenew-node-lib)

## Description

Bootstrap a new [Node.js] [npm package] in five minutes or less.

[Node.js]: https://nodejs.org/
[npm package]: https://docs.npmjs.com/how-npm-works/packages

### Features

- [Node.js]'s [npm] package structure.
- Fast, reliable, and secure dependency management with [Yarn].
- Next generation JavaScript with [Babel].
- Write debuggable examples with configurable options and arguments.
- Linting with the [JavaScript Standard Style] and [JSON Lint].
- Automatically lint on changes with [gulp].
- Futuristic debuggable unit testing with [AVA].
- Code coverage reporting with [Istanbul], [nyc], and [Codecov].
- Automated dependency management with [Greenkeeper].
- Continuous testing and automated package publishing with [CircleCI].
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- Badges from [Shields.io].

[AVA]: https://github.com/avajs/ava
[Babel]: https://babeljs.io/
[CircleCI]: https://circleci.com/
[Codecov]: https://codecov.io/
[EditorConfig]: http://editorconfig.org/
[Greenkeeper]: https://greenkeeper.io/
[gulp]: http://gulpjs.com/
[Keep a CHANGELOG]: http://keepachangelog.com/
[Istanbul]: https://istanbul.js.org/
[JavaScript Standard Style]: http://standardjs.com/
[JSON Lint]: https://github.com/zaach/jsonlint
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[nyc]: https://github.com/istanbuljs/nyc
[Shields.io]: http://shields.io/
[Yarn]: https://yarnpkg.com/

### Bootstrapping a new project

1. Clone the master branch of this repository with

   ```
   $ git clone --single-branch git@github.com:meltwater/makenew-node-lib.git <new-node-lib>
   $ cd <new-node-lib>
   ```

   Optionally, reset to the latest version with

   ```
   $ git reset --hard <version-tag>
   ```

2. Create an empty (**non-initialized**) repository on GitHub.

3. Run

   ```
   $ ./makenew.sh
   ```

   This will replace the boilerplate, delete itself,
   remove the git remote, remove upstream tags,
   and stage changes for commit.

4. Create the required CircleCI environment variables with

   ```
   $ .circleci/envvars.sh
   ```

5. Review, commit, and push the changes to GitHub with

   ```
   $ git diff --cached
   $ git commit -m "Replace makenew boilerplate"
   $ git remote add origin git@github.com:meltwater/<new-node-lib>.git
   $ git push -u origin master
   ```

6. Ensure the CircleCI build passes,
   then publish the initial version of the package with

   ```
   $ nvm install
   $ yarn
   $ npm version patch
   ```

7. Update the GitHub branch protection options for `master`
   to require all status checks to pass.
   Disable the GitHub repository projects and wiki options (unless desired).
   Add any required GitHub teams or collaborators to the repository.

8. Search for all `TODO` comments to add your first module.

### Updating from this skeleton

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

#### Changelog for this skeleton

Note that `CHANGELOG.md` is just a template for this skeleton.
The actual changes for this project are documented in the commit history
and summarized under [Releases].

[Releases]: https://github.com/meltwater/makenew-node-lib/releases

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install @meltwater/makenew-node-lib
```

or using [Yarn] with

```
$ yarn add @meltwater/makenew-node-lib
```

[npm]: https://www.npmjs.com/
[Yarn]: https://yarnpkg.com/

## Usage

<!--- TODO: Update usage example for added module(s). -->

**See the complete [API documentation](./docs) and [working examples](./examples).**

This package provides an async function which checks if its argument is true.

```js
import isTrue from '@meltwater/makenew-node-lib'

const logTrue = async () => {
  const trueValue = await isTrue(true)
  console.log(trueValue)
}

logTrue().catch(err => { console.log(err) })
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

### Source code

The [makenew-node-lib source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:meltwater/makenew-node-lib.git
```

[makenew-node-lib source]: https://github.com/meltwater/makenew-node-lib

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
- `GREENKEEPER_TOKEN`: GitHub personal access token for Greenkeeper.

These may be set manually or by running the script `./circleci/envvars.sh`.

[CircleCI]: https://circleci.com/

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

_Update the CHANGELOG before each new release._

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit,
and trigger CircleCI to publish the new version to npm.

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
