import { cleanup, renderHook } from '@testing-library/react-hooks'
import useValueHistory from '../dist/useValueHistory'
import assertHook from './utils/assertHook'

describe('useValueHistory', () => {
  beforeEach(() => cleanup())

  assertHook(useValueHistory)

  it('should return an array', () => {
    const { result } = renderHook(() => useValueHistory(10))

    expect(result.current).to.be.an('array')
  })

  it('should return the history of the given value', () => {
    const { result, rerender } = renderHook((value) => useValueHistory(value), { initialProps: 1 })

    rerender(2)
    rerender(3)

    expect(result.current).to.deep.equal([1, 2, 3])
  })

  it('should return the history of the unique given value', async () => {
    const { result, rerender } = renderHook((value) => useValueHistory(value, true), { initialProps: 1 })

    rerender(2)
    rerender(1)
    rerender(1)

    expect(result.current).to.deep.equal([1, 2])
  })
})
