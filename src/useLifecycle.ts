import useDidMount from './useDidMount'
import useWillUnmount from './useWillUnmount'
import { GenericFunction } from './shared/types'

/**
 * Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
 * It is intended as a shortcut to those hooks.
 */
const useLifecycle = <TMount extends GenericFunction = GenericFunction, TUnmount extends GenericFunction = GenericFunction>
  (mount?: TMount, unmount?: TUnmount) => {
  const onDidMount = useDidMount<TMount>(mount)
  const onWillUnmount = useWillUnmount<TUnmount>(unmount)

  return { onDidMount, onWillUnmount }
}

export default useLifecycle
