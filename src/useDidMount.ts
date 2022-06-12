import { useEffect, useRef } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import { CallbackSetter, Noop } from './shared/types'

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = <T extends (...args: any[]) => any = Noop>(callback?: T): CallbackSetter<T> => {
  const mountRef = useRef(false)
  const [handler, setHandler] = useHandlerSetterRef<T>(callback)

  useEffect(() => {
    if (handler && handler.current && typeof handler.current === 'function' && !mountRef.current) {
      handler.current()
      mountRef.current = true
    }
  }, [])

  return setHandler
}

export default useDidMount
