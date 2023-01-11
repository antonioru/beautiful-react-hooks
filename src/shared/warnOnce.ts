const cache = new Map()

/**
 * A tiny wrapper around console.warn that makes sure the message is only displayed once.
 * Used mainly to avoid polluting server side logs
 * @param message
 */
const warnOnce = (message: string) => {
  if (cache.has(message)) return

  cache.set(message, true)

  // eslint-disable-next-line no-console
  console.warn(message)
}

export default warnOnce
