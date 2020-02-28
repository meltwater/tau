import test from 'ava'
import { Info } from 'luxon'

import { eras, erasShort, erasLong } from './info'

test('eras', t => {
  t.deepEqual(eras('short'), Info.eras('short'))
  t.deepEqual(eras('long'), Info.eras('long'))
})

test('erasShort', t => {
  t.deepEqual(erasShort(), Info.eras('short'))
})

test('erasLong', t => {
  t.deepEqual(erasLong(), Info.eras('long'))
})
