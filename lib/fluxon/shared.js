import { prop } from 'ramda'

import {
  fromBinaryMethod,
  fromNullaryMethod,
  fromUnaryMethod,
  withDefault
} from './functors.js'

/* Public Members: DateTime, Duration, Interval, Zone */

export const isValid = prop('isValid')

/* Public Members: DateTime, Duration, Interval */

export const invalidReason = prop('invalidReason')
export const invalidExplanation = prop('invalidExplanation')

/* Public Members: DateTime, Duration */

export const locale = prop('locale')
export const numberingSystem = prop('numberingSystem')

/* Public Methods: DateTime, Duration, Interval, Zone */

export const equals = fromUnaryMethod('equals')

/* Public Methods: DateTime, Duration, Interval */

export const inspect = fromNullaryMethod('inspect')
export const set = fromUnaryMethod('set')

export const toFormatWithOptions = fromBinaryMethod('toFormat')
export const toFormat = withDefault(toFormatWithOptions)

export const toIsoWithOptions = fromUnaryMethod('toISO')
export const toIso = withDefault(toIsoWithOptions)

export const toIsoTimeWithOptions = fromUnaryMethod('toISOTime')
export const toIsoTime = withDefault(toIsoTimeWithOptions)

export const toString = fromNullaryMethod('toString')

/* Public Methods: DateTime, Duration */

export const get = fromUnaryMethod('get')
export const minus = fromUnaryMethod('minus')
export const plus = fromUnaryMethod('plus')
export const reconfigure = fromUnaryMethod('reconfigure')

export const toJson = fromNullaryMethod('toJSON')
export const toBson = fromNullaryMethod('toBSON')

export const toObjectWithOptions = fromUnaryMethod('toObject')
export const toObject = withDefault(toObjectWithOptions)

export const toMillis = fromNullaryMethod('toMillis')

/* Public Methods: DateTime, Interval */

export const toIsoDate = fromNullaryMethod('toISODate')
