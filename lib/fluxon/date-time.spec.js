import test from 'ava'
import { DateTime } from 'luxon'

import { toObject } from './shared'
import {
  diff,
  diffWithOptions,
  diffMillis,
  diffNowMillis,
  fromJsDate,
  local,
  max,
  min,
  utc
} from './date-time'

test('fromJsDate', t => {
  const date = new Date()
  t.deepEqual(fromJsDate(date), DateTime.fromJSDate(date))
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
  t.is(min(d1)(d2), d1)
})

test('max', t => {
  const d1 = fromJsDate(new Date(10))
  const d2 = fromJsDate(new Date(50000))
  t.is(max(d1, d2), d2)
  t.is(max(d1)(d2), d2)
})

test('diff', t => {
  const x = fromJsDate(new Date(50000))
  const y = fromJsDate(new Date(10000))
  t.deepEqual(toObject(diff('milliseconds')([x, y])), { milliseconds: 40000 })
  t.deepEqual(toObject(diff('milliseconds', [x, y])), { milliseconds: 40000 })
})

test('diffWithOptions', t => {
  const x = fromJsDate(new Date(50000))
  const y = fromJsDate(new Date(10000))
  t.deepEqual(
    toObject(diffWithOptions({}, 'milliseconds', [x, y])),
    { milliseconds: 40000 }
  )
})

test('diffMillis', t => {
  const x = fromJsDate(new Date(50000))
  const y = fromJsDate(new Date(10000))
  t.deepEqual(toObject(diffMillis([x, y])), { milliseconds: 40000 })
  t.deepEqual(toObject(diffMillis([y, x])), { milliseconds: -40000 })
})

test('diffNowMillis', t => {
  const x = fromJsDate(new Date(1000))
  t.true(toObject(diffNowMillis(x)).milliseconds < 0)
})
