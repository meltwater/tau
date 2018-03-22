import {
  prop
} from 'ramda'

import {
  fromBinaryMethod,
  fromNullaryMethod,
  fromUnaryMethod,
  withDefault
} from './functors'

/* Public Members: DateTime, Duration */

export const invalidReason = prop('invalidReason')
export const isValid = prop('isValid')
export const locale = prop('locale')
export const numberingSystem = prop('numberingSystem')

/* Public Methods: DateTime, Duration */

export const equals = fromUnaryMethod('equals')
export const get = fromUnaryMethod('get')
export const inspect = fromNullaryMethod('inspect')
export const minus = fromUnaryMethod('minus')
export const plus = fromUnaryMethod('plus')
export const reconfigure = fromUnaryMethod('reconfigure')
export const set = fromUnaryMethod('set')

export const toFormatWithOptions = fromBinaryMethod('toFormat')
export const toFormat = withDefault(toFormatWithOptions)

export const toIsoWithOptions = fromUnaryMethod('toISO')
export const toIso = withDefault(toIsoWithOptions)

export const toJson = fromNullaryMethod('toJSON')

export const toObjectWithOptions = fromUnaryMethod('toObject')
export const toObject = toObjectWithOptions

export const toString = fromNullaryMethod('toString')
