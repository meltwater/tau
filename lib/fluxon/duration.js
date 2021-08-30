import { Duration } from 'luxon'

import { prop } from 'ramda'

import {
  toBinary,
  toUnary,
  withDefault,
  fromNullaryMethod,
  fromUnaryMethod,
  fromVariadicMethod
} from './functors.js'

/* Static Public Methods */

export const isDuration = toUnary(Duration.isDuration)

export const durationFromIsoWithOptions = toBinary(Duration.fromISO)
export const durationFromIso = withDefault(durationFromIsoWithOptions)

export const durationFromIsoTimeWithOptions = toBinary(Duration.fromISOTime)
export const durationFromIsoTime = withDefault(durationFromIsoTimeWithOptions)

export const durationFromMillisWithOptions = toBinary(Duration.fromMillis)
export const durationFromMillis = withDefault(durationFromMillisWithOptions)

export const durationFromObjectWithOptions = toBinary(Duration.fromObject)
export const durationFromObject = withDefault(durationFromObjectWithOptions)

export const durationInvalid = toUnary(Duration.invalid)

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

export const shiftTo = fromVariadicMethod('shiftTo')

export const mapUnits = fromUnaryMethod('mapUnits')
