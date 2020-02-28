import { compose } from 'ramda'

import { fromUnixUtc, toUnix } from './unix'

import { fromIsoUtc, fromMillisUtc, toIso, toMillis } from './fluxon'

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

/**
 * Converts the number of seconds since the Unix epoch
 * to ISO 8601-compliant string representation.
 *
 * @func fromUnixToIso
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.4.0|v1.4.0}
 * @category DateTime
 * @sig Number -> String
 * @param {!number} seconds Number of seconds since the Unix epoch
 * @return {!string} ISO 8601-compliant representation
 * @see TAU.fromIsoToUnix
 * @example
 *
 * TAU.fromUnixToIso(12) //=> 1970-01-01T00:00:12.000Z
 */
export const fromUnixToIso = compose(toIso, fromUnixUtc)

/**
 * Converts the number of milliseconds since the Unix epoch
 * to ISO 8601-compliant string representation.
 *
 * @func fromMillisToIso
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.4.0|v1.4.0}
 * @category DateTime
 * @sig Number -> String
 * @param {!number} milliseconds Number of milliseconds since the Unix epoch
 * @return {!string} ISO 8601-compliant representation
 * @see TAU.fromIsoToMillis
 * @example
 *
 * TAU.fromMillisToIso(12345) //=> 1970-01-01T00:00:12.345Z
 */
export const fromMillisToIso = compose(toIso, fromMillisUtc)

/**
 * Converts ISO 8601-compliant string representation
 * to the number of seconds since the Unix epoch.
 *
 * @func fromIsoToUnix
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.4.0|v1.4.0}
 * @category DateTime
 * @sig String -> DateTime
 * @param {!string} iso ISO 8601-compliant representation
 * @return {!number} Number of seconds since the Unix epoch
 * @see TAU.fromUnixToIso
 * @example
 *
 * TAU.fromIsoToUnix('1970-01-01T00:00:12.345Z') //=> 12
 */
export const fromIsoToUnix = compose(toUnix, fromIsoUtc)

/**
 * Converts ISO 8601-compliant string representation
 * to the number of milliseconds since the Unix epoch.
 *
 * @func fromIsoToMillis
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.4.0|v1.4.0}
 * @category DateTime
 * @sig String -> DateTime
 * @param {!string} iso ISO 8601-compliant representation
 * @return {!number} Number of milliseconds since the Unix epoch
 * @see TAU.fromMillisToIso
 * @example
 *
 * TAU.fromIsoToMillis('1970-01-01T00:00:12.345Z') //=> 12345
 */
export const fromIsoToMillis = compose(toMillis, fromIsoUtc)
