import { isTrue } from '../lib'

export default ({ log }) => async (check = true) => {
  log.debug({ check }, 'Input')
  const result = await isTrue(check)
  if (!result) throw new Error('Check was not true.')
  return result
}
