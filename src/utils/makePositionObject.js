/**
 * Given a position object returns only its properties
 */
const makePositionObj = (position) => (!position ? null : ({
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
}));

export default makePositionObj;
