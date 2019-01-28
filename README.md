# τ

[![npm](https://img.shields.io/npm/v/@meltwater/tau.svg)](https://www.npmjs.com/package/@meltwater/tau)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/tau)
[![docs](https://img.shields.io/badge/docs-latest-green.svg)](https://tau.meltwaterlabs.com)
[![Codecov](https://img.shields.io/codecov/c/github/meltwater/tau.svg)](https://codecov.io/gh/meltwater/tau)
[![CircleCI](https://img.shields.io/circleci/project/github/meltwater/tau.svg)](https://circleci.com/gh/meltwater/tau)

Functional time and date tools for JavaScript inspired by [Luxon].
Plays well with [φ][Phi].

[Luxon]: https://moment.github.io/luxon/
[Phi]: https://phi.meltwaterlabs.com/

## Description

Exports the Luxon API in a functional programming style
along with the custom functions defined in this package
so they all may be imported from the same place.

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

**See the complete [API documentation] and [working examples](./examples).**

```js
import { compose } from '@meltwater/phi' // standard compose function
import { toIso, fromNow } from '@meltwater/tau'

const sinceStartOfToday = compose(
  toRelative,
  startOf('day'),
  fromNow
)

sinceStartOfToday() //=> '12 hours ago'
```

```js
import { compose, gt } from '@meltwater/phi'
import { fromIso, diffNow, days } from '@meltwater/tau'

const isIsoMoreThanNDaysOld = n => compose(
  gt(-n),
  days,
  diffNow('days'),
  fromIso
)

const isIsoMoreThan3DaysOld = isIsoMoreThanNDaysOld(3)

isIsoMoreThan3DaysOld('2018-01-24T20:27:49.288Z') //=> true
```

[API documentation]: https://tau.meltwaterlabs.com

### Luxon Functional API

In general, each public static method, member, and method in the Luxon API
is exported at the top level with the same name.
All functions are curried and the argument order is reversed.
Exceptions are documented below.

#### Naming conventions

- Acronyms follow normal camelcase rules are and not uppercase,
  e.g., `DateTime.isInDST` is exported as `isInDst`.
- For instance methods, the last argument corresponds to the instance (`this`),
  e.g., `DateTime.fromMillis(0).toIso()` becomes `toIso(fromMillis(0))`.
- Some names are changed to avoid conflicts.
- Some signatures are changed for compatibility with the functional style
  e.g., all variadic methods.
- Any function which takes options has both a `*withOptions` variant
  which takes options as its first argument, and a normal variant
  with one less argument bound to the default options.
- Some Luxon methods have arguments with default values.
  In these cases, extra functions are provided corresponding to those defaults.
- Functions with a `Utc` suffix have been wrapped with `setZone('utc')`.

#### DateTime

- `diff`, `diffWithOptions`, `diffMillis`:
  the last argument is an array `[x, y]` and computes the difference `x - y`.
- `diffNow`, `diffNowWithOptions` and `diffNowMillis` compute
  the difference `x - now` (where `x` is the last argument).

##### Renamed or added

- `DateTime.fromFormat -> fromFormatWithOptions`
    - `fromFormat`
    - `fromFormatUtc`
- `DateTime.fromFormatExplain -> fromFormatExplainWithOptions`
    - `fromFormatExplain`
    - `fromFormatExplainUtc`
- `DateTime.fromHTTP -> fromHttpWithOptions`
    - `fromHttp`
    - `fromHttpUtc`
- `DateTime.fromISO -> fromIsoWithOptions`
    - `fromIso`
    - `fromIsoUtc`
- `DateTime.fromJSDate -> fromJsDateWithOptions`
    - `fromJsDate`
    - `fromJsDateUtc`
- `DateTime.fromMillis -> fromMillisWithOptions`
    - `fromMillis`
    - `fromMillisUtc`
- `DateTime.fromSeconds -> fromSecondsWithOptions`
    - `fromSeconds`
    - `fromSecondsUtc`
- `DateTime.fromRFC2822 -> fromRfc2822WithOptions`
    - `fromRfc2822`
    - `fromRfc2822Utc`
- `DateTime.fromSQL -> fromSqlWithOptions`
    - `fromSql`
    - `fromSqlUtc`
- `DateTime.diff -> diffWithOptions`
    - `diff`
    - `diffMillis`
- `DateTime.diffNow -> diffNowWithOptions`
    - `diffNow`
    - `diffNowMillis`
- `DateTime.resolvedLocaleOpts -> resolvedLocaleOptsWithOptions`
    - `resolvedLocaleOpts`
- `DateTime.setZone -> setZoneWithOptions`
    - `setZone`
    - `setZoneLocal`
    - `setZoneUtc`
- `DateTime.toISOTime -> toIsoTimeWithOptions`
    - `toIsoTime`
- `DateTime.toLocaleParts -> toLocalePartsWithOptions`
    - `toLocaleParts`
- `DateTime.toLocaleString -> toLocaleStringWithOptions`
    - `toLocaleString`
- `DateTime.toRelative -> toRelativeWithOptions`
    - `toRelative`
- `DateTime.toRelativeCalendar -> toRelativeCalendarWithOptions`
    - `toRelativeCalendar`
- `DateTime.toSQL -> toSqlWithOptions`
    - `toSql`
- `DateTime.toSQLTime -> toSqlTimeWithOptions`
    - `toSqlTime`
- `DateTime.toUTC -> toUtcWithOptions`
    - `toUtc`
    - `toUtcZero`
- `DateTime.toJSON -> toJson`
- `DateTime.toBSON -> toBson`
- `Zone.offset -> offsetAt`
- `Zone.offsetName -> offsetNameAtWithOptions`
    - `offsetName`

##### Signature changed

- `DateTime.local(...) -> local([...])` (order preserved)
- `DateTime.utc(...) -> utc([...])` (order preserved)
- `DateTime.min(x, y, ...) -> min(x, y)` (exactly two arguments)
- `DateTime.min(x, y, ...) -> max(x, y)` (exactly two arguments)

#### Duration

- `Duration.fromISO -> durationFromIsoWithOptions`
    - `durationFromIso`
- `Duration.fromMillis -> durationFromMillisWithOptions`
    - `durationFromMillis`
- `Duration.fromObject -> durationFromObject`
- `Duration.invalid -> durationInvalid`

##### Signature changed

- `duration.shiftTo(...) -> shiftTo([...], duration)` (order preserved)

#### Interval

##### Renamed or Added

- `Interval.fromISO -> intervalFromIsoWithOptions`
    - `intervalFromIso`
- `Interval.invalid -> intervalInvalid`
- `Interval.toDuration -> toDurationWithOptions`
    - `toDuration`
    - `toDurationMillis`
- `Interval.hasSame -> hasSameEndpoints`

##### Signature changes

- `interval.fromDateTimes(start, end) -> fromDateTimes([start, end])`
- `interval.splitAt(...) -> splitAt([...], interval)` (order preserved)
- `interval.difference(...) -> difference([...], interval)` (order preserved)

#### Info

- `Info.eras -> erasWithOptions`
    - `eras`
    - `erasShort`
    - `erasLong`
- `Info.hasDST -> hasDst`
    - `hasDstLocal`
- `Info.isValidIANAZone -> isValidIanaZone`
    - `isValidIanaZoneLocal`
- `Info.meridiems -> meridiemsWithOptions`
    - `meridiems`
- `Info.months -> calendarMonthsWithOptions`
    - `calendarMonths`
    - `calendarMonthsLong`
- `Info.monthsFormat -> monthsFormatWithOptions`
    - `monthsFormat`
    - `monthsFormatLong`
- `Info.weekdays -> weekdaysWithOptions`
    - `weekdays`
    - `weekdaysLong`
- `Info.weekdaysFormat -> weekdaysFormatWithOptions`
    - `weekdaysFormat`
    - `weekdaysFormatLong`

#### Settings

- Getters are exported as functions with the corresponding Luxon name,
  e.g., `defaultLocale()`.
- Setters are prefixed with `set`,
  e.g., `setDefaultLocale('utc')`.

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
$ yarn run test:watch
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

##### Documentation

For documentation publishing, CircleCI must have an SSH key for `github.com`
added as a [deploy key][CircleCI deployment key]
with write access on the GitHub repository.

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

[gulp]: https://gulpjs.com/
[JavaScript Standard Style]: https://standardjs.com/
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
$ yarn run test:watch
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
$ yarn run test:inspect lib/unix.spec.js
```

Watch and restart the debugging session on changes with

```
$ yarn run test:inspect:watch lib/unix.spec.js
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

The source code for this npm package is
licensed under the Apache License, Version 2.0 (the "License");
you may not use this source code except in compliance with the License.
You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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
