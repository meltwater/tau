import test from 'ava'

import {
  fromIsoToMillis,
  fromIsoToUnix,
  fromMillisToIso,
  fromMillisToUnix,
  fromUnixToIso,
  fromUnixToMillis
} from './conversions.js'

test('fromMillisToUnix', (t) => {
  t.is(fromMillisToUnix(18473093000), 18473093, 'exact')
  t.is(fromMillisToUnix(18473093786), 18473093, 'rounds down')
  t.is(fromMillisToUnix(18473093386), 18473093, 'rounds down')
})

test('fromUnixToMillis', (t) => {
  t.is(fromUnixToMillis(18473093), 18473093000)
})

test('fromUnixToIso', (t) => {
  t.is(fromUnixToIso(18473093), '1970-08-02T19:24:53.000Z')
})

test('fromIsoToUnix', (t) => {
  t.is(fromIsoToUnix('1970-08-02T19:24:53.520Z'), 18473093)
})

test('fromMillisToIso', (t) => {
  t.is(fromMillisToIso(184730937839), '1975-11-09T02:08:57.839Z')
})

test('fromIsoToMillis', (t) => {
  t.is(fromIsoToMillis('1970-08-02T19:24:57.040Z'), 18473097040)
})
