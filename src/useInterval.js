import { useEffect, useRef } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a setter function that accepts a callback to be performed every 'x' milliseconds.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const TestComponent = () => {
 *   const [show2sec, setShow2Sec] = useState();
 *   const [show5sec, setShow5Sec] = useState();
 *   const after2Second = useTimeout(2000);
 *   const after5Seconds = useTimeout(5000);
 *
 *   after2Second(() => {
 *     setShow2Sec(true);
 *   });
 *
 *   after5Seconds(() => {
 *     setShow5Sec(true);
 *   });
 *
 *   return (
 *     <div>
 *       <p>Content delay...</p>
 *       {show2sec && <p>Shown after 2 seconds...</p>}
 *       {show5sec && <p>Shown after 5 seconds.</p>}
 *     </div>
 *   );
 * };
 * ```
 */
const useInterval = (delay = 1000) => {
  const intervalRef = useRef();
  const [callbackRef, setCallbackRef] = useCallbackRef();

  useEffect(() => {
    if (!intervalRef.current && callbackRef.current) {
      intervalRef.current = setInterval(() => {
        callbackRef.current();
      }, delay);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef, callbackRef]);

  return setCallbackRef;
};

export default useInterval;
