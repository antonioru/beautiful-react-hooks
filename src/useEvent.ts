import { RefObject, useEffect } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import safeHasOwnProperty from './shared/safeHasOwnProperty'

/**
 * Accepts the reference to an HTML Element and an event name then performs the necessary operations to listen to the event
 * when fired from that HTML Element.
 */
const useEvent = <TEvent extends Event, TElement extends HTMLElement = HTMLElement>
  (ref: RefObject<TElement>, eventName: string, options?: AddEventListenerOptions) => {
  const [handler, setHandler] = createHandlerSetter<TEvent>()

  if (!!ref && !safeHasOwnProperty(ref, 'current')) {
    throw new Error('Unable to assign any scroll event to the given ref')
  }

  useEffect(() => {
    const cb: EventListenerOrEventListenerObject = (event: TEvent) => {
      if (handler.current) {
        handler.current(event)
      }
    }

    if (ref.current && ref.current.addEventListener && handler.current) {
      ref.current.addEventListener(eventName, cb, options)
    }

    return () => {
      if (ref.current && ref.current.addEventListener && handler.current) {
        ref.current.removeEventListener(eventName, cb, options)
      }
    }
  }, [eventName, ref.current, options])

  return setHandler
}

export default useEvent
