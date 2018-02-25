import { DateTime } from 'luxon'

export const dateTimeFromFormat = (...args) => DateTime.fromFormat(...args)
export const dateTimeFromFormatExplain = (...args) => DateTime.fromFormatExplain(...args)
export const dateTimeFromHTTP = (...args) => DateTime.fromHTTP(...args)
export const dateTimeFromISO = (...args) => DateTime.fromISO(...args)
export const dateTimeFromJSDate = (...args) => DateTime.fromJSDate(...args)
export const dateTimeFromMillis = (...args) => DateTime.fromMillis(...args)
export const dateTimeFromObject = (...args) => DateTime.fromObject(...args)
export const dateTimeFromRFC2822 = (...args) => DateTime.fromRFC2822(...args)
export const dateTimeFromSQL = (...args) => DateTime.fromSQL(...args)
