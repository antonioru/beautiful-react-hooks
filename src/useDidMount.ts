import { useEffect } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import { CallbackSetter, Noop } from './shared/types'

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = <T extends (...args: any[]) => any = Noop>(callback?: T): CallbackSetter<T> => {
  const [handler, setHandler] = useHandlerSetterRef<T>(callback)

  useEffect(() => {
    if (handler && handler.current && typeof handler.current === 'function') {
      handler.current()
    }
  }, [])

  return setHandler
}

export default useDidMount
