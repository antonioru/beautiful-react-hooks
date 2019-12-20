import { useCallback, useRef } from 'react';

/**
 * Creates a callback reference that will live trough the component lifecycle until changed.
 * Returns the callback ref and a setter to change its value, as per the React hooks convention.
 * The setter also makes sure that the given callback is indeed a function.
 * If not the callback ref won't change.
 *
 * Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const [ callbackRef, setCallbackRef ] = useCallbackRef();
 *
 *   setCallbackRef(() => console.log('A persistent callback'));
 *
 *   useEffect(callbackRef.current, []);
 *
 *   return (<div />)
 * }
 * ```
 */
const useCallbackRef = () => {
  const callbackRef = useRef();

  const setCallbackRef = useCallback((nextCallback) => {
    if (nextCallback !== callbackRef.current && typeof nextCallback === 'function') {
      callbackRef.current = nextCallback;
    }
  }, [callbackRef]);

  return [callbackRef, setCallbackRef];
};

export default useCallbackRef;
