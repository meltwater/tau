import { compose } from 'ramda'

import { setThrowOnInvalid, day, fromIso } from '../lib'

export default ({log}) => async (iso = new Date().toISOString()) => {
  setThrowOnInvalid(true)
  return compose(day, fromIso)(iso)
}
