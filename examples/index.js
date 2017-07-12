import 'source-map-support/register'

import fs from 'fs'
import path from 'path'

import camelcase from 'camelcase'
import createLogger from '@meltwater/mlabs-logger'

import isTrue from './is-true'

export const examples = {
  isTrue
}

const envOptions = env => Object.assign.apply({}, [{}, ...[
  'LOG_LEVEL'
].filter(k => env[k] !== undefined).map(k => ({[camelcase(k)]: env[k]}))])

const localOptions = local => (
  fs.existsSync(local)
    ? JSON.parse(fs.readFileSync(local))
    : {}
)

const createExample = (name, {
  log = createLogger({name}),
  ...options
} = {}) => async (...args) => {
  try {
    if (!name) throw new Error('Must specify example name as first argument.')

    const example = examples[camelcase(name)]

    if (typeof example !== 'function') {
      throw new Error(`Example ${name} not found.`)
    }

    log.info('Example: Start')
    const data = await example({...options, log})(...args)
    log.info({data}, 'Example: Success')
    return data
  } catch (err) {
    log.error({err}, 'Example: Fail')
    throw err
  }
}

if (require.main === module) {
  const local = path.resolve(__dirname, 'local.json')
  const { name } = JSON.parse(fs.readFileSync('package.json'))
  const example = process.argv.slice(2)[0]
  const args = process.argv.slice(3)
  const options = {...localOptions(local), ...envOptions(process.env)}
  const level = options.logLevel || 'info'
  const log = createLogger({name, example, level})
  createExample(example, {...options, log})(...args).catch(() => {
    log.fatal('Example: Fatal')
    process.exit(1)
  })
}

export default createExample
