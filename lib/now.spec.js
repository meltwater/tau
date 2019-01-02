import test from 'ava'

import {
  fromMillis,
  fromMillisUtc,
  fromMillisWithOptions,
  setNow
} from './fluxon'

import {
  fromNow,
  fromNowToIso,
  fromNowToMillis,
  fromNowToUnix,
  fromNowUtc,
  fromNowWithOptions
} from './now'

test.beforeEach(t => {
  const now = 174730330060
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

test('fromNowToMillis', t => {
  t.is(fromNowToMillis(), t.context.now)
})

test('fromNowToUnix', t => {
  t.is(fromNowToUnix(), 174730330)
})

test('fromNowToIso', t => {
  t.is(fromNowToIso(), '1975-07-16T08:12:10.060Z')
})
