import 'source-map-support/register'

import camelcase from 'camelcase'
import createLogger from '@meltwater/mlabs-logger'

import isTrue from './is-true'

const examples = {
  isTrue
}

const options = {}

if (require.main === module) {
  const name = process.argv.slice(2)[0]
  if (!name) throw new Error('Must specify example name as first argument.')

  const log = createLogger({example: name, level: process.env.LOG_LEVEL})

  const example = examples[camelcase(name)]

  if (typeof example !== 'function') {
    throw new Error(`Example ${name} not found.`)
  }

  log.info('Example: Start')
  example({...options, log})().then(data => {
    log.info({data}, 'Example: Success')
  }).catch(err => {
    log.fatal({err}, 'Example: Fail')
    process.exit(1)
  })
}
