import { useCallback, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'
import { DebouncedFunc } from './shared/types'

export type DebounceOptions = {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true,
}

/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 250ms.
 */
const useDebouncedCallback = <T extends (...args: any[]) => any>
  (fn: T, dependencies: any[] = [], wait: number = 250, options: DebounceOptions = defaultOptions): DebouncedFunc<T> => {
  const debounced = useRef(debounce(fn, wait, options))

  useEffect(() => {
    debounced.current = debounce(fn, wait, options)
  }, [fn, wait, options])

  return useCallback(debounced.current, dependencies)
}

export default useDebouncedCallback
