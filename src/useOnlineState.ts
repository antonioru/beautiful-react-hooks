import { useState } from 'react'
import useGlobalEvent from './useGlobalEvent'

/**
 * Uses the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) to define
 * whether the browser is connected or not.
 */
const useOnlineState = (): boolean => {
  /**
   * If the browser doesn't support the `navigator.onLine` state, the hook will always return true
   * assuming the app is already online.
   */
  const isSupported = typeof window !== 'undefined' && 'ononline' in window
  const [isOnline, setIsOnline] = useState(isSupported ? navigator.onLine : true)
  const whenOnline = useGlobalEvent('online', { capture: true })
  const whenOffline = useGlobalEvent('offline', { capture: true })

  if (!isSupported) {
    // eslint-disable-next-line max-len, no-console
    console.warn('The current device does not support the \'online/offline\' events, you should avoid using useOnlineState')
    return isOnline
  }

  whenOnline(() => {
    setIsOnline(true)
  })

  whenOffline(() => {
    setIsOnline(false)
  })

  return isOnline
}

export default useOnlineState
