import { type DependencyList, useCallback, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'
import { type GenericFunction } from './shared/types.ts'
import useWillUnmount from './useWillUnmount.ts'

export interface DebounceOptions {
  leading?: boolean | undefined
  maxWait?: number | undefined
  trailing?: boolean | undefined
}

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true
}

/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 250ms.
 */
const useDebouncedCallback = <TCallback extends GenericFunction>
  (fn: TCallback, dependencies: DependencyList = [], wait: number = 600, options: DebounceOptions = defaultOptions) => {
  const debounced = useRef(debounce<TCallback>(fn, wait, options))

  useEffect(() => {
    debounced.current = debounce(fn, wait, options)
  }, [fn, wait, options, ...dependencies])

  useWillUnmount(() => {
    debounced.current?.cancel()
  })

  return useCallback((...args: Parameters<TCallback>) => debounced.current(...args), [...dependencies])
}

export default useDebouncedCallback
