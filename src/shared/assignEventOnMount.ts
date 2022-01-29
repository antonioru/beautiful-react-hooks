import { MutableRefObject, RefObject, useEffect } from 'react'

const assignEventOnMount = <T extends HTMLElement, E extends Event = Event>
  (targetRef: RefObject<T>, handler: MutableRefObject<(e: E) => unknown>, eventName: string) => {
  useEffect(() => {
    const cb = (mouseEvent: E) => {
      if (handler && handler.current) {
        handler.current(mouseEvent)
      }
    }
    let target: T | Document

    if (targetRef !== null && !!targetRef.current) {
      target = targetRef.current
    }

    if (targetRef === null) {
      target = document
    }

    if (target && target.addEventListener) {
      target.addEventListener(eventName, cb)
    }

    return () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb)
      }
    }
  }, [])
}

export default assignEventOnMount
