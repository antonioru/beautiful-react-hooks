import { RefObject, useEffect } from 'react'

import isClient from './shared/isClient'
import isApiSupported from './shared/isAPISupported'
import warnOnce from './shared/warnOnce'

// eslint-disable-next-line max-len
const errorMessage = 'MutationObserver is not supported, this could happen both because window. MutationObserver is not supported by your current browser or you\'re using the useMutationObserver hook whilst server side rendering.'

const defaultOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
}

const useMutationObserver = <TElement extends HTMLElement>(
  ref: RefObject<TElement>,
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions,
) => {
  const isSupported = isClient && isApiSupported('MutationObserver')

  if (!isSupported) {
    warnOnce(errorMessage)
    return
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback)
      observer.observe(ref.current, options)

      return () => observer.disconnect()
    }
  }, [callback, options])
}

export default useMutationObserver
