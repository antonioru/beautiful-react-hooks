import { useEffect, useRef } from 'react';

/**
 * On each render returns the previous value of the given variable/constant.
 */
const usePrev = (value) => {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;

    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
};

export default usePrev;
