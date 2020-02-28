import {
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
export const withZone = zone => withOptions({ zone })
export const withUtc = withZone('utc')

export const fromMethod = key => (x, ...args) =>
  call(bind(prop(key, x), x), ...args)
export const fromVariadicMethod = key =>
  toBinary((x, [...args]) => call(bind(prop(key, x), x), ...args))
export const toTernary = fn => curryN(3, (x, y, z) => fn(z, y, x))
export const toQuaternary = fn => curryN(4, (w, x, y, z) => fn(z, y, x, w))
export const toBinary = compose(flip, binary)
export const toUnary = unary
export const fromTernaryMethod = compose(toQuaternary, fromMethod)
export const fromBinaryMethod = compose(toTernary, fromMethod)
export const fromUnaryMethod = compose(toBinary, fromMethod)
export const fromNullaryMethod = compose(toUnary, fromMethod)
