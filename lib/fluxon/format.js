import { DateTime } from 'luxon'
import { flip, prop } from 'ramda'

const getFormat = flip(prop)(DateTime)

export const DATETIME_FULL = getFormat('DATETIME_FULL')
export const DATETIME_FULL_WITH_SECONDS = getFormat(
  'DATETIME_FULL_WITH_SECONDS'
)
export const DATETIME_HUGE = getFormat('DATETIME_HUGE')
export const DATETIME_HUGE_WITH_SECONDS = getFormat(
  'DATETIME_HUGE_WITH_SECONDS'
)
export const DATETIME_MED = getFormat('DATETIME_MED')
export const DATETIME_MED_WITH_SECONDS = getFormat('DATETIME_MED_WITH_SECONDS')
export const DATETIME_MED_WITH_WEEKDAY = getFormat('DATETIME_MED_WITH_WEEKDAY')
export const DATETIME_SHORT = getFormat('DATETIME_SHORT')
export const DATETIME_SHORT_WITH_SECOMNDS = getFormat(
  'DATETIME_SHORT_WITH_SECOMNDS'
)
export const DATE_FULL = getFormat('DATE_FULL')
export const DATE_HUGE = getFormat('DATE_HUGE')
export const DATE_MED = getFormat('DATE_MED')
export const DATE_SHORT = getFormat('DATE_SHORT')
export const TIME_24_SIMPLE = getFormat('TIME_24_SIMPLE')
export const TIME_24_WITH_LONG_OFFSET = getFormat('TIME_24_WITH_LONG_OFFSET')
export const TIME_24_WITH_SECONDS = getFormat('TIME_24_WITH_SECONDS')
export const TIME_24_WITH_SHORT_OFFSET = getFormat('TIME_24_WITH_SHORT_OFFSET')
export const TIME_SIMPLE = getFormat('TIME_SIMPLE')
export const TIME_WITH_LONG_OFFSET = getFormat('TIME_WITH_LONG_OFFSET')
export const TIME_WITH_SECONDS = getFormat('TIME_WITH_SECONDS')
export const TIME_WITH_SHORT_OFFSET = getFormat('TIME_WITH_SHORT_OFFSET')
