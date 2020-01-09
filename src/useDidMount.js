import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = (handler) => {
  const [onMountHandler, setOnMountHandler] = useCallbackRef(handler);

  useEffect(() => {
    if (onMountHandler.current) {
      onMountHandler.current();
    }
  }, []);

  return setOnMountHandler;
};

export default useDidMount;
