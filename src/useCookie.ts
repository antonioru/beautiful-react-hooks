import { useState, useEffect } from 'react'

import noop from './shared/noop'
import isClient from './shared/isClient'
import isDevelopment from './shared/isDevelopment'
import isAPISupported from './shared/isAPISupported'
import createHandlerSetter from './factory/createHandlerSetter'

import { BRHGeolocationPositionError } from './shared/types'

export enum ECookieSameSite {
  STRICT = 'strict',
  LAX = 'lax',
  NONE = 'none',
}

interface ICookieStoreDeleteOptions {
  name?: string;
  domain?: string;
  path?: string;
}

interface ICookieInit extends ICookieStoreDeleteOptions {
  sameSite?: ECookieSameSite;
}

interface ICookieInitWithNameAndValue extends ICookieInit {
  name?: string;
  value?: string;
}

export interface IOptions extends ICookieInit {
  defaultValue?: string;
}

interface ICookieStore {
  get: (key: string) => Promise<ICookieInitWithNameAndValue>;
  set: (options: ICookieInitWithNameAndValue) => Promise<void>;
  delete: (options: ICookieStoreDeleteOptions) => Promise<void>;
}

const useCookie = (key: string, options?: IOptions) => {
  if (!isClient) {
    if (!isDevelopment) {
      // eslint-disable-next-line no-console
      return console.warn(
        'Please be aware that cookieStore could not be available during SSR',
      )
    }

    return Object.freeze({
      onError: noop,
      updateCookie: noop,
      deleteCookie: noop,
      cookieValue: options?.defaultValue,
    })
  }

  if (!isAPISupported('cookieStore')) {
    // eslint-disable-next-line no-console
    console.warn(
      "The current device does not support the 'cookieStore' API, you should avoid using useCookie",
    )

    return Object.freeze({
      onError: noop,
      updateCookie: noop,
      deleteCookie: noop,
      cookieValue: options?.defaultValue,
    })
  }

  const [cookieValue, setCookieValue] = useState<string>()
  const [onErrorRef, setOnErrorRef] = createHandlerSetter<BRHGeolocationPositionError>()

  const cookieStoreObject = (window as any).cookieStore as ICookieStore

  const onError = (err: BRHGeolocationPositionError) => {
    if (onErrorRef.current) {
      onErrorRef.current(err)
    }
  }

  useEffect(() => {
    const getInitialValue = async () => {
      try {
        const getFunctionResult = await cookieStoreObject.get(key)

        if (getFunctionResult.value) {
          return setCookieValue(getFunctionResult.value)
        }

        await cookieStoreObject.set({
          name: key,
          value: options?.defaultValue,
          ...options,
        })
        return setCookieValue(options?.defaultValue)
      } catch (err) {
        return onError(err)
      }
    }

    getInitialValue()
  }, [])

  const updateCookie = (newValue: string) => cookieStoreObject
    .set({ name: key, value: newValue, ...options })
    .then(() => setCookieValue(newValue))
    .catch(onError)

  const deleteCookie = () => cookieStoreObject
    .delete({ name: key, ...options })
    .then(() => setCookieValue(undefined))
    .catch(onError)

  return Object.freeze({
    cookieValue,
    updateCookie,
    deleteCookie,
    onError: setOnErrorRef,
  })
}

export default useCookie
