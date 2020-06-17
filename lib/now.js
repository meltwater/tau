import { DateTime } from 'luxon'
import { compose } from 'ramda'

import { fromMillisWithOptions, now, toIso, toMillis } from './fluxon'

import { toUnix } from './unix'

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
export const fromNowWithOptions = (options) =>
  fromMillisWithOptions(options, now()())

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

/**
 * Returns the current number of milliseconds since the Unix epoch.
 *
 * @func fromNowToMillis
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.5.0|v1.5.0}
 * @category DateTime
 * @sig ... -> Number
 * @return {!number} Number of milliseconds since the Unix epoch
 * @see TAU.fromNowToUnix, TAU.fromNowToIso
 * @example
 *
 * TAU.fromNowToMillis() //=> 12345678
 */
export const fromNowToMillis = compose(toMillis, fromNowUtc)

/**
 * Returns the current number of seconds since the Unix epoch.
 *
 * @func fromNowToUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.5.0|v1.5.0}
 * @category DateTime
 * @sig ... -> Number
 * @return {!number} Number of seconds since the Unix epoch
 * @see TAU.fromNowToMillis, TAU.fromNowToIso
 * @example
 *
 * TAU.fromNowToUnix() //=> 12345
 */
export const fromNowToUnix = compose(toUnix, fromNowUtc)

/**
 * Returns the current time as ISO 8601-compliant string representation.
 *
 * @func fromNowToIso
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.5.0|v1.5.0}
 * @category DateTime
 * @sig ... -> String
 * @return {!string} ISO 8601-compliant representation
 * @see TAU.fromNowToMillis, TAU.fromNowToUnix
 * @example
 *
 * TAU.fromNowToIso() //=> 2019-01-02T21:11:51.631Z
 */
export const fromNowToIso = compose(toIso, fromNowUtc)
