import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import test from 'ava'

import { isTrue } from '../lib'

const readFileAsync = promisify(fs.readFile)

test('checks if true', async (t) => {
  const fixture = await readFileAsync(path.resolve('fixtures', 'true.json'))
  const { trueValue, falseValue } = JSON.parse(fixture)
  t.true(await isTrue(trueValue), 'returns true when true')
  t.false(await isTrue(falseValue), 'returns false when false')
})

/* TODO: Remove this file. */
