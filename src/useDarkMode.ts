import { useCallback } from 'react'

import useMediaQuery from './useMediaQuery'
import useUpdateEffect from './useUpdateEffect'
import useLocalStorage from './useLocalStorage'

import noop from './shared/noop'
import isClient from './shared/isClient'
import isDevelopment from './shared/isDevelopment'
import warnOnce from './shared/warnOnce'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'
export const LOCAL_STORAGE_KEY = 'beautiful-react-hooks-is-dark-mode'

const useDarkMode = (
  defaultValue?: boolean,
  localStorageKey: string = LOCAL_STORAGE_KEY,
) => {
  if (!isClient) {
    if (!isDevelopment) {
      warnOnce('Please be aware that useDarkMode hook could not be available during SSR')
    }

    return Object.freeze({
      toggle: noop,
      enable: noop,
      disable: noop,
      isDarkMode: defaultValue ?? false,
    })
  }

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
  )

  useUpdateEffect(() => {
    setIsDarkMode(isDarkOS)
  }, [isDarkOS])

  const enable = useCallback(() => setIsDarkMode(true), [])

  const disable = useCallback(() => setIsDarkMode(false), [])

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), [setIsDarkMode])

  return Object.freeze({
    toggle,
    enable,
    disable,
    isDarkMode,
  })
}

export default useDarkMode
