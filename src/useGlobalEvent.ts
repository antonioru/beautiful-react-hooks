import { useEffect } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'

/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 */
const useGlobalEvent = <E extends Event>(eventName: keyof WindowEventMap, fn?: (event: E) => void, opts?: AddEventListenerOptions) => {
  const [handler, setHandler] = useHandlerSetterRef(fn)
  handler.current = fn

  useEffect(() => {
    const cb: EventListenerOrEventListenerObject = (event: E) => {
      if (handler.current) {
        handler.current(event)
      }
    }

    if (handler && eventName) {
      window.addEventListener(eventName, cb, opts)
    }

    return () => {
      if (eventName) {
        window.removeEventListener(eventName, cb, opts)
      }
    }
  }, [eventName, opts])

  return setHandler
}

export default useGlobalEvent
