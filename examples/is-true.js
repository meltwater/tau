import { isTrue } from '../lib'

export default ({log}) => async (check = true) => {
  log.debug({check}, 'Input')
  return isTrue(check)
}
