import { cleanup, renderHook } from '@testing-library/react-hooks'

import assertHook from './utils/assertHook'
import useMediaQuery from '../dist/useMediaQuery'
import mediaQueryListMock from './mocks/MatchMediaQueryList.mock'

describe('useMediaQuery', () => {
  beforeEach(() => {
    cleanup()
  })

  afterEach(() => {
    sinon.restore()
  })

  assertHook(useMediaQuery)

  it('should return a boolean value', () => {
    window.matchMedia = () => (mediaQueryListMock)
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'))

    expect(result.current).to.be.a('boolean')

    delete window.matchMedia
  })

  it('should warn when the window.matchMedia API is not supported', () => {
    delete window.matchMedia
    const warnSpy = sinon.spy(console, 'warn')
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'))

    expect(result.current).to.be.false
    expect(warnSpy.called).to.be.true
  })
})
