import { DateTime } from 'luxon'

import {
  fromMillisWithOptions,
  now
} from './fluxon'

/**
 * Creates a DateTime from the current moment in time in the default zone.
 *
 * @func fromNow
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig ... -> DateTime
 * @return {!DateTime} The DateTime
 * @see TAU.fromNowWithOptions, TAU.fromNowUtc
 * @example
 *
 * TAU.fromNow() //=> DateTime
 */
export const fromNow = () => DateTime.local()

/**
 * Creates a DateTime with custom options from the current moment in time.
 *
 * @func fromNowWithOptions
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Options -> DateTime
 * @param {!Options} options Options for DateTime
 * @return {!DateTime} The DateTime
 * @see TAU.fromNow, TAU.fromNowUtc
 * @example
 *
 * TAU.fromNowWithOptions({zone: 'utc'}) //=> DateTime
 */
export const fromNowWithOptions = options => (
  fromMillisWithOptions(options, now()())
)

/**
 * Creates a UTC DateTime from the current moment in time.
 *
 * @func fromNowUtc
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig ... -> DateTime
 * @return {!DateTime} The DateTime with zone set to UTC
 * @see TAU.fromNowWithOptions, TAU.fromNow
 * @example
 *
 * TAU.fromNowUtc() //=> DateTime
 */
export const fromNowUtc = () => DateTime.utc()
