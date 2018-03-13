import test from 'ava'

import {
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
  t.is(toUnix(fromUnix(18473093)), 18473093)
})
