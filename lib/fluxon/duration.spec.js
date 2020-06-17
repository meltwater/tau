import test from 'ava'

import { durationFromMillis, shiftTo } from './duration'

test('shiftTo', (t) => {
  const duration = durationFromMillis(3000)
  const units = ['minutes', 'milliseconds']
  t.deepEqual(shiftTo(units, duration), duration.shiftTo(...units))
  t.deepEqual(shiftTo(units)(duration), duration.shiftTo(...units))
})
