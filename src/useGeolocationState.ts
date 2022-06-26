import { useCallback, useEffect, useState } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import useGeolocationEvents from './useGeolocationEvents'
import { SomeCallback, BRHGeolocationPosition, BRHGeolocationPositionError } from './shared/types'
import { geoStandardOptions, isSamePosition, makePositionObj } from './shared/geolocationUtils'

export type GeolocationState = {
  readonly isSupported: boolean,
  readonly isRetrieving: boolean,
  readonly position: BRHGeolocationPosition,
}

/**
 * Returns a frozen object containing the `position` object, the `isSupported` boolean flag, reporting whether the
 * geolocation API is supported or not and the `isRetrieving` boolean flag reporting whether the hook is fetching the
 * current position.
 * The position is retrieved by using the
 * [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API),
 * when supported.<br/><br />
 * It possibly accepts an object of [geolocation options]
 * (https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) to be used as parameter when using the
 * `Geolocation.getCurrentPosition()` method.
 */
const useGeolocationState = (options: PositionOptions = geoStandardOptions) => {
  const [isRetrieving, setRetrieving] = useState<boolean>(false)
  const [position, setPosition] = useState<BRHGeolocationPosition>(null)
  const { isSupported, onChange, onError: setOnGeolocationEventsErrorRef } = useGeolocationEvents(options)
  const [onCurrentPositionErrorRef, setOnCurrentPositionErrorRef] = createHandlerSetter<BRHGeolocationPositionError>()

  const savePosition = useCallback(() => {
    if (position === null) {
      setRetrieving(true)
      navigator.geolocation.getCurrentPosition((nextPosition: GeolocationPosition) => {
        if (!isSamePosition(position, nextPosition)) {
          setPosition(makePositionObj(nextPosition))
          setRetrieving(false)
        }
      }, (err: BRHGeolocationPositionError) => {
        if (onCurrentPositionErrorRef.current) {
          onCurrentPositionErrorRef.current(err)
        }
      })
    }
  }, [position])

  useEffect(savePosition, [position])
  onChange(savePosition)

  const onError = (callback: SomeCallback<BRHGeolocationPositionError, void>) => {
    setOnCurrentPositionErrorRef(callback)
    setOnGeolocationEventsErrorRef(callback)
  }

  return Object.freeze({
    onError,
    isSupported,
    isRetrieving,
    position,
  })
}

export default useGeolocationState
