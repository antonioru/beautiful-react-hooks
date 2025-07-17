import { useEffect, useRef } from 'react'
import isFunction from './shared/isFunction.ts'
import { type GenericFunction, type Noop } from './shared/types.ts'
import createHandlerSetter from './factory/createHandlerSetter.ts'

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = <TCallback extends GenericFunction = Noop>(callback?: TCallback) => {
  const mountRef = useRef(false)
  const [handler, setHandler] = createHandlerSetter<undefined>(callback)

  useEffect(() => {
    if (isFunction(handler?.current) && !mountRef.current) {
      handler.current()
      mountRef.current = true
    }
  }, [])

  return setHandler
}

export default useDidMount
