import { useCallback, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'
import { ThrottledFunc } from './shared/types'

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
 * If time is not defined, its default value will be 250ms.
 */
const useThrottledCallback = <T extends (...args: any[]) => any>
  (fn: T, dependencies: any[] = [], wait: number = 250, options: ThrottleSettings = defaultOptions): ThrottledFunc<T> => {
  const throttled = useRef(throttle(fn, wait, options))

  useEffect(() => {
    throttled.current = throttle(fn, wait, options)
  }, [fn, wait, options])

  return useCallback(throttled.current, dependencies)
}

export default useThrottledCallback
