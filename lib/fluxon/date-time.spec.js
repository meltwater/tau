import test from 'ava'
import { DateTime } from 'luxon'

import {
  fromJsDate,
  toMillis,
  local,
  min,
  max,
  utc
} from './date-time'

test('fromJsDate', t => {
  const date = new Date()
  t.deepEqual(fromJsDate(date), DateTime.fromJSDate(date))
})

test('toMillis', t => {
  const dt = fromJsDate(new Date())
  t.is(toMillis(dt), dt.valueOf())
})

test('local', t => {
  t.deepEqual(local([2018, 2, 5]), DateTime.local(2018, 2, 5))
})

test('utc', t => {
  t.deepEqual(utc([2018, 2, 5]), DateTime.utc(2018, 2, 5))
})

test('min', t => {
  const d1 = fromJsDate(new Date(10))
  const d2 = fromJsDate(new Date(50000))
  t.is(min(d1, d2), d1)
})

test('max', t => {
  const d1 = fromJsDate(new Date(10))
  const d2 = fromJsDate(new Date(50000))
  t.is(max(d1, d2), d2)
})
