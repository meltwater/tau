import { prop } from 'ramda'

import { fromBinaryMethod, fromUnaryMethod, withDefault } from './functors.js'

/* Public Members */

export const name = prop('name')
export const type = prop('type')
export const isUniversal = prop('isUniversal')

export const offsetAt = fromUnaryMethod('offset')

export const offsetNameAtWithOptions = fromBinaryMethod('offsetName')
export const offsetNameAt = withDefault(offsetNameAtWithOptions)

export const formatOffset = fromBinaryMethod('formatOffset')
