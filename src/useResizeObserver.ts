import { RefObject, useEffect, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import isApiSupported from './shared/isAPISupported'
import isClient from './shared/isClient'

// eslint-disable-next-line max-len
const errorMessage = 'ResizeObserver is not supported, this could happen both because window.ResizeObserver is not supported by your current browser or you\'re using the useResizeObserver hook whilst server side rendering.'

export type DOMRectValues = Pick<DOMRectReadOnly, 'bottom' | 'height' | 'left' | 'right' | 'top' | 'width'>

/**
 * Uses the ResizeObserver API to observe changes within the given HTML Element DOM Rect.
 * @param elementRef
 * @param debounceTimeout
 * @returns {undefined}
 */
const useResizeObserver = <T extends HTMLElement>(elementRef: RefObject<T>, debounceTimeout: number = 100): DOMRectValues | undefined => {
  const isSupported = isApiSupported('ResizeObserver')
  const observerRef = useRef<ResizeObserver | null>(null)
  const [DOMRect, setDOMRect] = useState<DOMRectValues>()

  if (isClient && !isSupported) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage)
  }

  // creates the observer reference on mount
  useEffect(() => {
    if (isSupported) {
      const fn = debounce((entries) => {
        const { bottom, height, left, right, top, width } = entries[0].contentRect

        setDOMRect({ bottom, height, left, right, top, width })
      }, debounceTimeout)

      observerRef.current = new ResizeObserver(fn)

      return () => {
        fn.cancel()
        if (observerRef && observerRef.current && observerRef.current.disconnect && typeof observerRef.current.disconnect === 'function') {
          observerRef.current.disconnect()
        }
      }
    }

    return () => {
    }
  }, [])

  // observes on the provided element ref
  useEffect(() => {
    if (isSupported && elementRef.current) {
      if (observerRef && observerRef.current && observerRef.current.observe && typeof observerRef.current.observe === 'function') {
        observerRef.current.observe(elementRef.current)
      }
    }
  }, [elementRef.current])

  return DOMRect
}

export default useResizeObserver
