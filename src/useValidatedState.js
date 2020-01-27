import { useState, useCallback, useRef } from 'react';

/**
 * Returns a state that changes only if the next value pass its validator
 */
const useValidatedState = (validator, initialValue) => {
  const [state, setState] = useState(initialValue);
  const validation = useRef({ changed: false });

  const onChange = useCallback((nextValue) => {
    setState(nextValue);
    validation.current = { changed: true, valid: validator(nextValue) };
  }, [validator]);

  return [state, onChange, validation.current];
};

export default useValidatedState;
