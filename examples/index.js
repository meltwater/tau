import 'source-map-support/register'

import fs from 'fs'

import camelcase from 'camelcase'
import createLogger from '@meltwater/mlabs-logger'

import isTrue from './is-true'

const examples = {
  isTrue
}

const runExample = async (name, {
  log = createLogger({name}),
  ...options
} = {}) => {
  try {
    if (!name) throw new Error('Must specify example name as first argument.')

    const example = examples[camelcase(name)]

    if (typeof example !== 'function') {
      throw new Error(`Example ${name} not found.`)
    }

    log.info('Example: Start')
    const data = await example({...options, log})()
    log.info({data}, 'Example: Success')
    return data
  } catch (err) {
    log.error({err}, 'Example: Fail')
    throw err
  }
}

if (require.main === module) {
  const { name } = JSON.parse(fs.readFileSync('package.json'))
  const example = process.argv.slice(2)[0]
  const log = createLogger({name, example, level: process.env.LOG_LEVEL})
  const options = {}
  runExample(example, {...options, log}).catch(() => {
    log.fatal('Example: Fatal')
    process.exit(1)
  })
}

export default runExample
