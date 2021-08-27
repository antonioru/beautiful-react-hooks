import { useCallback } from 'react'
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
 * If time is not defined, its default value will be 100ms.
 */
const useDebouncedFn = <T extends (...args: any) => any>
  (fn: T, wait: number = 100, options: DebounceOptions = defaultOptions, dependencies?: any[]): DebouncedFunc<T> => {
  const debounced = debounce(fn, wait, options)

  return useCallback(debounced, dependencies)
}

export default useDebouncedFn
