/**
 * Wrap a function with options.
 * The function must take a DateTime options object as its first argument.
 *
 * @func withOptions
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Options -> Function -> Function
 * @param {!options} f DateTime options
 * @param {!function} f Function to wrap with options
 * @return {!Function} The wrapped function
 * @example
 *
 * const withNewYork = TAU.withOptions({zone: 'America/New_York'})
 * const fromFormatNewYork = TAU.withNewYork(fromFormatWithOptions)
 */
export { withOptions } from './fluxon'

/**
 * Wrap a function with zone UTC.
 * The function must take a DateTime options object as its first argument.
 *
 * @func withUtc
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig Function -> Function
 * @param {!function} f Function to wrap with UTC zone
 * @return {!Function} The wrapped function
 * @example
 *
 * const fromFormatUtc = TAU.withUtc(fromFormatWithOptions)
 */
export { withUtc } from './fluxon'

/**
 * Wrap a function with a zone.
 * The function must take a DateTime options object as its first argument.
 *
 * @func withZone
 * @memberOf TAU
 * @since {@link https://tau.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category DateTime
 * @sig String -> Function -> Function
 * @param {!string} zone The zone string
 * @param {!function} f Function to wrap with zone
 * @return {!Function} The wrapped function
 * @example
 *
 * const fromFormatNewYork = TAU.withZone('America/New_York')(fromFormatWithOptions)
 */
export { withZone } from './fluxon'
