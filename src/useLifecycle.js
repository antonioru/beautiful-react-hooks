import useDidMount from './useDidMount';
import useWillUnmount from './useWillUnmount';

/**
 * Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
 * It is intended as a shortcut to those hooks.
 */
const useLifecycle = (mount, unmount) => {
  const onDidMount = useDidMount(mount);
  const onWillUnmount = useWillUnmount(unmount);

  return { onDidMount, onWillUnmount };
};

export default useLifecycle;
