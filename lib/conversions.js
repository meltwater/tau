import {
  compose
} from 'ramda'

import {
  fromUnixUtc,
  toUnix
} from './unix'

import {
  fromMillisUtc,
  toMillis
} from './fluxon'

/**
 * Converts the number of milliseconds since the Unix epoch
 * to the number to seconds since the Unix epoch.
 *
 * @func fromMillisToUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.3.0|v1.3.0}
 * @category DateTime
 * @sig Number -> Number
 * @param {!number} milliseconds Number of milliseconds since the Unix epoch
 * @return {!number} Number of seconds since the Unix epoch
 * @see TAU.fromUnixToMillis
 * @example
 *
 * TAU.fromMillisToUnix(12000) //=> 12
 */
export const fromMillisToUnix = compose(toUnix, fromMillisUtc)

/**
 * Converts the number of seconds since the Unix epoch
 * to the number to millisecond since the Unix epoch.
 *
 * @func fromUnixToMillis
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.3.0|v1.3.0}
 * @category DateTime
 * @sig Number -> Number
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!number} Number of milliseconds since the Unix epoch
 * @see TAU.fromMillisToUnix
 * @example
 *
 * TAU.fromUnixToMillis(12) //=> 12000
 */
export const fromUnixToMillis = compose(toMillis, fromUnixUtc)
