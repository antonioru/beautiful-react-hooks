import { RefObject, useCallback, useEffect } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'

/**
 *
 */
const useInfiniteScroll = <T extends HTMLElement>(ref: RefObject<T>, delay = 250) => {
  const [onScrollEnd, setOnScrollEnd] = useHandlerSetterRef<() => void>()

  if (ref && !safeHasOwnProperty(ref, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any scroll event to the given ref')
  }

  const onDropdownScroll = useCallback(({ target }: Event) => {
    const el = target as HTMLDivElement
    if (el) {
      const isBottom = el.scrollHeight - el.scrollTop === el.clientHeight
      if (isBottom && onScrollEnd.current && typeof onScrollEnd.current === 'function') {
        setTimeout(onScrollEnd.current, delay)
      }
    }
  }, [])

  // infinite scroll
  useEffect(() => {
    let scrollingEl: Element | null

    if (ref.current) {
      scrollingEl = ref.current

      scrollingEl?.addEventListener('scroll', onDropdownScroll)
    }

    return () => {
      scrollingEl?.removeEventListener('scroll', onDropdownScroll)
    }
  }, [ref.current, onDropdownScroll])

  return setOnScrollEnd
}

export default useInfiniteScroll
