import { useState } from 'react';
import useTouchEvents from './useTouchEvents';

/**
 * Returns the current touches from the touch move event.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useTouchState = (ref = null) => {
  const [state, setState] = useState({ length: 0 });
  const { onTouchMove } = useTouchEvents(ref);

  onTouchMove((event) => {
    setState(event.touches);
  });

  return state;
};

export default useTouchState;
