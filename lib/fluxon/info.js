import { Info } from 'luxon'

import { toBinary, toUnary, withDefault } from './functors'

export const erasWithOptions = toBinary(Info.eras)
export const eras = withDefault(erasWithOptions)
export const erasShort = () => eras('short')
export const erasLong = () => eras('long')

export const features = () => Info.features()

export const hasDst = toUnary(Info.hasDST)
export const hasDstLocal = () => hasDst('local')

export const normalizeZone = toUnary(Info.normalizeZone)

export const isValidIanaZone = toUnary(Info.isValidIANAZone)
export const isValidIanaZoneLocal = () => isValidIanaZone('local')

export const meridiemsWithOptions = toUnary(Info.meridiems)
export const meridiems = () => withDefault(meridiemsWithOptions)

export const calendarMonthsWithOptions = toBinary(Info.months)
export const calendarMonths = withDefault(calendarMonthsWithOptions)
export const calendarMonthsLong = () => calendarMonths('long')

export const monthsFormatWithOptions = toBinary(Info.monthsFormat)
export const monthsFormat = withDefault(monthsFormatWithOptions)
export const monthsFormatLong = () => monthsFormat('long')

export const weekdaysWithOptions = toBinary(Info.weekdays)
export const weekdays = withDefault(weekdaysWithOptions)
export const weekdaysLong = () => weekdays('long')

export const weekdaysFormatWithOptions = toBinary(Info.weekdaysFormat)
export const weekdaysFormat = withDefault(weekdaysFormatWithOptions)
export const weekdaysFormatLong = () => weekdaysFormat('long')
