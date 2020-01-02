import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a callback setter for a callback to be performed when the component did mount.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onDidMount = useDidMount();
 *
 *   onDidMount(() => console.log('Component did mount'));
 *
 *   return (<div />)
 * }
 * ```
 */
const useDidMount = () => {
  const [onMountHandler, setOnMountHandler] = useCallbackRef();

  useEffect(() => {
    if (onMountHandler.current) {
      onMountHandler.current();
    }
  }, []);

  return setOnMountHandler;
};

export default useDidMount;
