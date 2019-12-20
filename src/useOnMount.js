import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a function that accepts a callback to be performed when the component did mount.
 *
 * Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onMount = useOnMount();
 *
 *   onMount(() => console.log('Component did mount'));
 *
 *   return (<div />)
 * }
 * ```
 */
const useOnMount = () => {
  const [onMountHandler, setOnMountHandler] = useCallbackRef();

  useEffect(() => {
    if (onMountHandler.current) {
      onMountHandler.current();
    }
  }, []);

  return setOnMountHandler;
};

export default useOnMount;
