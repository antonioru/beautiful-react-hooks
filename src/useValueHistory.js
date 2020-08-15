import { useRef, useEffect } from 'react';

const distinctValues = (value, current, array) => array.indexOf(value) === current;

/**
 * Accepts a variable (possibly a prop or a state) and returns its history (changes through updates).
 */
const useValueHistory = (value, distinct = false) => {
  const history = useRef([]);

  // quite simple
  useEffect(() => {
    history.current.push(value);

    if (distinct) {
      history.current.filter(distinctValues);
    }
  }, [value]);

  return history.current;
};

export default useValueHistory;
