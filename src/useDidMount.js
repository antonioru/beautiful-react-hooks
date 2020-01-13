import { useEffect } from 'react';
import createHandlerSetter from './utils/createHandlerSetter';

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = (handler) => {
  const [onMountHandler, setOnMountHandler] = createHandlerSetter(handler);

  useEffect(() => {
    if (onMountHandler.current) {
      onMountHandler.current();
    }
  }, []);

  return setOnMountHandler;
};

export default useDidMount;
