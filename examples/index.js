import path from 'path'

import createExamples from '@meltwater/examplr'

import isTrue from './is-true' // TODO: Replace this with added example.

export const examples = {
  isTrue // TODO: Replace this with added example.
}

const envVars = [
  'LOG_LEVEL',
  'LOG_FILTER',
  'LOG_OUTPUT_MODE'
]

const defaultOptions = {}

if (require.main === module) {
  const { runExample } = createExamples({
    examples,
    envVars,
    defaultOptions
  })

  runExample({
    local: path.resolve(__dirname, 'local.json')
  })
}
