import { useCallback, useEffect, useRef, useState } from 'react'
import { GenericFunction } from './shared/types'

export type UseIntervalOptions = {
  cancelOnUnmount?: boolean,
}

const defaultOptions: UseIntervalOptions = {
  cancelOnUnmount: true,
}

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then repeats the
 * execution of the given function by the defined milliseconds.
 */
const useInterval = <TCallback extends GenericFunction>
  (fn: TCallback, milliseconds: number, options: UseIntervalOptions = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const timeout = useRef<NodeJS.Timeout>()
  const callback = useRef<TCallback>(fn)
  const [isCleared, setIsCleared] = useState<boolean>(false)

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      setIsCleared(true)
      clearInterval(timeout.current)
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
      timeout.current = setInterval(() => {
        callback.current()
      }, milliseconds)
    }

    // cleanup previous interval
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

export default useInterval
