import { Dispatch, SetStateAction, useState } from 'react'
import safelyParseJson from '../shared/safelyParseJson'
import isClient from '../shared/isClient'
import isAPISupported from '../shared/isAPISupported'
import isDevelopment from '../shared/isDevelopment'
import noop from '../shared/noop'

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
  return function useStorageCreatedHook<TValue>(storageKey: string, defaultValue?: any): [TValue, Dispatch<SetStateAction<TValue>>] {
    if (!isClient) {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.warn(`Please be aware that ${storageName} could not be available during SSR`)
      }
      return [JSON.stringify(defaultValue) as unknown as TValue, noop]
    }

    const storage = (window as any)[storageName]
    const [storedValue, setStoredValue] = useState<TValue>(
      () => {
        try {
          return safelyParseJson(storage.getItem(storageKey) || JSON.stringify(defaultValue))
        } catch (e) {
          return safelyParseJson(JSON.stringify(defaultValue))
        }
      },
    )

    const setValue = (value: TValue | ((previousValue: TValue) => TValue)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        storage.setItem(storageKey, JSON.stringify(valueToStore))
        setStoredValue(valueToStore)
      // eslint-disable-next-line no-empty
      } catch (error) {}
    }

    return [storedValue, setValue]
  }
}

export default createStorageHook
