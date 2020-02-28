import { Settings } from 'luxon'

export const defaultLocale = () => Settings.defaultLocale
export const setDefaultLocale = x => {
  Settings.defaultLocale = x
}

export const defaultNumberingSystem = () => Settings.defaultNumberingSystem
export const setDefaultNumberingSystem = x => {
  Settings.defaultNumberingSystem = x
}

export const defaultOutputCalendar = () => Settings.defaultOutputCalendar
export const setDefaultOutputCalendar = x => {
  Settings.defaultOutputCalendar = x
}

export const defaultZone = () => Settings.defaultZone

export const defaultZoneName = () => Settings.defaultZoneName
export const setDefaultZoneName = x => {
  Settings.defaultZoneName = x
}

export const now = () => Settings.now
export const setNow = x => {
  Settings.now = x
}

export const throwOnInvalid = () => Settings.throwOnInvalid
export const setThrowOnInvalid = x => {
  Settings.throwOnInvalid = x
}

export const resetCaches = () => Settings.resetCaches()
