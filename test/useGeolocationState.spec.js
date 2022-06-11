import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import GeoLocationApi, { positionMock, watchPositionSpy } from './mocks/GeoLocationApi.mock'
import useGeolocationState from '../dist/useGeolocationState'
import assertHook from './utils/assertHook'

describe('useGeolocationState', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApi
  })

  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
    sinon.reset()
  })

  after(() => {
    delete window.navigator.geolocation
  })

  assertHook(useGeolocationState)

  it('should return a frozen object containing information about the current position', () => {
    const { result } = renderHook(() => useGeolocationState())

    expect(result.current).to.be.frozen
    expect(result.current).to.be.an('object').that.has.all.deep.keys('isSupported', 'isRetrieving', 'position')
    expect(result.current.position).to.deep.equal(positionMock)
  })

  it('should accept an options object to be used as a parameter when calling watchPosition', () => {
    const optionsMock = { foo: 'bar' }

    const TestComponent = () => {
      const { isSupported } = useGeolocationState(optionsMock)

      return <div>{isSupported}</div>
    }

    render(<TestComponent />)

    expect(watchPositionSpy.called).to.be.true
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0]

    expect(lastOptions).to.equal(optionsMock)
  })
})
