import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const defaultOptions = {
  leading: false,
  trailing: true,
};

/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 250ms.
 */
const useDebouncedFn = (fn, wait = 100, options = defaultOptions, dependencies) => {
  const debounced = debounce(fn, wait, options);

  return useCallback(debounced, dependencies);
};

export default useDebouncedFn;
