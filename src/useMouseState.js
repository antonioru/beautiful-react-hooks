import { useState } from 'react';
import useMouseEvents from './useMouseEvents';

const createStateObject = (event) => ({
  clientX: event.clientX,
  clientY: event.clientY,
  screenX: event.screenX,
  screenY: event.screenY,
});

/**
 * Returns the current state (position) of the mouse pointer.<br/>
 * It possibly accepts a DOM ref representing the mouse target.<br/>
 * If a target is not provided the state will be globally catched.
 *
 * ### Target ref usage:
 *
 * ```jsx harmony
 * const MouseReporter = () => {
 *    const ref = useRef();
 *    const mouseState = useMouseState(ref);
 *
 *    return (
 *      <div ref={ref} style={style}>
 *        Mouse over me to get the mouse position:
 *        {mouseState.pageX}, {mouseState.pageY}
 *      </div>
 *    );
 * }
 * ```
 * <br />
 *
 * ### Global events usage:
 *
 * ```jsx harmony
 * const MouseReporter = () => {
 *    const mouseState = useMouseState();
 *
 *    return (
 *      <div ref={ref} style={style}>
 *        Current mouse position:
 *        {mouseState.pageX}, {mouseState.pageY}
 *      </div>
 *    );
 * }
 * ```
 * ```
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
