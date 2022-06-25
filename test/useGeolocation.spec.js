import { cleanup, renderHook } from '@testing-library/react-hooks'
import useGeolocation from '../dist/useGeolocation'
import GeoLocationApiMock, { watchPositionSpy } from './mocks/GeoLocationApi.mock'
import assertHook from './utils/assertHook'

describe('useGeolocation', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApiMock
  })

  beforeEach(() => cleanup())

  after(() => {
    delete window.navigator.geolocation
  })

  assertHook(useGeolocation)

  it('should return an array where the first item is a geolocation state and the second an object of setters', () => {
    const { result } = renderHook(() => useGeolocation())

    expect(result.current).to.be.an('array')
    expect(result.current.length).to.equal(2)
    expect(result.current[0]).to.be.a('object').that.has.all.deep.keys('isSupported', 'isRetrieving', 'onError', 'position')
    expect(result.current[1]).to.be.an('object').that.has.all.keys('isSupported', 'onChange', 'onError')
  })

  it('the provided options should be passed down to the other hooks', () => {
    const optionsMock = { enableHighAccuracy: true }
    renderHook(() => useGeolocation(optionsMock))

    GeoLocationApiMock.listeners.s()
    GeoLocationApiMock.listeners.e()

    expect(watchPositionSpy.called).to.be.true
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0]

    expect(lastOptions).to.equal(optionsMock)
  })
})
