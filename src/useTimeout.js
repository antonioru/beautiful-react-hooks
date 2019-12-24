import { useEffect, useRef } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a setter function that accepts a callback to be performed after the given delay.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const useTimeCounter = () => {
 *   const [seconds, setSeconds] = useState(0);
 *   const [ms, setMilliseconds] = useState(0);
 *   const everySecond = useInterval(1000);
 *   const everyMillisecond = useInterval(100);
 *
 *   everySecond(() => {
 *     setSeconds(1 + seconds);
 *   }, [seconds]);
 *
 *   everyMillisecond(() => {
 *     setMilliseconds(1 + ms);
 *   });
 *
 *   return {seconds, ms};
 * }
 * ```
 */
const useTimeout = (delay = 1000) => {
  const timeoutRef = useRef();
  const [callbackRef, setCallbackRef] = useCallbackRef();

  useEffect(() => {
    if (!timeoutRef.current && callbackRef.current) {
      timeoutRef.current = setTimeout(() => {
        callbackRef.current();
      }, delay);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [callbackRef]);

  return setCallbackRef;
};

export default useTimeout;
