import { useEffect, useState } from 'react'
import isClient from './shared/isClient'
import isAPISupported from './shared/isAPISupported'
import warnOnce from './shared/warnOnce'

const errorMessage = 'matchMedia is not supported, this could happen both because window.matchMedia is not supported by'
  + ' your current browser or you\'re using the useMediaQuery hook whilst server side rendering.'

/**
 * Accepts a media query string then uses the
 * [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
 * matches with the current document.<br />
 * It also monitor the document changes to detect when it matches or stops matching the media query.<br />
 * Returns the validity state of the given media query.
 *
 */
const useMediaQuery = (mediaQuery: string) => {
  if (!isClient || !isAPISupported('matchMedia')) {
    warnOnce(errorMessage)
    return false
  }

  const [isVerified, setIsVerified] = useState(!!window.matchMedia(mediaQuery).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler)
    }

    documentChangeHandler()
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler)
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler)
      }
    }
  }, [mediaQuery])

  return isVerified
}

export default useMediaQuery
