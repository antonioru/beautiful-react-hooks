import { useEffect } from 'react';
import createHandlerSetter from './utils/createHandlerSetter';

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
const useWillUnmount = (handler) => {
  const [onUnmountHandler, setOnUnmount] = createHandlerSetter(handler);

  useEffect(() => () => {
    if (onUnmountHandler.current) {
      onUnmountHandler.current();
    }
  }, []);

  return setOnUnmount;
};

export default useWillUnmount;
