import { BRHGeolocationPosition } from './types'

export const geoStandardOptions: PositionOptions = Object.freeze({
  enableHighAccuracy: false,
  timeout: 0xFFFFFFFF,
  maximumAge: 0,
})

/**
 * Checks if two position are equals
 */
export const isSamePosition = (current: BRHGeolocationPosition, next: BRHGeolocationPosition): boolean => {
  if (!current || !next || !next.coords) return false
  if (current.timestamp && next.timestamp && current.timestamp !== next.timestamp) return false

  return (
    (current.coords.latitude === next.coords.latitude)
    && (current.coords.longitude === next.coords.longitude)
    && (current.coords.altitude === next.coords.altitude)
    && (current.coords.accuracy === next.coords.accuracy)
    && (current.coords.altitudeAccuracy === next.coords.altitudeAccuracy)
    && (current.coords.heading === next.coords.heading)
    && (current.coords.speed === next.coords.speed)
  )
}

/**
 * Given a position object returns only its properties
 */
export const makePositionObj = (position: BRHGeolocationPosition): BRHGeolocationPosition | null => (!position ? null : ({
  timestamp: position.timestamp,
  coords: {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    altitude: position.coords.altitude,
    accuracy: position.coords.accuracy,
    altitudeAccuracy: position.coords.altitudeAccuracy,
    heading: position.coords.heading,
    speed: position.coords.speed,
  },
}))
