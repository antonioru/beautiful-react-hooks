import { useCallback } from 'react'
import useMediaQuery from './useMediaQuery.ts'
import useUpdateEffect from './useUpdateEffect.ts'
import useLocalStorage from './useLocalStorage.ts'
import noop from './shared/noop.ts'
import isClient from './shared/isClient.ts'
import isDevelopment from './shared/isDevelopment.ts'
import warnOnce from './shared/warnOnce.ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'
export const LOCAL_STORAGE_KEY = 'beautiful-react-hooks-is-dark-mode'

const useDarkMode = (defaultValue?: boolean, localStorageKey: string = LOCAL_STORAGE_KEY) => {
  if (!isClient) {
    if (!isDevelopment) {
      warnOnce('Please be aware that useDarkMode hook could not be available during SSR')
    }

    return Object.freeze<UseDarkModeReturn>({
      toggle: noop,
      enable: noop,
      disable: noop,
      isDarkMode: defaultValue ?? false
    })
  }

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false
  )

  useUpdateEffect(() => {
    setIsDarkMode(isDarkOS)
  }, [isDarkOS])

  const enable = useCallback(() => {
    setIsDarkMode(true)
  }, [])

  const disable = useCallback(() => {
    setIsDarkMode(false)
  }, [])

  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [setIsDarkMode])

  return Object.freeze<UseDarkModeReturn>({
    toggle,
    enable,
    disable,
    isDarkMode: isDarkMode ?? false
  })
}

export interface UseDarkModeReturn {
  isDarkMode: boolean
  toggle: () => void
  enable: () => void
  disable: () => void
}

export default useDarkMode
