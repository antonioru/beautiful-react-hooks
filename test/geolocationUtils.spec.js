import { geoStandardOptions, isSamePosition, makePositionObj } from '../dist/shared/geolocationUtils'
import { positionMock } from './mocks/GeoLocationApi.mock'
import assertFunction from './utils/assertFunction'

describe('geolocation utils', () => {
  assertFunction(isSamePosition)
  assertFunction(makePositionObj)

  it('geoStandardOptions should be a frozen object defining standard geolocation options', () => {
    expect(geoStandardOptions).to.be.an('object').that.has.all.deep.keys('enableHighAccuracy', 'timeout', 'maximumAge')
    expect(geoStandardOptions).to.be.frozen
  })

  it('isSamePosition should return false if nothing is provided', () => {
    const result = isSamePosition()

    expect(result).to.be.false
  })

  it('isSamePosition should return false if invalid objects are provided', () => {
    expect(isSamePosition(null, {})).to.be.false
    expect(isSamePosition(null, null)).to.be.false
    expect(isSamePosition(positionMock, { current: false })).to.be.false
  })

  it('isSamePosition should return false if the provided objects have different timestamp', () => {
    expect(isSamePosition(positionMock, { ...positionMock, timestamp: 200 })).to.be.false
  })

  it('isSamePosition should return false if the provided objects are different', () => {
    const positionMock2 = { ...positionMock }
    positionMock2.coords = { ...positionMock.coords }
    positionMock2.coords.altitudeAccuracy = 60

    expect(isSamePosition(positionMock, positionMock2)).to.be.false
  })

  it('isSamePosition should return true if the provided objects are equal', () => {
    const positionMock2 = { ...positionMock }

    expect(isSamePosition(positionMock, positionMock2)).to.be.true
  })

  it('makePositionObj should return null if nothing is provided', () => {
    const result = makePositionObj()

    expect(result).to.be.null
  })

  it('makePositionObj should remove unwanted property from a position object', () => {
    const pos = {
      ...positionMock, foo: 'bar', bar: 'foo'
    }

    const result = makePositionObj(pos)

    expect(result).to.be.deep.equal(positionMock)
  })
})
