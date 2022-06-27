import { useCallback, useState } from 'react'
import safelyParseJson from '../shared/safelyParseJson'
import isClient from '../shared/isClient'
import isAPISupported from '../shared/isAPISupported'
import isDevelopment from '../shared/isDevelopment'
import noop from '../shared/noop'

/**
 * An utility to quickly create hooks to access both Session Storage and Local Storage
 */
const createStorageHook = (type: 'session' | 'local') => {
  type SetValue<TValue> = (value: TValue | ((previousValue: TValue) => TValue)) => void
  const storageName: `${typeof type}Storage` = `${type}Storage`

  if (isClient && !isAPISupported(storageName)) {
    // eslint-disable-next-line no-console
    console.warn(`${storageName} is not supported`)
  }

  /**
   * the hook
   */
  return function useStorageCreatedHook<TValue>(
    storageKey: string,
    defaultValue?: any,
  ): [TValue, SetValue<TValue>] {
    if (!isClient) {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.warn(`Please be aware that ${storageName} could not be available during SSR`)
      }
      return [JSON.stringify(defaultValue) as unknown as TValue, noop]
    }
    const storage = (window)[storageName]

    const safelySetStorage = useCallback((valueToStore: string) => {
      try {
        storage.setItem(storageKey, valueToStore)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }, [storage, storageKey])

    const [storedValue, setStoredValue] = useState<TValue>(
      () => {
        let valueToStore: string
        try {
          valueToStore = storage.getItem(storageKey) || JSON.stringify(defaultValue)
        } catch (e) {
          valueToStore = JSON.stringify(defaultValue)
        }

        safelySetStorage(valueToStore)
        return safelyParseJson(valueToStore)
      },
    )

    const setValue: SetValue<TValue> = useCallback((value) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      safelySetStorage(JSON.stringify(valueToStore))
      setStoredValue(valueToStore)
    }, [safelySetStorage, storedValue])

    return [storedValue, setValue]
  }
}

export default createStorageHook
