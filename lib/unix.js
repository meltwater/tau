import {
  compose,
  curryN,
  divide,
  flip,
  multiply
} from 'ramda'

import {
  fromMillisUtc,
  fromMillisWithOptions,
  fromMillis,
  toMillis
} from './fluxon'

const over1k = compose(Math.floor, flip(divide)(1000))
const times1k = multiply(1000)

/**
 * Creates a DateTime from number of seconds since the Unix epoch.
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
export const fromUnix = compose(fromMillis, times1k)

/**
 * Creates a DateTime with custom options from the number of seconds since the Unix epoch.
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
export const fromUnixWithOptions = curryN(2, (options, unix) => (
  fromMillisWithOptions(options, times1k(unix)))
)

/**
 * Creates a UTC DateTime from the number of seconds since the Unix epoch.
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
export const fromUnixUtc = compose(fromMillisUtc, times1k)

/**
 * Converts a DateTime to the number of seconds since the Unix epoch.
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
export const toUnix = compose(over1k, toMillis)
