import { dateTimeFromISO } from '../lib'

export default ({log}) => async (iso = new Date().toISOString()) => {
  return dateTimeFromISO(iso)
}
