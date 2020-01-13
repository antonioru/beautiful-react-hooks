import { useEffect } from 'react';
import createHandlerSetter from './utils/createHandlerSetter';

const defaultOptions = {
  capture: false,
  once: false,
  passive: false,
};

/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 */
const useGlobalEvent = (eventName, options = defaultOptions, fn) => {
  const [callbackRef, setCallbackRef] = createHandlerSetter(fn);
  const opts = { ...defaultOptions, ...(options || {}) };

  useEffect(() => {
    const cb = (event) => {
      if (callbackRef.current) {
        callbackRef.current(event);
      }
    };

    if (callbackRef.current && eventName) {
      window.addEventListener(eventName, cb, opts);
    }

    return () => {
      if (eventName) {
        window.removeEventListener(eventName, cb, opts);
      }
    };
  }, [eventName, options]);

  return setCallbackRef;
};

export default useGlobalEvent;
