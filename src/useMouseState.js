import { useState } from 'react';
import useMouseEvents from './useMouseEvents';

const createStateObject = (event) => ({
  clientX: event.clientX,
  clientY: event.clientY,
  screenX: event.screenX,
  screenY: event.screenY,
});

/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useMouseState = (ref = null) => {
  const [state, setState] = useState({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 });
  const { onMouseMove } = useMouseEvents(ref);

  onMouseMove((event) => {
    const nextState = createStateObject(event);
    setState(nextState);
  });

  return state;
};

export default useMouseState;
