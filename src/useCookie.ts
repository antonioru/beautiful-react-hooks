import { useCallback, useEffect, useState } from 'react'
import noop from './shared/noop'
import isClient from './shared/isClient'
import isDevelopment from './shared/isDevelopment'
import isAPISupported from './shared/isAPISupported'
import createHandlerSetter from './factory/createHandlerSetter'
import warnOnce from './shared/warnOnce'
import { type CallbackSetter } from './shared/types'

const useCookie = (key: string, options?: UseCookieOptions) => {
  const hookNotSupportedResponse = Object.freeze<UseCookieReturn>({
    onError: noop,
    updateCookie: noop,
    deleteCookie: noop,
    cookieValue: options?.defaultValue
  })

  if (!isClient) {
    if (!isDevelopment) {
      warnOnce('Please be aware that cookieStore could not be available during SSR')
    }

    return hookNotSupportedResponse
  }

  if (!isAPISupported('cookieStore')) {
    warnOnce('The current device does not support the \'cookieStore\' API, you should avoid using useCookie')

    return hookNotSupportedResponse
  }

  const [cookieValue, setCookieValue] = useState<string>()
  const [onErrorRef, setOnErrorRef] = createHandlerSetter<Error>()

  const cookieStoreObject = (window as any).cookieStore as CookieStore

  const onError = (err: Error) => {
    if (onErrorRef.current != null) {
      onErrorRef.current(err)
    }
  }

  useEffect(() => {
    const getInitialValue = async () => {
      try {
        const getFunctionResult = await cookieStoreObject.get(key)

        if (getFunctionResult?.value) {
          setCookieValue(getFunctionResult.value)
          return
        }

        await cookieStoreObject.set({
          name: key,
          value: options?.defaultValue,
          ...options
        })
        setCookieValue(options?.defaultValue)
        return
      } catch (err) {
        onError(err)
      }
    }

    getInitialValue().catch(onError)
  }, [])

  const updateCookie = useCallback(
    async (newValue: string) => {
      await cookieStoreObject
        .set({ name: key, value: newValue, ...options })
        .then(() => {
          setCookieValue(newValue)
        })
        .catch(onError)
    },
    []
  )

  const deleteCookie = useCallback(
    async () => {
      await cookieStoreObject
        .delete({ name: key, ...options })
        .then(() => {
          setCookieValue(undefined)
        })
        .catch(onError)
    },
    []
  )

  return Object.freeze<UseCookieReturn>({
    cookieValue,
    updateCookie,
    deleteCookie,
    onError: setOnErrorRef
  })
}

export enum CookieSameSite {
  STRICT = 'strict',
  LAX = 'lax',
  NONE = 'none',
}

interface CookieStoreDeleteOptions {
  name?: string
  domain?: string
  path?: string
}

interface CookieBase extends CookieStoreDeleteOptions {
  sameSite?: CookieSameSite
}

interface CookieBaseWithNameAndValue extends CookieBase {
  name?: string
  value?: string
}

export interface UseCookieOptions extends CookieBase {
  defaultValue?: string
}

interface CookieStore {
  get: (key: string) => Promise<CookieBaseWithNameAndValue>
  set: (options: CookieBaseWithNameAndValue) => Promise<void>
  delete: (options: CookieStoreDeleteOptions) => Promise<void>
}

export interface UseCookieReturn {
  cookieValue?: string
  updateCookie: (nextValue: string) => Promise<void>
  deleteCookie: () => Promise<void>
  onError: CallbackSetter<Error>
}

export default useCookie
