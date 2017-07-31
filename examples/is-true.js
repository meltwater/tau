import { isTrue } from '../lib'

export default ({log}) => async (check = true) => {
  log.debug({check}, 'Input: Check')
  return isTrue(check)
}
