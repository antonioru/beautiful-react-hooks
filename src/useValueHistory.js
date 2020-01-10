import { useRef, useEffect } from 'react';

/**
 * Accepts a variable (possibly a prop or a state) and returns its history (changes through updates).
 */
const useValueHistory = (value) => {
  const history = useRef([]);

  // quite simple
  useEffect(() => {
    history.current.push(value);
  }, [value]);

  return history.current;
};

export default useValueHistory;
