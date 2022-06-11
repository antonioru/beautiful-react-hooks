import { cleanup, renderHook } from '@testing-library/react-hooks'
import useInfiniteScroll from '../dist/useInfiniteScroll'
import assertHook from './utils/assertHook'

describe('useInfiniteScroll', () => {
  beforeEach(() => cleanup())

  assertHook(useInfiniteScroll)

  it('should return an callback setter', () => {
    const ref = { current: document.createElement('div') }
    const { result } = renderHook(() => useInfiniteScroll(ref))

    expect(result.current).to.be.a('function')
  })
})
