import { useEffect, useRef } from 'react'

import isFunction from './shared/isFunction'
import { GenericFunction } from './shared/types'
import createHandlerSetter from './factory/createHandlerSetter'

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
const useWillUnmount = <TCallback extends GenericFunction>(callback?: TCallback) => {
  const mountRef = useRef(false)
  const [handler, setHandler] = createHandlerSetter<void>(callback)

  useEffect(() => {
    mountRef.current = true

    return () => {
      if (isFunction(handler?.current) && mountRef.current) {
        handler.current()
      }
    }
  }, [])

  return setHandler
}

export default useWillUnmount
