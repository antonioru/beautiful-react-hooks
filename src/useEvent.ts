import { type RefObject, useEffect } from 'react'
import createHandlerSetter from './factory/createHandlerSetter.ts'
import safeHasOwnProperty from './shared/safeHasOwnProperty.ts'

/**
 * Accepts the reference to an HTML Element and an event name then performs the necessary operations to listen to the event
 * when fired from that HTML Element.
 */
const useEvent = <TEvent extends Event, TElement extends HTMLElement = HTMLElement>
  (target: RefObject<TElement>, eventName: string, options?: AddEventListenerOptions) => {
  const [handler, setHandler] = createHandlerSetter<TEvent>()

  if (!!target && !safeHasOwnProperty(target, 'current')) {
    throw new Error('Unable to assign any scroll event to the given ref')
  }

  useEffect(() => {
    const element = target.current
    const cb: EventListenerOrEventListenerObject = (event: TEvent) => {
      if (handler.current) {
        handler.current(event)
      }
    }

    if (element?.addEventListener && handler.current) {
      element.addEventListener(eventName, cb, options)
    }

    return () => {
      if (element?.removeEventListener) {
        element.removeEventListener(eventName, cb, options)
      }
    }
  }, [eventName, target.current, options])

  return setHandler
}

export default useEvent
