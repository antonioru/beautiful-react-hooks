import { useCallback, useEffect, useRef, useState } from 'react'

export type UseTimeoutOptions = {
  cancelOnUnmount?: boolean,
}

const defaultOptions = {
  cancelOnUnmount: true,
}

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time.
 */
const useTimeout = <T extends (...args: any[]) => any>
  (fn: T, milliseconds: number, options: UseTimeoutOptions = defaultOptions): [boolean, () => void] => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const timeout = useRef<NodeJS.Timeout>()
  const callback = useRef<T>(fn)
  const [isCleared, setIsCleared] = useState<boolean>(false)

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
      setIsCleared(true)
    }
  }, [])

  // if the provided function changes, change its reference
  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn
    }
  }, [fn])

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (typeof milliseconds === 'number') {
      timeout.current = setTimeout(() => {
        callback.current()
      }, milliseconds)
    }
    return clear
  }, [milliseconds])

  // when component unmount clear the timeout
  useEffect(() => () => {
    if (opts.cancelOnUnmount) {
      clear()
    }
  }, [])

  return [isCleared, clear]
}

export default useTimeout
