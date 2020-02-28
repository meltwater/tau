import test from 'ava'

import { fromMillis, toMillis } from './fluxon'

import { fromUnixUtc, fromUnixWithOptions, fromUnix, toUnix } from './unix'

test('fromUnix', t => {
  t.is(toMillis(fromUnix(18473093)), 18473093000)
  t.is(toMillis(fromUnix(18473093.566)), 18473093000)
})

test('fromUnixUtc', t => {
  t.is(toMillis(fromUnixUtc(18473093)), 18473093000)
  t.is(toMillis(fromUnixUtc(18473093.566)), 18473093000)
})

test('fromUnixUtcWithOptions', t => {
  t.is(
    toMillis(fromUnixWithOptions({ zone: 'utc' }, 18473093.566)),
    18473093000
  )
})

test('toUnix', t => {
  t.is(toUnix(fromUnix(18473093)), 18473093, 'exact')
  t.is(toUnix(fromMillis(18473093786)), 18473093, 'rounds down')
  t.is(toUnix(fromMillis(18473093386)), 18473093, 'rounds down')
})
