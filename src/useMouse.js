import useMouseEvents from './useMouseEvents';
import useMouseState from './useMouseState';

/**
 * Returns an array where the first item is the mouse state from the `useMouseState` hook and the second item
 * is the object of callback setters from the `useMouseEvents` hook.
 * It is intended as a shortcut to those hooks.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const [mouseState, { onMouseMove }] = useMouseEvents();
 *
 *   // demo purposes only, in real-life scenario use the onMouseMove prop instead
 *   onMouseMove((event) => {
 *     trackMousePosition(event);
 *   });
 *
 *   return (
 *     <div>
 *       The current mouse coordinates within this div are:
 *       <p>x:{mouseState.clientX} y:{mouseState.clientY}</p>
 *     </div>
 *   );
 * }
 * ```
 *
 * ### Shall the `useMouse` handlers like `onMouseMove` replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouse is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouse handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 * ```jsx harmony
 * const MyComponent = (props) => {
 *  const { myCallback } = props;
 *
 *  return <div onMouseDown={myCallback} />
 * }
 * ```
 *
 * **Please keep doing it**!
 *
 */
const useMouse = (ref = null) => {
  const state = useMouseState(ref);
  const events = useMouseEvents(ref);

  return [state, events];
};

export default useMouse;
