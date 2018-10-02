# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

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

[Unreleased]: https://github.com/meltwater/tau/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/meltwater/tau/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/meltwater/tau/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/meltwater/tau/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/meltwater/tau/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/meltwater/tau/compare/v1.0.0...v1.0.1
