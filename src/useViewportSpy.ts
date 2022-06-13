import { RefObject, useLayoutEffect, useState } from 'react'
import isClient from './shared/isClient'
import isApiSupported from './shared/isAPISupported'
import isDevelopment from './shared/isDevelopment'

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0,
}

const errorMessage = 'IntersectionObserver is not supported, this could happen both because'
  + ' window.IntersectionObserver is not supported by'
  + ' your current browser or you\'re using the useViewportSpy hook whilst server side rendering.'
  + ' This message is displayed only in development mode'

/**
 * Uses the IntersectionObserverMock API to tell whether the given DOM Element (from useRef) is visible within the
 * viewport.
 */
const useViewportSpy = <TElement extends HTMLElement>(ref: RefObject<TElement>, options: IntersectionObserverInit = defaultOptions) => {
  if (!isClient || !isApiSupported('IntersectionObserver')) {
    if (isDevelopment) {
      // eslint-disable-next-line no-console
      console.warn(errorMessage)
    }
    return null
  }

  const [isVisible, setIsVisible] = useState<boolean>()

  useLayoutEffect(() => {
    const observer = new window.IntersectionObserver((entries) => entries.forEach((item) => {
      const nextValue = item.isIntersecting
      setIsVisible(nextValue)
    }), options)

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isVisible
}

export default useViewportSpy
