import useGeolocationState from './useGeolocationState'
import useGeolocationEvents from './useGeolocationEvents'
import geolocationStandardOptions from './shared/geolocationStandardOptions'

/**
 * Returns an array where the first item is the geolocation state from the `useGeolocationState` hook and the
 * second one is the object of callback setters from the `useGeolocationEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useGeolocation = (options: PositionOptions = geolocationStandardOptions) => {
  const state = useGeolocationState(options)
  const events = useGeolocationEvents(options)

  return [state, events]
}

export default useGeolocation
