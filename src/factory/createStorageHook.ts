import { useCallback, useState } from 'react'
import safelyParseJson from '../shared/safelyParseJson.ts'
import isClient from '../shared/isClient.ts'
import isAPISupported from '../shared/isAPISupported.ts'
import isDevelopment from '../shared/isDevelopment.ts'
import noop from '../shared/noop.ts'
import warnOnce from '../shared/warnOnce.ts'

/**
 * A utility to quickly create hooks to access both Session Storage and Local Storage
 */
const createStorageHook = (type: 'session' | 'local') => {
  type SetValue<TValue> = (value: TValue | ((previousValue: TValue) => TValue)) => void
  const storageName: `${typeof type}Storage` = `${type}Storage`

  if (isClient && !isAPISupported(storageName)) {
    warnOnce(`${storageName} is not supported`)
  }

  /**
   * the hook
   */
  return function useStorageCreatedHook<TValue> (storageKey: string, defaultValue?: any): [TValue | null, SetValue<TValue>] {
    if (!isClient) {
      if (isDevelopment) {
        warnOnce(`Please be aware that ${storageName} could not be available during SSR`)
      }
      return [JSON.stringify(defaultValue) as unknown as TValue, noop]
    }
    const storage = (window)[storageName]

    const safelySetStorage = useCallback((valueToStore: string) => {
      try {
        storage.setItem(storageKey, valueToStore)
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }, [storage, storageKey])

    const [storedValue, setStoredValue] = useState<TValue | null>(
      () => {
        let valueToStore: string
        try {
          valueToStore = storage.getItem(storageKey) ?? JSON.stringify(defaultValue)
        } catch (e) {
          valueToStore = JSON.stringify(defaultValue)
        }

        safelySetStorage(valueToStore)
        return safelyParseJson(valueToStore)
      }
    )

    const setValue: SetValue<TValue> = useCallback(
      (value: TValue) => {
        setStoredValue((current: TValue) => {
          const valueToStore = value instanceof Function ? value(current) : value
          safelySetStorage(JSON.stringify(valueToStore))
          return valueToStore
        })
      },
      [safelySetStorage]
    )

    return [storedValue, setValue]
  }
}

export default createStorageHook
