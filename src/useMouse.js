import useMouseHandler from './useMouseHandler';
import useMouseState from './useMouseState';

/**
 * Returns an array where the first item is the state of the mouse from `useMouseState` and the second item
 * is the object of callback setters from `useMouseHandler`.
 * It is intended as a shortcut to those hooks.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const { onMount, onUnmount } = useLifecycle();
 *
 *   onUnmount(() => console.log('Component will mount'));
 *   onUnmount(() => console.log('Component will unmount'));
 *
 *   return (<div />)
 * }
 * ```
 *
 * ### Shall `useMouse` handlers replace the standard mouse handler props?
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
  const handlers = useMouseHandler(ref);

  return [state, handlers];
};

export default useMouse;
