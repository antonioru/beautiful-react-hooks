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
 */
const useMouse = (ref = null) => {
  const state = useMouseState(ref);
  const handlers = useMouseHandler(ref);

  return [state, handlers];
};

export default useMouse;
