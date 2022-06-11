import makePositionObject from '../dist/shared/makePositionObject'
import { positionMock } from './mocks/GeoLocationApi.mock'
import assertFunction from './utils/assertFunction'

describe('makePositionObject utility', () => {
  assertFunction(makePositionObject)

  it('should return null if nothing is provided', () => {
    const result = makePositionObject()

    expect(result).to.be.null
  })

  it('should remove unwanted property from a position object', () => {
    const pos = {
      ...positionMock,
      foo: 'bar',
      bar: 'foo'
    }

    const result = makePositionObject(pos)

    expect(result).to.be.deep.equal(positionMock)
  })
})
