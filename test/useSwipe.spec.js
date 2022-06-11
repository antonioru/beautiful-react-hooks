import { cleanup, renderHook } from '@testing-library/react-hooks'
import useSwipe from '../dist/useSwipe'
import useHorizontalSwipe from '../dist/useHorizontalSwipe'
import useVerticalSwipe from '../dist/useVerticalSwipe'
import assertHook from './utils/assertHook'

describe('useSwipe', () => {
  beforeEach(() => cleanup())

  assertHook(useSwipe)

  it('should return the swipe state', () => {
    const { result } = renderHook(() => useSwipe())

    expect(result.current).to.be.an('object').that.has.all.keys('swiping', 'direction', 'alphaX', 'alphaY', 'count')
  })
})

describe('useHorizontalSwipe', () => {
  beforeEach(() => cleanup())

  it('should be a function', () => {
    expect(useHorizontalSwipe).to.be.a('function')
  })

  it('should return the swipe state', () => {
    const { result } = renderHook(() => useHorizontalSwipe())

    expect(result.current).to.be.an('object').that.has.all.keys('swiping', 'direction', 'alphaX', 'alphaY', 'count')
  })
})

describe('useVerticalSwipe', () => {
  beforeEach(() => cleanup())

  it('should be a function', () => {
    expect(useVerticalSwipe).to.be.a('function')
  })

  it('should return the swipe state', () => {
    const { result } = renderHook(() => useVerticalSwipe())

    expect(result.current).to.be.an('object').that.has.all.keys('swiping', 'direction', 'alphaX', 'alphaY', 'count')
  })
})
