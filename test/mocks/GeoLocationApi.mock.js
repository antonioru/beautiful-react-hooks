export const watchPositionSpy = sinon.spy()
export const getCurrentPosition = sinon.spy()

export const positionMock = {
  timestamp: 1,
  coords: {
    latitude: 1,
    longitude: 1,
    altitude: 1,
    accuracy: 1,
    altitudeAccuracy: 10,
    heading: 10,
    speed: 0
  }
}

const GeoLocationApiMock = {
  listeners: {},
  getCurrentPosition(fn) {
    this.listeners.gcp = fn
    this.listeners.gcp(positionMock)
    getCurrentPosition(positionMock)
  },
  watchPosition(success, error, options) {
    watchPositionSpy(options)

    this.listeners.s = success
    this.listeners.e = error
  },
  clearWatch() {
    this.listeners = {}
  }
}

export default GeoLocationApiMock

