import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *    const [widowWidth, setWindowWidth] = useState(window.innerWidth);
 *    const onWindowResize = useGlobalEvent('resize');
 *
 *    onWindowResize(() => {
 *        setWindowWidth(window.innerWidth);
 *    });
 *
 *    return (
 *      <div>
 *        Current window width: {widowWidth}
 *      </div>
 *    );
 * }
 * ```
 */
const useGlobalEvent = (eventName) => {
  const [callbackRef, setCallbackRef] = useCallbackRef();

  useEffect(() => {
    const cb = (...args) => callbackRef.current(...args);

    if (callbackRef.current && eventName) {
      window.addEventListener(eventName, cb);
    }

    return () => {
      if (eventName) {
        window.removeEventListener(eventName, cb);
      }
    };
  }, [eventName]);

  return setCallbackRef;
};

export default useGlobalEvent;
