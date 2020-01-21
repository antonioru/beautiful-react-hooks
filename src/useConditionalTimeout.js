import { useEffect, useState, useCallback, useRef } from 'react';
import usePreviousValue from './usePreviousValue';

const defaultOptions = {
  cancelOnUnmount: true,
  cancelOnConditionChange: true,
};

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time from when the condition verifies.
 */
const useConditionalTimeout = (fn, milliseconds, condition, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) };
  const timeout = useRef();
  const callback = useRef(fn);
  const [isCleared, setIsCleared] = useState(false);
  const prevCondition = usePreviousValue(condition);

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);

  // if the provided function changes, change its reference
  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (condition && typeof milliseconds === 'number') {
      timeout.current = setTimeout(() => {
        callback.current();
      }, milliseconds);
    }
  }, [condition, milliseconds]);

  // when the condition change, clear the timeout
  useEffect(() => {
    if (prevCondition && condition !== prevCondition && opts.cancelOnConditionChange) {
      clear();
    }
  }, [condition, options]);

  // when component unmount clear the timeout
  useEffect(() => () => {
    if (opts.cancelOnUnmount) {
      clear();
    }
  }, []);

  return [isCleared, clear];
};

export default useConditionalTimeout;
