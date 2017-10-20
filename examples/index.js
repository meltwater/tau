import 'source-map-support/register'

import path from 'path'

import createExamples from '@meltwater/examplr'

import isTrue from './is-true' // TODO: Replace this with added example.

export const examples = {
  isTrue // TODO: Replace this with added example.
}

const envVars = [
  'LOG_LEVEL'
]

const defaultOptions = {}

const { createExample, runExample } = createExamples({
  examples,
  envVars,
  defaultOptions
})

if (require.main === module) {
  runExample({
    local: path.resolve(__dirname, 'local.json')
  })
}

export default createExample
