import { useEffect, useRef } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import { GenericFunction, Noop } from './shared/types'

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = <TCallback extends GenericFunction = Noop>(callback?: TCallback) => {
  const mountRef = useRef(false)
  const [handler, setHandler] = createHandlerSetter<void>(callback)

  useEffect(() => {
    if (handler && handler.current && typeof handler.current === 'function' && !mountRef.current) {
      handler.current()
      mountRef.current = true
    }
  }, [])

  return setHandler
}

export default useDidMount
