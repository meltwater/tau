import test from 'ava'

import {
  fromMillisToUnix,
  fromUnixToMillis
} from './conversions'

test('fromMillisToUnix', t => {
  t.is(fromMillisToUnix(18473093000), 18473093, 'exact')
  t.is(fromMillisToUnix(18473093786), 18473093, 'rounds down')
  t.is(fromMillisToUnix(18473093386), 18473093, 'rounds down')
})

test('fromUnixToMillis', t => {
  t.is(fromUnixToMillis(18473093), 18473093000)
})
