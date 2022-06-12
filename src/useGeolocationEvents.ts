import { useEffect, useRef } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'
import geolocationStandardOptions from './shared/geolocationStandardOptions'
import { CallbackSetter } from './shared/types'

export type GeolocationEventsMap = {
  readonly isSupported: boolean,
  readonly onChange: CallbackSetter<PositionCallback>
  readonly onError: CallbackSetter<PositionErrorCallback>
}

/**
 * Returns a frozen object of callback setters to handle the geolocation events.<br/>
 * So far, the supported methods are: `onChange`, invoked when the position changes and `onError`, invoked when
 * an error occur while retrieving the position.<br/>
 * The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.
 */
const useGeolocationEvents = (options: PositionOptions = geolocationStandardOptions): GeolocationEventsMap => {
  const watchId = useRef<number>()
  const [onChangeRef, setOnChangeRef] = createHandlerSetter<PositionCallback>()
  const [onErrorRef, setOnErrorRef] = createHandlerSetter<PositionErrorCallback>()
  const isSupported: boolean = typeof window !== 'undefined' && 'geolocation' in window.navigator

  useEffect(() => {
    const onSuccess = (successEvent: GeolocationPosition) => {
      if (onChangeRef.current) {
        onChangeRef.current(successEvent)
      }
    }
    const onError = (err: GeolocationPositionError) => {
      if (onErrorRef.current) {
        onErrorRef.current(err)
      }
    }

    if (isSupported) {
      watchId.current = window.navigator.geolocation.watchPosition(onSuccess, onError, options)
    }

    return () => {
      if (isSupported) {
        window.navigator.geolocation.clearWatch(watchId.current)
      }
    }
  }, [])

  return !isSupported ? createCbSetterErrorProxy('The Geolocation API is not supported') : Object.freeze({
    isSupported,
    onChange: setOnChangeRef,
    onError: setOnErrorRef,
  })
}

export default useGeolocationEvents
