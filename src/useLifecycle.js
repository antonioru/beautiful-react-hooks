import useOnMount from './useOnMount';
import useWillUnmount from './useWillUnmount';

/**
 * Returns an object wrapping lifecycle hooks such as `useOnMount` or `useWillUnmount`.
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
const useLifecycle = () => {
  const onMount = useOnMount();
  const onUnmount = useWillUnmount();

  return { onMount, onUnmount };
};

export default useLifecycle;
