import isSamePosition from '../dist/shared/isSamePosition'
import { positionMock } from './mocks/GeoLocationApi.mock'
import assertFunction from './utils/assertFunction'

describe('isSamePosition utility', () => {
  assertFunction(isSamePosition)

  it('should return false if nothing is provided', () => {
    const result = isSamePosition()

    expect(result).to.be.false
  })

  it('should return false if invalid objects are provided', () => {
    expect(isSamePosition(null, {})).to.be.false
    expect(isSamePosition(null, null)).to.be.false
    expect(isSamePosition(positionMock, { current: false })).to.be.false
  })

  it('should return false if the provided objects have different timestamp', () => {
    expect(isSamePosition(positionMock, { ...positionMock, timestamp: 200 })).to.be.false
  })

  it('should return false if the provided objects are different', () => {
    const positionMock2 = { ...positionMock }
    positionMock2.coords = { ...positionMock.coords }
    positionMock2.coords.altitudeAccuracy = 60

    expect(isSamePosition(positionMock, positionMock2)).to.be.false
  })

  it('should return true if the provided objects are equal', () => {
    const positionMock2 = { ...positionMock }

    expect(isSamePosition(positionMock, positionMock2)).to.be.true
  })
})
