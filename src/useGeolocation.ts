import useGeolocationState, { type UseGeolocationStateResult } from './useGeolocationState'
import useGeolocationEvents, { type UseGeolocationEventsResult } from './useGeolocationEvents'
import { geoStandardOptions } from './shared/geolocationUtils'

/**
 * Returns an array where the first item is the geolocation state from the `useGeolocationState` hook and the
 * second one is the object of callback setters from the `useGeolocationEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useGeolocation = (options: PositionOptions = geoStandardOptions) => {
  const state = useGeolocationState(options)
  const events = useGeolocationEvents(options)

  return [state, events] as [UseGeolocationStateResult, UseGeolocationEventsResult]
}

export default useGeolocation
