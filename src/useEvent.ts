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

  if (ref && !safeHasOwnProperty(ref, 'current')) {
    throw new Error('current attribute does not exist on ref')
  }

  useEffect(() => {
    // ensure that "current" in this scope does not change with ref
    const element=ref.current;

    const cb: EventListenerOrEventListenerObject = (event: TEvent) => {
      handler.current?.(event)
    }

    if (element && handler.current) {
      element.addEventListener(eventName, cb, options)
    }

    return () => {
      element.removeEventListener(eventName,cb)
    }
  }, [eventName, ref.current, options])

  return setHandler
}

export default useEvent
