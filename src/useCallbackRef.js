import { useCallback, useRef } from 'react';

/**
 * Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
 * callback function and the second one is setter for that function.<br /><br />
 *
 * Although it looks quite similar to a [useState](https://reactjs.org/docs/hooks-reference.html#usestate), in this
 * case the setter just makes sure the given callback is indeed a new function.<br /><br />
 * **Setting a callback ref does not imply your component to re-render.**<br /><br />
 *
 * `useCallbackRef` is useful when abstracting other custom hooks to possibly implement callback setters.
 *
 * ### Usage in a custom hook:
 *
 * ```jsx harmony
 * const useSomething = () => {
 *   const [ callbackRef, setSomething ] = useCallbackRef();
 *
 *   useEffect(() => {
 *    something.addEventListener('change', () => {
 *      if(callbackRef.current) {
 *        callbackRef.current();
 *      }
 *    });
 *   }, []);
 *
 *   return setSomething;
 * }
 * ```
 *
 * ### Usage of useSomething:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onSomethingChange = useSomething();
 *
 *   onSomethingChange(() => {
 *     doSomething();
 *   });
 *
 *   return (
 *    <div>
 *      My component
 *    </div>
 *   );
 * }
 * ```
 */
const useCallbackRef = (initialValue) => {
  const callbackRef = useRef(initialValue);

  const setCallbackRef = useCallback((nextCallback, invokeImmediately = false) => {
    if (nextCallback !== callbackRef.current && typeof nextCallback === 'function') {
      callbackRef.current = nextCallback;
      if (invokeImmediately) callbackRef.current();
    }
  });

  return [callbackRef, setCallbackRef];
};

export default useCallbackRef;
