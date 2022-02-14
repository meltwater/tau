import { DateTime } from 'luxon'
import { apply, binary, curryN, prop } from 'ramda'

import {
  fromBinaryMethod,
  fromNullaryMethod,
  fromUnaryMethod,
  toBinary,
  toTernary,
  toUnary,
  withDefault,
  withUtc
} from './functors.js'

/* Static Public Methods */

export const isDateTime = toUnary(DateTime.isDateTime)

export const fromFormatWithOptions = toTernary(DateTime.fromFormat)
export const fromFormat = withDefault(fromFormatWithOptions)
export const fromFormatUtc = withUtc(fromFormatWithOptions)

export const fromFormatExplainWithOptions = toTernary(
  DateTime.fromFormatExplain
)
export const fromFormatExplain = withDefault(fromFormatExplainWithOptions)
export const fromFormatExplainUtc = withUtc(fromFormatExplainWithOptions)

export const fromHttpWithOptions = toBinary(DateTime.fromHTTP)
export const fromHttp = withDefault(fromHttpWithOptions)
export const fromHttpUtc = withUtc(fromHttpWithOptions)

export const fromIsoWithOptions = toBinary(DateTime.fromISO)
export const fromIso = withDefault(fromIsoWithOptions)
export const fromIsoUtc = withUtc(fromIsoWithOptions)

export const fromJsDateWithOptions = toBinary(DateTime.fromJSDate)
export const fromJsDate = withDefault(fromJsDateWithOptions)
export const fromJsDateUtc = withUtc(fromJsDateWithOptions)

export const fromMillisWithOptions = toBinary(DateTime.fromMillis)
export const fromMillis = withDefault(fromMillisWithOptions)
export const fromMillisUtc = withUtc(fromMillisWithOptions)

export const fromSecondsWithOptions = toBinary(DateTime.fromSeconds)
export const fromSeconds = withDefault(fromSecondsWithOptions)
export const fromSecondsUtc = withUtc(fromSecondsWithOptions)

export const fromObjectWithOptions = toBinary(DateTime.fromObject)
export const fromObject = withDefault(fromObjectWithOptions)

export const fromRfc2822WithOptions = toBinary(DateTime.fromRFC2822)
export const fromRfc2822 = withDefault(fromRfc2822WithOptions)
export const fromRfc2822Utc = withUtc(fromRfc2822WithOptions)

export const fromSqlWithOptions = toBinary(DateTime.fromSQL)
export const fromSql = withDefault(fromSqlWithOptions)
export const fromSqlUtc = withUtc(fromSqlWithOptions)

export const invalidWithExplanation = toBinary(DateTime.invalid)
export const invalid = toUnary(DateTime.invalid)

export const local = toUnary(apply(DateTime.local))
export const max = curryN(2, binary(DateTime.max))
export const min = curryN(2, binary(DateTime.min))
export const utc = toUnary(apply(DateTime.utc))

/* Public Members */

export const day = prop('day')
export const daysInMonth = prop('daysInMonth')
export const daysInYear = prop('daysInYear')
export const hour = prop('hour')

export const isInDst = prop('isInDST')
export const isInLeapYear = prop('isInLeapYear')
export const isOffsetFixed = prop('isOffsetFixed')
export const millisecond = prop('millisecond')
export const minute = prop('minute')
export const month = prop('month')
export const monthLong = prop('monthLong')
export const monthShort = prop('monthShort')
export const offset = prop('offset')
export const offsetNameLong = prop('offsetNameLong')
export const offsetNameShort = prop('offsetNameShort')
export const ordinal = prop('ordinal')
export const outputCalendar = prop('outputCalendar')
export const quarter = prop('quarter')
export const second = prop('second')
export const weekNumber = prop('weekNumber')
export const weekYear = prop('weekYear')
export const weekday = prop('weekday')
export const weekdayLong = prop('weekdayLong')
export const weekdayShort = prop('weekdayShort')
export const weeksInWeekYear = prop('weeksInWeekYear')
export const year = prop('year')
export const zone = prop('zone')
export const zoneName = prop('zoneName')

/* Public Methods */

export const diffWithOptions = curryN(3, (o, u, [x, y]) => x.diff(y, u, o))
export const diff = curryN(2, (u, [x, y]) => x.diff(y, u))
export const diffMillis = curryN(1, ([x, y]) => x.diff(y, 'milliseconds'))

export const diffNowWithOptions = fromBinaryMethod('diffNow')
export const diffNow = withDefault(diffNowWithOptions)
export const diffNowMillis = diffNow('milliseconds')

export const endOf = fromUnaryMethod('endOf')

export const hasSame = fromBinaryMethod('hasSame')

export const resolvedLocaleOptionsWithOptions = fromUnaryMethod(
  'resolvedLocaleOptions'
)
export const resolvedLocaleOptions = withDefault(
  resolvedLocaleOptionsWithOptions
)

export const setLocale = fromUnaryMethod('setLocale')

export const setZoneWithOptions = fromBinaryMethod('setZone')
export const setZone = withDefault(setZoneWithOptions)
export const setZoneLocal = setZone('local')
export const setZoneSystem = setZone('system')
export const setZoneUtc = setZone('utc')

export const startOf = fromUnaryMethod('startOf')

export const toHttp = fromNullaryMethod('toHTTP')

export const toIsoWeekDate = fromNullaryMethod('toISOWeekDate')

export const toJsDate = fromNullaryMethod('toJSDate')

export const toLocal = fromNullaryMethod('toLocal')

export const toLocalePartsWithOptions = fromUnaryMethod('toLocaleParts')
export const toLocaleParts = withDefault(toLocalePartsWithOptions)

export const toLocaleStringWithOptions = fromBinaryMethod('toLocaleString')
export const toLocaleString = withDefault(toLocaleStringWithOptions)
export const toLocaleStringShort = toLocaleString(DateTime.DATE_SHORT)

export const toRfc2822 = fromNullaryMethod('toRFC2882')

export const toRelativeWithOptions = fromUnaryMethod('toRelative')
export const toRelative = withDefault(toRelativeWithOptions)

export const toRelativeCalendarWithOptions =
  fromUnaryMethod('toRelativeCalendar')
export const toRelativeCalendar = withDefault(toRelativeCalendarWithOptions)

export const toSqlWithOptions = fromUnaryMethod('toSQL')
export const toSql = withDefault(toSqlWithOptions)

export const toSqlDate = fromNullaryMethod('toSQLDate')

export const toSqlTimeWithOptions = fromUnaryMethod('toSQLTime')
export const toSqlTime = withDefault(toSqlTimeWithOptions)

export const toUtcWithOptions = fromBinaryMethod('toUTC')
export const toUtc = withDefault(toUtcWithOptions)
export const toUtcZero = toUtc('0')

export const until = fromUnaryMethod('until')

export const valueOf = fromNullaryMethod('valueOf')
export const toSeconds = fromNullaryMethod('toSeconds')
