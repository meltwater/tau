import test from 'ava'
import { Interval } from 'luxon'

import { fromJsDate } from './date-time.js'
import { fromDateTimes } from './interval.js'

test('fromDateTimes', (t) => {
  const d1 = fromJsDate(new Date(1000))
  const d2 = fromJsDate(new Date(5000))
  t.deepEqual(fromDateTimes([d1, d2]), Interval.fromDateTimes(d1, d2))
})
