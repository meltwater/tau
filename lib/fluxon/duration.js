import {
  prop
} from 'ramda'

import {
  fromNullaryMethod,
  fromUnaryMethod
} from './functors'

/* Static Public Methods */
// TODO: from*, invalid

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
// TODO: shiftTo
