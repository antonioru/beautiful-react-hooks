import useLifecycle from './useLifecycle';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 * Please note: the callback is not debounced, to improve performances check `useDebouncedCallback`;
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onWindowScroll = useWindowScroll();
 *
 *   onWindowScroll(() => console.log('Window is scrolling...'));
 *
 *   return (<div />)
 * }
 * ```
 */
const useWindowScroll = () => {
  const [handler, setHandler] = useCallbackRef();
  const { onMount, onUnmount } = useLifecycle();

  onMount(() => {
    window.addEventListener('scroll', handler.current);
  });

  onUnmount(() => {
    window.removeEventListener('scroll', handler.current);
  });

  return setHandler;
};

export default useWindowScroll;
