import {
  apply,
  binary,
  bind,
  call,
  compose,
  curryN,
  flip,
  of,
  partial,
  prop,
  unary
} from 'ramda'

export const withOptions = compose(flip(partial), of)
export const withDefault = withOptions({})
export const withZone = zone => withOptions({zone})
export const withUtc = withZone('utc')

export const fromMethod = key => (x, ...args) => call(bind(prop(key, x), x), ...args)
export const toTernary = fn => compose(curryN(3, (x, y, z) => fn(z, y, x)))
export const toQuaternary = fn => compose(curryN(4, (w, x, y, z) => fn(z, y, x, w)))
export const toBinary = compose(flip, binary)
export const fromTernaryMethod = compose(toQuaternary, fromMethod)
export const fromBinaryMethod = compose(toTernary, fromMethod)
export const fromUnaryMethod = compose(toBinary, fromMethod)
export const fromNullaryMethod = compose(unary, fromMethod)
export const fromVariadicMethod = compose(apply, fromMethod)