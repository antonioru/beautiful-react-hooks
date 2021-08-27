export type PositionSummary = {
  readonly timestamp: number,
  readonly coords: {
    readonly latitude: number,
    readonly longitude: number,
    readonly heading: number | null,
    readonly altitude: number | null,
    readonly speed: number | null,
    readonly accuracy: number,
    readonly altitudeAccuracy: number | null,
  }
}

/**
 * Given a position object returns only its properties
 */
const makePositionObj = (position: GeolocationPosition): PositionSummary | null => (!position ? null : ({
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

export default makePositionObj
