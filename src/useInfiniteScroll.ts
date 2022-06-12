import { RefObject, useCallback } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'
import useEvent from './useEvent'

/**
 * Accepts an HTML Element ref, then returns a function that allows you to handle the infinite
 * scroll for that specific element.
 */
const useInfiniteScroll = <T extends HTMLElement>(ref: RefObject<T>, delay = 250) => {
  const onScroll = useEvent(ref, 'scroll')
  const [onScrollEnd, setOnScrollEnd] = createHandlerSetter<() => void>()

  if (ref && !safeHasOwnProperty(ref, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any scroll event to the given ref')
  }

  const handleScroll = useCallback(({ target }: Event) => {
    const el = target as HTMLDivElement
    if (el) {
      const isBottom = el.scrollHeight - el.scrollTop === el.clientHeight
      if (isBottom && onScrollEnd.current && typeof onScrollEnd.current === 'function') {
        setTimeout(onScrollEnd.current, delay)
      }
    }
  }, [])

  onScroll(handleScroll)

  return setOnScrollEnd
}

export default useInfiniteScroll
