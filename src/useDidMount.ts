import { useEffect, useRef } from 'react'

import isFunction from './shared/isFunction'
import { GenericFunction, Noop } from './shared/types'
import createHandlerSetter from './factory/createHandlerSetter'

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = <TCallback extends GenericFunction = Noop>(callback?: TCallback) => {
  const mountRef = useRef(false)
  const [handler, setHandler] = createHandlerSetter<void>(callback)

  useEffect(() => {
    if (isFunction(handler?.current) && !mountRef.current) {
      handler.current()
      mountRef.current = true
    }
  }, [])

  return setHandler
}

export default useDidMount
