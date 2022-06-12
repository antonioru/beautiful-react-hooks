import { RefObject, useEffect } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'

/**
 * Accepts the reference to an HTML Element and an event name then performs the necessary operations to listen to the event
 * when fired from that HTML Element.
 */
const useEvent = <TElement extends HTMLElement, TEvent extends Event>
  (targetRef: RefObject<TElement>, eventName: string, options?: AddEventListenerOptions) => {
  const [handler, setHandler] = createHandlerSetter()

  if (!!targetRef && !safeHasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any scroll event to the given ref')
  }

  useEffect(() => {
    const cb: EventListenerOrEventListenerObject = (event: TEvent) => {
      if (handler.current) {
        handler.current(event)
      }
    }

    if (targetRef.current && targetRef.current.addEventListener && handler.current) {
      targetRef.current.addEventListener(eventName, cb, options)
    }

    return () => {
      if (targetRef.current && targetRef.current.addEventListener && handler.current) {
        targetRef.current.removeEventListener(eventName, cb, options)
      }
    }
  }, [eventName, targetRef.current, options])

  return setHandler
}

export default useEvent
