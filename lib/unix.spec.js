import test from 'ava'

import {
  fromMillis,
  toMillis
} from './fluxon'

import {
  fromUnix,
  toUnix
} from './unix'

test('fromUnix', t => {
  t.is(toMillis(fromUnix(18473093)), 18473093000)
})

test('toUnix', t => {
  t.is(toUnix(fromUnix(18473093)), 18473093, 'exact')
  t.is(toUnix(fromMillis(18473093786)), 18473093, 'rounds down')
  t.is(toUnix(fromMillis(18473093386)), 18473093, 'rounds down')
})
