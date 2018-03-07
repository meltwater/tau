import test from 'ava'

import { fromMillis } from './date-time'

test('fromMillis', t => {
  t.snapshot(fromMillis(0).toUTC().toISO())
})
