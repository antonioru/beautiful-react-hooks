import { useCallback } from 'react'
import throttle from 'lodash.throttle'
import { DebouncedFunc } from './shared/types'

interface ThrottleSettings {
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}

const defaultOptions: ThrottleSettings = {
  leading: false,
  trailing: true,
}

/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
 * before allowing the next execution.
 * If time is not defined, its default value will be 100ms.
 */
const useThrottledFn = <T extends (...args: any) => any>
  (fn: T, wait: number = 100, options: ThrottleSettings = defaultOptions, dependencies: any[]): DebouncedFunc<T> => {
  const throttled = throttle(fn, wait, options)

  return useCallback(throttled, dependencies)
}

export default useThrottledFn
