import test from 'ava'

import { fromJsDate } from './date-time'
import { durationFromMillis } from './duration'
import {
  toIso,
  toIsoWithOptions
} from './shared'

test('toIso', t => {
  const dt = fromJsDate(new Date())
  t.is(toIso(dt), dt.toISO(), 'when DateTime')

  const duration = durationFromMillis(3000)
  t.is(toIso(duration), duration.toISO(), 'when Duration')
})

test('toIsoWithOptions', t => {
  const dt = fromJsDate(new Date())
  const opts = {includeOffset: false}
  t.is(toIsoWithOptions(opts, dt), dt.toISO(opts), 'when DateTime')
  t.is(toIsoWithOptions(opts)(dt), dt.toISO(opts), 'when DateTime')
})
