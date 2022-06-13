import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useGeolocationEvents from '../dist/useGeolocationEvents'
import GeoLocationApiMock, { watchPositionSpy } from './mocks/GeoLocationApi.mock'
import assertHook from './utils/assertHook'

describe('useGeolocationEvents', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApiMock
  })

  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
    sinon.reset()
  })

  after(() => {
    delete window.navigator.geolocation
  })

  assertHook(useGeolocationEvents)

  it('should return an object of geolocation-related callback setters', () => {
    const { result } = renderHook(() => useGeolocationEvents())

    expect(result.current).to.be.an('object').that.has.all.deep.keys('isSupported', 'onChange', 'onError')
    expect(result.current).to.be.frozen
  })

  it('should perform the onChange callback when geolocation changes', () => {
    const onChangeSpy = sinon.spy()
    const onErrorSpy = sinon.spy()

    const TestComponent = () => {
      const { onChange, onError } = useGeolocationEvents()

      onChange(onChangeSpy)
      onError(onErrorSpy)

      return <div />
    }

    render(<TestComponent />)

    GeoLocationApiMock.listeners.s()
    GeoLocationApiMock.listeners.e()

    expect(onChangeSpy.called).to.be.true
  })

  it('should accept an options object to be used as a parameter when calling watchPosition', () => {
    const optionsMock = { foo: 'bar' }

    const TestComponent = () => {
      const { isSupported } = useGeolocationEvents(optionsMock)

      return <div>{isSupported}</div>
    }

    render(<TestComponent />)

    GeoLocationApiMock.listeners.s()
    GeoLocationApiMock.listeners.e()

    expect(watchPositionSpy.called).to.be.true
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0]

    expect(lastOptions).to.equal(optionsMock)
  })
})
