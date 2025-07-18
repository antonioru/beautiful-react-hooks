import { useEffect, useRef } from "react";
import isFunction from "./shared/isFunction.ts";
import { type GenericFunction } from "./shared/types.ts";
import createHandlerSetter from "./factory/createHandlerSetter.ts";

/**
 * Returns a callback setter for a callback to be performed when the component did unmount.
 */
const useUnmount = <TCallback extends GenericFunction>(
  callback?: TCallback
) => {
  const mountRef = useRef(false);
  const [handler, setHandler] = createHandlerSetter<undefined>(callback);

  useEffect(() => {
    mountRef.current = true;

    return () => {
      if (isFunction(handler?.current) && mountRef.current) {
        handler.current();
      }
    };
  }, []);

  return setHandler;
};

export default useUnmount;
