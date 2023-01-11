import { RefObject, useRef } from 'react'
import useEvent from './useEvent'
import isFunction from './shared/isFunction'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import createHandlerSetter from './factory/createHandlerSetter'

/**
 * Accepts an HTML Element ref, then returns a function that allows you to handle the infinite
 * scroll for that specific element.
 */
const useInfiniteScroll = <TElement extends HTMLElement>(ref: RefObject<TElement>, delay = 300) => {
  const onScroll = useEvent<UIEvent, TElement>(ref, 'scroll', { passive: true })
  const [onScrollEnd, setOnScrollEnd] = createHandlerSetter<void>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  if (ref && !safeHasOwnProperty(ref, 'current')) {
    throw new Error('Unable to assign any scroll event to the given ref')
  }

  onScroll((event: UIEvent) => {
    const { target } = event
    const el = target as HTMLDivElement
    if (el) {
      const isBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 1

      event.preventDefault()
      event.stopPropagation()

      if (isBottom && isFunction(onScrollEnd?.current)) {
        clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
          onScrollEnd.current()
          clearTimeout(timeoutRef.current)
        }, delay)
      }
    }
  })

  return setOnScrollEnd
}

export default useInfiniteScroll
