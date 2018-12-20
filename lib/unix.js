import {
  compose,
  curryN
} from 'ramda'

import {
  fromSecondsUtc,
  fromSecondsWithOptions,
  fromSeconds,
  toSeconds
} from './fluxon'

/**
 * Creates a DateTime from number of seconds since the Unix epoch.
 * Rounds fractional seconds down.
 *
 * @func fromUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Number -> DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!DateTime} The DateTime
 * @see TAU.fromUnixWithOptions, TAU.fromUnixUtc, TAU.toUnix
 * @example
 *
 * TAU.toMillis(TAU.fromUnix(12)) //=> 12000
 */
export const fromUnix = compose(fromSeconds, Math.floor)

/**
 * Creates a DateTime with custom options from the number of seconds since the Unix epoch.
 * Rounds fractional seconds down.
 *
 * @func fromUnixWithOptions
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Options -> Number -> DateTime
 * @param {!Options} options Options for DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!DateTime} The DateTime
 * @see TAU.fromUnix, TAU.fromUnixUtc, TAU.toUnix
 * @example
 *
 * TAU.toMillis(TAU.fromUnixWithOptions({zone: 'utc'}, 12)) //=> 12000
 */
export const fromUnixWithOptions = curryN(2, (o, s) => (
  fromSecondsWithOptions(o, Math.floor(s))
))

/**
 * Creates a UTC DateTime from the number of seconds since the Unix epoch.
 * Rounds fractional seconds down.
 *
 * @func fromUnixUtc
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Number -> DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!DateTime} The DateTime with zone set to UTC
 * @see TAU.fromUnixWithOptions, TAU.fromUnix, TAU.toUnix
 * @example
 *
 * TAU.toMillis(TAU.fromUnixUtc(12)) //=> 12000
 */
export const fromUnixUtc = compose(fromSecondsUtc, Math.floor)

/**
 * Converts a DateTime to the number of seconds since the Unix epoch.
 * Always returns an integer, rounded down.
 *
 * @func toUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig DateTime -> Number
 * @param {!DateTime} The DateTime
 * @return {!number} seconds Number of seconds since the Unix epoch
 * @see TAU.fromUnixWithOptions, TAU.fromUnix, TAU.fromUnixUtc
 * @example
 *
 * TAU.toUnix(TAU.fromMillis(12000)) //=> 12
 */
export const toUnix = compose(Math.floor, toSeconds)
