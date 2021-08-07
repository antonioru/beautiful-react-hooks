/**
 * Create setter error proxy
 */
const createCbSetterErrorProxy = (errorMessage: string) => new Proxy(Object.create(null), {
  get: (target, property) => {
    if (property && typeof property === 'string' && property.slice(0, 2) === 'on') {
      return () => {
        throw new Error(errorMessage)
      }
    }

    return { error: errorMessage }
  },
})

export default createCbSetterErrorProxy
