import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a function that accepts a callback to be performed when the component will unmount.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onUnmount = useWillUnmount();
 *
 *   onUnmount(() => console.log('Component will unmount'));
 *
 *   return (<div />)
 * }
 * ```
 */
const useWillUnmount = () => {
  const [onUnmountHandler, setOnUnmount] = useCallbackRef();

  useEffect(() => () => {
    if (onUnmountHandler.current) {
      onUnmountHandler.current();
    }
  }, []);

  return setOnUnmount;
};

export default useWillUnmount;
