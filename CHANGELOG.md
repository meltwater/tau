# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [3.2.0] / 2022-02-25

### Changed

- Update to Luxon v2.3.1.

## [3.1.0] / 2022-02-14

### Changed

- Update to Luxon v2.3.0.

### Added

- `fromDurationLike`.
- `fromDurationLikeWithOptions`.
- `toHuman`.
- `toHumanWithOptions`.
- `invalidWithExplanation`.
- `durationInvalidWithExplanation`.
- `intervalInvalidWithExplanation`.

## [3.0.0] / 2021-08-20

### Changed

- (**Breaking**) Update to [Luxon v2](https://moment.github.io/luxon/#upgrading).
- (**Breaking**) Renamed `universal` to `isUniversal`.
- (**Breaking**) Renamed `resolvedLocaleOpts` to `resolvedLocaleOptions`
  and `resolvedLocaleOptsWithOptions` to `resolvedLocaleOptionsWithOptions`.
- (**Breaking**) `toLocaleStringWithOptions` is now a binary method
  and `toLocaleString` is now an unary method.
  Use `toLocaleStringShort` to mimic the old behavior.

### Added

- `fromObjectWithOptions`.
- `durationFromObjectWithOptions`.
- `toLocaleStringShort`.
- `setZoneSystem`.
- `hasDstSystem`.
- `isValidIanaZoneSystem`.
- `setDefaultZone`.

### Removed

- `defaultZoneName` and `setDefaultZoneName`.

## [2.1.0] / 2021-08-20

### Changed

- Update to Luxon v1.28.

## [2.0.0] / 2020-12-24

### Added

- Publish as both ES and CommonJS module.

### Changed

- (**Breaking**) Use Conditional Exports to provide ES or CommonJS module.
  Cannot import or require internal paths.
- (**Breaking**) Drop support for Node.js versions before 12.13.0.

### Removed

- (**Breaking**) The `default` export.

## [1.16.1] / 2020-11-17

### Changed

- Update all dependencies and test on Node Fermium.

## [1.16.0] / 2020-11-16

### Changed

- Update Luxon to v1.25.0.
- License to MIT.

## [1.15.1] / 2020-06-17

### Changed

- Format code.

## [1.15.0] / 2020-06-17

### Changed

- Update Luxon to v1.24.1.

## [1.14.0] / 2020-02-28

### Changed

- Update Luxon to v1.22.0.
- Update Ramda to v0.27.0.

## [1.13.0] / 2019-10-04

### Changed

- Update Luxon to v1.19.3.

## [1.12.0] / 2019-08-15

### Changed

- Update Luxon to v1.17.2.

## [1.11.0] / 2019-06-25

### Changed

- Update Luxon to v1.16.0.

## [1.10.0] / 2019-05-20

### Changed

- Update Luxon to v1.15.0.

## [1.9.0] / 2019-03-28

### Changed

- Update Luxon to v1.12.0.

## [1.8.0] / 2019-02-07

### Changed

- Update Luxon to v1.11.1.

## [1.7.0] / 2019-01-24

### Changed

- Open source under the Apache License, Version 2.0!
- Update Luxon to v1.10.0.

## Added

- New in Luxon 1.10.0:
  - `normalizeZone`, `zone`, and `mapEndpoints`.

## [1.6.0] / 2019-01-07

### Changed

- Update Luxon to v1.9.0.

### Added

- New in Luxon 1.9.0:
  - `toRelative` and `toRelativeWithOptions`.
  - `toRelativeCalendar` and `toRelativeCalendarWithOptions`.

## [1.5.0] / 2019-01-02

### Added

- `fromNowToMillis`, `fromNowToIso`, and `fromNowToUnix`.

### Changed

- Update Luxon to v1.8.3.

## [1.4.0] / 2018-12-20

### Added

- `fromMillisToIso` and `fromIsoToMillis`.
- `fromUnixToIso` and `fromIsoToUnix`.
- New in Luxon 1.8
  - `isDateTime`, `isInterval`, `isDuration`, and `invalidExplanation`.
  - `fromSeconds`, `fromSecondsWithOptions`, `fromSecondsUtc` and `toSeconds`.
  - The difference between the Unix and Seconds functions is that
    the Unix functions always round down to the nearest second,
    while the Seconds functions accept and return millisecond accurate values.

### Changed

- Update Luxon to v1.8.2.
- Update to [makenew-node-lib] v5.3.1.

### Fixed

- `fromUnix`, `fromUnixUtc`, and `fromUnixWithOptions`
  properly round floats down to the nearest second
  to be consistent with `toUnix`.

## [1.3.0] / 2018-10-02

### Added

- `fromMillisToUnix` and `fromUnixToMillis`.

### Fixed

- Limit Luxon version constraint to patch versions.

## [1.2.0] / 2018-10-01

### Added

- Zone functions.
- `toBson`.
- `weeksInWeekYear`.

### Changed

- Update Luxon to v1.4.2.
- Update to [makenew-node-lib] v5.0.0.
  (Includes building with Babel 7.)

## [1.1.0] / 2018-08-01

### Changed

- Update Luxon to v1.3.3.

## [1.0.2] / 2018-04-24

### Changed

- Update Luxon to v1.2.0 (fixes critical quarter math bug).

## [1.0.1] / 2018-04-04

### Fixed

- `toUnix` rounded up or down based on millisecond timestamp,
  it now always returns the number of fully elapsed seconds since the Unix epoch.

## 1.0.0 / 2018-04-02

- Initial release.

[makenew-node-lib]: https://github.com/meltwater/makenew-node-lib

[Unreleased]: https://github.com/meltwater/tau/compare/v3.2.0...HEAD
[3.2.0]: https://github.com/meltwater/tau/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/meltwater/tau/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/meltwater/tau/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/meltwater/tau/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/meltwater/tau/compare/v1.16.1...v2.0.0
[1.16.1]: https://github.com/meltwater/tau/compare/v1.16.0...v1.16.1
[1.16.0]: https://github.com/meltwater/tau/compare/v1.15.1...v1.16.0
[1.15.1]: https://github.com/meltwater/tau/compare/v1.15.0...v1.15.1
[1.15.0]: https://github.com/meltwater/tau/compare/v1.14.0...v1.15.0
[1.14.0]: https://github.com/meltwater/tau/compare/v1.13.0...v1.14.0
[1.13.0]: https://github.com/meltwater/tau/compare/v1.12.0...v1.13.0
[1.12.0]: https://github.com/meltwater/tau/compare/v1.11.0...v1.12.0
[1.11.0]: https://github.com/meltwater/tau/compare/v1.10.0...v1.11.0
[1.10.0]: https://github.com/meltwater/tau/compare/v1.9.0...v1.10.0
[1.9.0]: https://github.com/meltwater/tau/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/meltwater/tau/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/meltwater/tau/compare/v1.6.1...v1.7.0
[1.6.1]: https://github.com/meltwater/tau/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/meltwater/tau/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/meltwater/tau/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/meltwater/tau/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/meltwater/tau/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/meltwater/tau/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/meltwater/tau/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/meltwater/tau/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/meltwater/tau/compare/v1.0.0...v1.0.1
