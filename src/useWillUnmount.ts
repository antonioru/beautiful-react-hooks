import { useEffect, useRef } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import { GenericFunction } from './shared/types'

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
const useWillUnmount = <TCallback extends GenericFunction>(callback?: TCallback) => {
  const mountRef = useRef(false)
  const [handler, setHandler] = createHandlerSetter<void>(callback)

  useEffect(() => {
    mountRef.current = true

    return () => {
      if (handler && handler.current && typeof handler.current === 'function' && mountRef.current) {
        handler.current()
      }
    }
  }, [])

  return setHandler
}

export default useWillUnmount
