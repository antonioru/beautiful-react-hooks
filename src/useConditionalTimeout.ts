import { useCallback, useEffect, useRef, useState } from 'react'

import isFunction from './shared/isFunction'
import { GenericFunction } from './shared/types'
import usePreviousValue from './usePreviousValue'

type UseConditionalTOOpts = {
  cancelOnUnmount?: boolean,
  cancelOnConditionChange?: boolean
}

const defaultOptions: UseConditionalTOOpts = {
  cancelOnUnmount: true,
  cancelOnConditionChange: true,
}

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time from when the condition verifies.
 */
const useConditionalTimeout = <TCallback extends GenericFunction>
  (fn: TCallback, milliseconds: number, condition: boolean, options: UseConditionalTOOpts = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const timeout = useRef<any>()
  const callback = useRef(fn)
  const [isCleared, setIsCleared] = useState(false)
  const prevCondition = usePreviousValue(condition)

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
      setIsCleared(true)
    }
  }, [])

  // if the provided function changes, change its reference
  useEffect(() => {
    if (isFunction(fn)) {
      callback.current = fn
    }
  }, [fn])

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (condition && typeof milliseconds === 'number') {
      timeout.current = setTimeout(() => {
        callback.current()
      }, milliseconds)
    }
  }, [condition, milliseconds])

  // when the condition change, clear the timeout
  useEffect(() => {
    if (prevCondition && condition !== prevCondition && opts.cancelOnConditionChange) {
      clear()
    }
  }, [condition, options])

  // when component unmount clear the timeout
  useEffect(() => () => {
    if (opts.cancelOnUnmount) {
      clear()
    }
  }, [])

  return [isCleared, clear]
}

export default useConditionalTimeout
