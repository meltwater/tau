import { isTrue } from '../lib'

export default options => async (x = true) => isTrue(x)
