import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import safelyParseJson from './safelyParseJson'
import isClient from './isClient'
import isAPISupported from './isAPISupported'
import isDevelopment from './isDevelopment'

/**
 * An utility to quickly create hooks to access both Session Storage and Local Storage
 */
const createStorageHook = (type: 'session' | 'local') => {
  const storageName = `${type}Storage`

  if (isClient && !isAPISupported(storageName)) {
    // eslint-disable-next-line no-console
    console.warn(`${storageName} is not supported`)
  }

  /**
   * the hook
   */
  return function useStorageCreatedHook<T>(storageKey: string, defaultValue?: any): [T, Dispatch<SetStateAction<T>>] {
    if (!isClient) {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.warn(`Please be aware that ${storageName} could not be available during SSR`)
      }
      return [JSON.stringify(defaultValue) as unknown as T, () => undefined]
    }

    const storage = (window as any)[storageName]
    const [value, setValue] = useState<T>(
      safelyParseJson(storage.getItem(storageKey) || JSON.stringify(defaultValue)),
    )

    useEffect(() => {
      storage.setItem(storageKey, JSON.stringify(value))
    }, [storageKey, value])

    return [value, setValue]
  }
}

export default createStorageHook
