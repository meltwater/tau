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
 * @see TAU.fromNowZone, TAU.fromNowUtc
 * @example
 *
 * TAU.fromNow() //=> DateTime
 */
export const fromNow = () => DateTime.local()

/**
 * Creates a DateTime in the given zone from the current moment in time.
 *
 * @func fromNowZone
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Zone -> DateTime
 * @param {!string} zone The zone string
 * @return {!DateTime} The DateTime
 * @see TAU.fromNow, TAU.fromNowUtc
 * @example
 *
 * TAU.fromNowZone('utc') //=> DateTime
 */
export const fromNowZone = zone => (
  fromMillisWithOptions({zone}, now()())
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
 * @see TAU.fromNowZone, TAU.fromNow
 * @example
 *
 * TAU.fromNowUtc() //=> DateTime
 */
export const fromNowUtc = () => DateTime.utc()
