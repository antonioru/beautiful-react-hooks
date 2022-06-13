import { cleanup, renderHook } from '@testing-library/react-hooks'
import useViewportState from '../dist/useViewportState'
import assertHook from './utils/assertHook'

describe('useViewportState', () => {

  beforeEach(() => cleanup())

  assertHook(useViewportState)

  it('should return an object containing information on the current window state', () => {
    const { result } = renderHook(() => useViewportState())

    expect(result.current).to.be.an('object').that.has.all.keys('width', 'height', 'scrollY', 'scrollX')
  })
})
