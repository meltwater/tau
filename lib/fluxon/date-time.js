import { DateTime } from 'luxon'
import {
  binary,
  compose,
  curryN,
  flip,
  partial,
  prop,
  unary
} from 'ramda'

const toTrinary = fn => compose(curryN(3, (x, y, z) => fn(z, y, x)))
const toBinary = compose(flip, binary)
const withDefault = flip(partial)([{}])

export const fromFormatWithOptions = toTrinary(DateTime.fromFormat)
export const fromFormat = withDefault(fromFormatWithOptions)

export const fromFormatExplainWithOptions = toTrinary(DateTime.fromFormatExplain)
export const fromFormatExplain = withDefault(fromFormatExplainWithOptions)

export const fromHTTPWithOptions = toBinary(DateTime.fromHTTP)
export const fromHttpWithOptions = fromHTTPWithOptions
export const fromHTTP = withDefault(fromHTTPWithOptions)
export const fromHttp = fromHTTP

export const fromISOWithOptions = toBinary(DateTime.fromISO)
export const fromIsoWithOptions = fromISOWithOptions
export const fromISO = withDefault(fromISOWithOptions)
export const fromIso = fromISO

export const fromJSDateWithOptions = toBinary(DateTime.fromJSDate)
export const fromJsDateWithOptions = fromJSDateWithOptions
export const fromJSDate = withDefault(fromJSDateWithOptions)
export const fromJsDate = fromJSDate

export const fromMillisWithOptions = toBinary(DateTime.fromMillis)
export const fromMillis = withDefault(fromMillisWithOptions)

export const fromObject = unary(DateTime.fromObject)

export const fromRFC2822WithOptions = toBinary(DateTime.fromRFC2822)
export const fromRfc2822WithOptions = fromRFC2822WithOptions
export const fromRFC2822 = withDefault(fromRFC2822WithOptions)
export const fromRfc2822 = fromRFC2822

export const fromSQLWithOptions = toBinary(DateTime.fromSQL)
export const fromSqlWithOptions = fromSQLWithOptions
export const fromSQL = withDefault(fromSQLWithOptions)
export const fromSql = fromSQL

export const day = prop('day')
export const daysInMonth = prop('daysInMonth')
