import test from 'ava'

import {
  fromMillis,
  fromMillisUtc,
  fromMillisWithOptions,
  setNow
} from './fluxon'

import {
  fromNow,
  fromNowUtc,
  fromNowWithOptions
} from './now'

test.beforeEach(t => {
  const now = 174730330000
  t.context.now = now
  setNow(() => now)
})

test('fromNow', t => {
  const now = fromMillis(t.context.now)
  t.deepEqual(fromNow(), now)
})

test('fromNowWithOptions', t => {
  const now = fromMillisWithOptions({ zone: 'utc' }, t.context.now)
  t.deepEqual(fromNowWithOptions({ zone: 'utc' }), now)
})

test('fromNowUtc', t => {
  const now = fromMillisUtc(t.context.now)
  t.deepEqual(fromNowUtc(), now)
})
