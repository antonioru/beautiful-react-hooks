const isFunction = (functionToCheck: unknown): functionToCheck is Function => !!(
  typeof functionToCheck === 'function'
    && !!functionToCheck.constructor
    && !!functionToCheck.call
    && !!functionToCheck.apply
)

export default isFunction
