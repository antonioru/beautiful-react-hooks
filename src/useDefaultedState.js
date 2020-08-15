import { useState } from 'react';

const maybeState = (state, defaultValue) => (state === null || state === undefined ? defaultValue : state);

/**
 * Returns a safe state by making sure the given value is not null or undefined
 */
const useDefaultedState = (defaultValue, initialState) => {
  const [state, setState] = useState(maybeState(initialState, defaultValue));

  const setStateSafe = (nextState) => setState(maybeState(nextState, defaultValue));

  return [maybeState(state, defaultValue), setStateSafe];
};

export default useDefaultedState;
