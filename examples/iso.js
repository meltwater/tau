import { compose } from 'ramda'

import { setThrowOnInvalid, day, fromFormatWithOptions, withZone } from '../lib'

export default ({ log }) => async (iso = new Date().toISOString()) => {
  setThrowOnInvalid(true)
  return compose(day, withZone('utc')(fromFormatWithOptions)('YYYY'))(iso)
}
