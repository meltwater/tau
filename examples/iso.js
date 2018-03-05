import { Settings } from 'luxon'
import { compose } from 'ramda'

import { day, fromIso } from '../lib'

export default ({log}) => async (iso = new Date().toISOString()) => {
  Settings.throwOnInvalid = true
  return compose(day, fromIso)(iso)
}
