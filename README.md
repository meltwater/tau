# Node.js npm Package Skeleton

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Fmakenew--node--lib-blue.svg)](https://www.npmjs.com/package/@meltwater/makenew-node-lib)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/makenew-node-lib)
[![CircleCI](https://circleci.com/gh/meltwater/makenew-node-lib.svg?style=shield&circle-token=30395fe910ca2b9f7553c6311e85bd8ebe1ee059)](https://circleci.com/gh/meltwater/makenew-node-lib)

## Description

Bootstrap a new [Node.js] [npm package] in less than a minute.

[Node.js]: https://nodejs.org/
[npm package]: https://docs.npmjs.com/how-npm-works/packages

### Features

- [Node.js]'s [npm] package structure.
- Fast, reliable, and secure dependency management with [yarn].
- Next generation JavaScript with [Babel].
- Linting with the [JavaScript Standard Style] and [JSON Lint].
- Automatically lint on changes with [gulp].
- Futuristic unit testing with [AVA].
- Code coverage reporting with [Istanbul] and [nyc].
- Continuous testing and automated package publishing with [CircleCI].
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- [Tern] code-analysis support.
- Badges from [Shields.io].

[AVA]: https://github.com/avajs/ava
[Babel]: https://babeljs.io/
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
[Tern]: https://ternjs.net/
[CircleCI]: https://circleci.com/
[yarn]: https://yarnpkg.com/

### Bootstrapping a New Project

1. Create an empty (non-initialized) repository on GitHub.

2. Clone the master branch of this repository with

   ```
   $ git clone --single-branch git@github.com:meltwater/makenew-node-lib.git <new-node-lib>
   $ cd <new-node-lib>
   ```

   Optionally, reset to the latest version with

   ```
   $ git reset --hard <version-tag>
   ```

3. Run

   ```
   $ ./makenew.sh
   ```

   and follow the prompts.
   This will replace the boilerplate, delete itself,
   remove the git remote, remove upstream tags,
   and stage changes for commit.

4. Create a new [CircleCI] project.
   Add `NPM_TOKEN` as an environment variable.
   Create a project API token with status scope
   and update the token in the README build badge.

5. Add and commit the changes and push to GitHub with

   ```
   $ git add .
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

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
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

An HTML version will be saved in `coverage`.

[AVA]: https://github.com/avajs/ava
[Istanbul]: https://istanbul.js.org/

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
