import { Interval } from 'luxon'
import {
  apply,
  prop
} from 'ramda'

import {
  fromBinaryMethod,
  fromNullaryMethod,
  fromUnaryMethod,
  fromVariadicMethod,
  toBinary,
  toUnary,
  withDefault
} from './functors'

/* Static Public Methods */

export const isInterval = toUnary(Interval.isInterval)

export const after = toBinary(Interval.after)
export const before = toBinary(Interval.before)
export const fromDateTimes = toUnary(apply(Interval.fromDateTimes))

export const intervalFromIsoWithOptions = toBinary(Interval.fromISO)
export const intervalFromIso = withDefault(intervalFromIsoWithOptions)

export const intervalInvalid = toUnary(Interval.invalid)

export const merge = toUnary(Interval.merge)
export const xor = toUnary(Interval.xor)

/* Public Members */

export const end = prop('end')
export const start = prop('start')

/* Public Methods */

export const abutsEnd = fromUnaryMethod('abutsEnd')
export const abutsStart = fromUnaryMethod('abutsStart')
export const contains = fromUnaryMethod('contains')
export const count = fromUnaryMethod('count')
export const difference = fromVariadicMethod('difference')
export const divideEqually = fromUnaryMethod('divideEqually')
export const engulfs = fromUnaryMethod('engulfs')
export const hasSameEndpoints = fromUnaryMethod('hasSame')
export const intersection = fromUnaryMethod('intersection')
export const isAfter = fromUnaryMethod('isAfter')
export const isBefore = fromUnaryMethod('isBefore')
export const isEmpty = fromNullaryMethod('isEmpty')
export const length = fromUnaryMethod('length')
export const overlaps = fromUnaryMethod('overlaps')
export const splitAt = fromVariadicMethod('splitAt')
export const splitBy = fromUnaryMethod('splitBy')

export const toDurationWithOptions = fromBinaryMethod('toDuration')
export const toDuration = withDefault(toDurationWithOptions)
export const toDurationMillis = toDuration('milliseconds')

export const union = fromUnaryMethod('union')
