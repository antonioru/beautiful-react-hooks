import { useCallback } from 'react';
import throttle from 'lodash.throttle';

const defaultOptions = {
  leading: false,
  trailing: true,
};

/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
 * before allowing the next execution.
 * If time is not defined, its default value will be 100ms.
 */
const useThrottledFn = (fn, wait = 100, options = defaultOptions, dependencies) => {
  const throttled = throttle(fn, wait, options);

  return useCallback(throttled, dependencies);
};

export default useThrottledFn;
