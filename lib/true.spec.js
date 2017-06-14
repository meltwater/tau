import test from 'ava'

import { isTrue } from './true'

test('checks if true', async t => {
  t.true(await isTrue(true), 'returns true when true')
  t.false(await isTrue(false), 'returns false when false')
  t.false(await isTrue(''), 'returns false when not boolean')
})
