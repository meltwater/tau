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

const over1k = compose(Math.round, flip(divide)(1000))
const times1k = multiply(1000)

/**
 * Create a DateTime from number of seconds since the Unix epoch.
 *
 * @func fromUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Number -> DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch.
 * @return {!DateTime} The DateTime
 * @see TAU.fromUnixWithOptions, TAU.fromUnixUtc
 * @example
 *
 * TAU.toMillis(TAU.fromUnix(12)) //=> 12000
 */
export const fromUnix = compose(fromMillis, times1k)

/**
 * Create a DateTime with custom options from the number of seconds since the Unix epoch.
 *
 * @func fromUnixWithOptions
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Options -> Number -> DateTime
 * @param {!Options} options Options for DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!DateTime} The DateTime
 * @see TAU.fromUnix, TAU.fromUnixUtc
 * @example
 *
 * TAU.toMillis(TAU.fromUnixWithOptions(12, {zone: 'utc'})) //=> 12000
 */
export const fromUnixWithOptions = curryN(2, (options, unix) => (
  fromMillisWithOptions(options, times1k(unix)))
)

/**
 * Create a UTC DateTime from the number of seconds since the Unix epoch.
 *
 * @func fromUnixUtc
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Number -> DateTime
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!DateTime} The DateTime with zone set to UTC
 * @see TAU.fromUnixWithOptions, TAU.fromUnix
 * @example
 *
 * TAU.toMillis(TAU.fromUnixUtc(12)) //=> 12000
 */
export const fromUnixUtc = compose(fromMillisUtc, times1k)
export const toUnix = compose(over1k, toMillis)