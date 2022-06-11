import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useViewportSpy from '../dist/useViewportSpy'
import IntersectionObserverMock from './mocks/IntersectionObserver.mock'
import assertHook from './utils/assertHook'

describe('useViewportSpy', () => {
  before(() => {
    window.IntersectionObserver = IntersectionObserverMock
  })

  beforeEach(() => cleanup())

  after(() => {
    delete window.IntersectionObserver
  })

  assertHook(useViewportSpy)

  it('should return a single boolean value', () => {
    const refMock = { current: document.createElement('div') }
    const { result } = renderHook(() => useViewportSpy(refMock))

    expect(result.current).to.be.a('boolean')
  })

  it('should spy on the viewport', () => {
    const refMock = { current: document.createElement('div') }
    const { result } = renderHook(() => useViewportSpy(refMock, { threshold: 0.2 }))

    act(() => {
      IntersectionObserverMock.simulateObservation()
    })

    expect(result.current).to.be.true
  })
})
