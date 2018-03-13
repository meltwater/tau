import { DateTime } from 'luxon'
import {
  binary,
  bind,
  call,
  compose,
  curryN,
  flip,
  partial,
  prop,
  unary,
  of
} from 'ramda'

const fromMethod = key => (x, ...args) => call(bind(prop(key, x), x), ...args)
const toTernary = fn => compose(curryN(3, (x, y, z) => fn(z, y, x)))
const toQuaternary = fn => compose(curryN(4, (w, x, y, z) => fn(z, y, x, w)))
const toBinary = compose(flip, binary)
const fromTernaryMethod = compose(toQuaternary, fromMethod)
const fromBinaryMethod = compose(toTernary, fromMethod)
const fromUnaryMethod = compose(toBinary, fromMethod)
const fromNullaryMethod = compose(unary, fromMethod)

const withOptions = compose(flip(partial), of)
const withDefault = withOptions({})
const withZone = zone => withOptions({zone})
const withUtc = withZone('utc')

export const fromFormatWithOptions = toTernary(DateTime.fromFormat)
export const fromFormat = withDefault(fromFormatWithOptions)
export const fromFormatUtc = withUtc(fromFormatWithOptions)

export const fromFormatExplainWithOptions = toTernary(DateTime.fromFormatExplain)
export const fromFormatExplain = withDefault(fromFormatExplainWithOptions)
export const fromFormatExplainUtc = withUtc(fromFormatExplainWithOptions)

export const fromHTTPWithOptions = toBinary(DateTime.fromHTTP)
export const fromHttpWithOptions = fromHTTPWithOptions
export const fromHTTP = withDefault(fromHTTPWithOptions)
export const fromHttp = fromHTTP
export const fromHttpUtc = withUtc(fromHttpWithOptions)

export const fromISOWithOptions = toBinary(DateTime.fromISO)
export const fromIsoWithOptions = fromISOWithOptions
export const fromISO = withDefault(fromISOWithOptions)
export const fromIso = fromISO
export const fromIsoUtc = withUtc(fromIsoWithOptions)

export const fromJSDateWithOptions = toBinary(DateTime.fromJSDate)
export const fromJsDateWithOptions = fromJSDateWithOptions
export const fromJSDate = withDefault(fromJSDateWithOptions)
export const fromJsDate = fromJSDate
export const fromJsDateUtc = withUtc(fromJsDateWithOptions)

export const fromMillisWithOptions = toBinary(DateTime.fromMillis)
export const fromMillis = withDefault(fromMillisWithOptions)
export const fromMillisUtc = withUtc(fromMillisWithOptions)

export const fromObject = unary(DateTime.fromObject)
export const fromObjectUtc = withUtc(fromObject)

export const fromRFC2822WithOptions = toBinary(DateTime.fromRFC2822)
export const fromRfc2822WithOptions = fromRFC2822WithOptions
export const fromRFC2822 = withDefault(fromRFC2822WithOptions)
export const fromRfc2822 = fromRFC2822
export const fromRfc2822Utc = withUtc(fromRFC2822WithOptions)

export const fromSQLWithOptions = toBinary(DateTime.fromSQL)
export const fromSqlWithOptions = fromSQLWithOptions
export const fromSQL = withDefault(fromSQLWithOptions)
export const fromSql = fromSQL
export const fromSqlUtc = withUtc(fromSQLWithOptions)

export const day = prop('day')
export const daysInMonth = prop('daysInMonth')
export const daysInYear = prop('daysInYear')
export const hour = prop('hour')
export const invalidReason = prop('invalidReason')

export const isInDST = prop('isInDST')
export const isInDst = isInDST

export const isInLeapYear = prop('isInLeapYear')
export const isOffsetFixed = prop('isOffsetFixed')
export const isValid = prop('isValid')
export const locale = prop('locale')
export const millisecond = prop('millisecond')
export const minute = prop('minute')
export const month = prop('month')
export const monthLong = prop('monthLong')
export const monthShort = prop('monthShort')
export const numberingSystem = prop('numberingSystem')
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
export const year = prop('year')
export const zoneName = prop('zoneName')

export const diffWithOptions = fromTernaryMethod('diff')
export const diff = withDefault(diffWithOptions)
export const diffMillis = diff('milliseconds')

export const diffNowWithOptions = fromBinaryMethod('diffNow')
export const diffNow = withDefault(diffNowWithOptions)
export const diffNowMills = diffNow('milliseconds')

export const endOf = fromUnaryMethod('endOf')
export const equals = fromUnaryMethod('equals')
export const get = fromUnaryMethod('get')

export const hasSame = fromBinaryMethod('hasSame')
export const inspect = fromNullaryMethod('inspect')

export const minus = fromUnaryMethod('minus')
export const plus = fromUnaryMethod('plus')
export const reconfigure = fromUnaryMethod('reconfigure')

export const resolvedLocaleOptsWithOptions = fromUnaryMethod('resolvedLocaleOpts')
export const resolvedLocaleOpts = withDefault(resolvedLocaleOptsWithOptions)

export const set = fromUnaryMethod('set')
export const setLocale = fromUnaryMethod('setLocale')

export const setZoneWithOptions = fromBinaryMethod('setZone')
export const setZone = withDefault(setZoneWithOptions)
export const setZoneLocal = setZone('local')

export const startOf = fromUnaryMethod('startOf')

export const toFormatWithOptions = fromBinaryMethod('toFormat')
export const toFormat = withDefault(toFormatWithOptions)

export const toHTTP = fromNullaryMethod('toHTTP')
export const toHttp = toHTTP

export const toISOWithOptions = fromUnaryMethod('toISO')
export const toIsoWithOptions = toISOWithOptions
export const toISO = withDefault(toISOWithOptions)
export const toIso = toISO

export const toISODate = fromNullaryMethod('toISODate')
export const toIsoDate = toISODate

export const toISOTimeWithOptions = fromUnaryMethod('toISOTime')
export const toIsoTimeWithOptions = toISOTimeWithOptions
export const toISOTime = withDefault(toISOTimeWithOptions)
export const toIsoTime = toISOTime

export const toISOWeekDate = fromNullaryMethod('toISOWeekDate')
export const toIsoWeekDate = toISOWeekDate

export const toJSDate = fromNullaryMethod('toJSDate')
export const toJsDate = toJSDate

export const toJSON = fromNullaryMethod('toJSON')
export const toJson = toJSON

export const toLocal = fromNullaryMethod('toLocal')

export const toLocalePartsWithOptions = fromUnaryMethod('toLocaleParts')
export const toLocaleParts = toLocalePartsWithOptions

export const toLocaleStringWithOptions = fromUnaryMethod('toLocaleString')
export const toLocaleString = toLocaleStringWithOptions

export const toObjectWithOptions = fromUnaryMethod('toObject')
export const toObject = toObjectWithOptions

export const toRFC2822 = fromNullaryMethod('toRFC2882')
export const toRfc2822 = toRFC2822

export const toSQLWithOptions = fromUnaryMethod('toSQL')
export const toSqlWithOptions = toSQLWithOptions
export const toSQL = withDefault(toSQLWithOptions)
export const toSql = toSQL

export const toSQLDate = fromNullaryMethod('toSQLDate')
export const toSqlDate = toSQLDate

export const toSQLTimeWithOptions = fromUnaryMethod('toSQLTime')
export const toSqlTimeWithOptions = toSQLTimeWithOptions
export const toSQLTime = withDefault(toSQLTimeWithOptions)
export const toSqlTime = toSQLTime

export const toString = fromNullaryMethod('toString')

export const toUTCWithOptions = fromBinaryMethod('toUTC')
export const toUtcWithOptions = toUTCWithOptions
export const toUTC = withDefault(toUTCWithOptions)
export const toUtc = toUTC
export const toUTCZero = toUTC('0')
export const toUtcZero = toUTCZero

export const until = fromUnaryMethod('until')
export const valueOf = fromNullaryMethod('valueOf')
export const toMillis = valueOf
