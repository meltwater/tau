import test from 'ava'

import { fromJsDate } from './date-time'
import { durationFromMillis } from './duration'
import { fromDateTimes } from './interval'
import {
  toIso,
  toIsoWithOptions
} from './shared'

test('toIso', t => {
  const dt = fromJsDate(new Date())
  t.is(toIso(dt), dt.toISO(), 'when DateTime')

  const duration = durationFromMillis(3000)
  t.is(toIso(duration), duration.toISO(), 'when Duration')

  const d1 = fromJsDate(new Date(1000))
  const d2 = fromJsDate(new Date(5000))
  const interval = fromDateTimes([d1, d2])
  t.is(toIso(interval), interval.toISO(), 'when Interval')
})

test('toIsoWithOptions', t => {
  const opts = { includeOffset: false }

  const dt = fromJsDate(new Date())
  t.is(toIsoWithOptions(opts, dt), dt.toISO(opts), 'when DateTime')
  t.is(toIsoWithOptions(opts)(dt), dt.toISO(opts), 'when DateTime')

  const d1 = fromJsDate(new Date(1000))
  const d2 = fromJsDate(new Date(5000))
  const interval = fromDateTimes([d1, d2])
  t.is(toIsoWithOptions(opts, interval), interval.toISO(opts), 'when Interval')
  t.is(toIsoWithOptions(opts)(interval), interval.toISO(opts), 'when Interval')
})
