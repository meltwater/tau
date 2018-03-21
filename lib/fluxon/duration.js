import { Duration } from 'luxon'

import {
  prop,
  unary
} from 'ramda'

import {
  toBinary,
  withDefault,
  fromNullaryMethod,
  fromUnaryMethod,
  fromVariadicMethod
} from './functors'

/* Static Public Methods */
export const durationFromIsoWithOptions = toBinary(Duration.fromISO)
export const durationFromIso = withDefault(durationFromIsoWithOptions)

export const durationFromMillisWithOptions = toBinary(Duration.fromMillis)
export const durationFromMillis = withDefault(durationFromMillisWithOptions)

export const durationFromObject = unary(Duration.fromObject)

export const durationInvalid = unary(Duration.invalid)

/* Public Members */
export const days = prop('days')
export const hours = prop('hours')
export const milliseconds = prop('milliseconds')
export const minutes = prop('minutes')
export const months = prop('months')
export const quarters = prop('quarters')
export const seconds = prop('seconds')
export const weeks = prop('weeks')
export const years = prop('years')

/* Public Methods */
export const as = fromUnaryMethod('as')
export const negate = fromNullaryMethod('negate')
export const normalize = fromNullaryMethod('normalize')

// TODO: special docs
export const shiftTo = fromVariadicMethod('shiftTo')
