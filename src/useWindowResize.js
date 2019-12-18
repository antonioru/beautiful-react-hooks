import useLifecycle from './useLifecycle';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a function that accepts a callback to be performed when the window resizes.
 * Please note: the callback is not debounced, to improve performances check `useDebouncedCallback`;
 *
 * Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onWindowResize = useWindowResize();
 *
 *   onWindowResize(() => console.log('Window is resizing...'));
 *
 *   return (<div />)
 * }
 * ```
 */
const useWindowResize = () => {
  const [handler, setHandler] = useCallbackRef();
  const { onMount, onUnmount } = useLifecycle();

  onMount(() => {
    window.addEventListener('resize', handler.current);
  });

  onUnmount(() => {
    window.removeEventListener('resize', handler.current);
  });

  return setHandler;
};

export default useWindowResize;
