import curryRight from 'lodash.curryright';
import { useEffect, useMemo, useRef } from 'react';
import useCallbackRef from './useCallbackRef';

const defaultOptions = {
  cancelPrevious: false,
  cancelOnUnmount: true,
};

/**
 * useTimeout is a "curry-ed" hook that accepts a function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time.
 */
const useTimeout = (fn, delay, options = defaultOptions) => {
  /* eslint-disable no-underscore-dangle */
  const _fn = typeof fn === 'function' ? fn : undefined;
  const _delay = typeof delay !== 'number' && typeof fn === 'number' ? fn : delay;
  const _options = typeof options === 'object' && typeof delay === 'object' ? delay : options;
  /* eslint-enable no-underscore-dangle */

  const [userCallback, setUserCallback] = useCallbackRef(_fn); // contains the function provided to be delayed
  const timeoutRef = useRef(); // contains the current timeout ref
  const opts = useMemo(() => ({ ...defaultOptions, ...(_options || {}) }), [options, delay]); // safe option object

  // saves the timeout reference into the local timeoutRef
  useEffect(() => {
    if (!timeoutRef.current && userCallback.current) {
      timeoutRef.current = setTimeout(() => {
        userCallback.current();
      }, _delay);
    }
  }, [fn, delay]);

  // handles the options
  useEffect(() => {
    if (opts.cancelPrevious) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [options, delay]);

  // makes sure to timeout will be cleared when component unmount
  useEffect(() => () => {
    if (timeoutRef.current && options.cancelOnUnmount) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return !_fn ? setUserCallback : timeoutRef.current;
};

export default curryRight(useTimeout);
