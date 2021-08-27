import useDidMount from './useDidMount'
import useWillUnmount from './useWillUnmount'
import { Noop } from './shared/types'

/**
 * Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
 * It is intended as a shortcut to those hooks.
 */
const useLifecycle = <M extends (...args: any[]) => any = Noop, U extends (...args: any[]) => any = Noop>(mount?: M, unmount?: U) => {
  const onDidMount = useDidMount<M>(mount)
  const onWillUnmount = useWillUnmount<U>(unmount)

  return { onDidMount, onWillUnmount }
}

export default useLifecycle
