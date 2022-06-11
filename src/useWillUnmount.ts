import { useEffect } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import { Noop } from './shared/types'

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
const useWillUnmount = <T extends (...args: any[]) => void = Noop>(callback?: T) => {
  const [handler, setHandler] = useHandlerSetterRef<T>(callback)

  useEffect(() => () => {
    if (handler && handler.current && typeof handler.current === 'function') {
      handler.current()
    }
  }, [])

  return setHandler
}

export default useWillUnmount
