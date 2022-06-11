import { cleanup, renderHook } from '@testing-library/react-hooks'
import useTouchState from '../dist/useTouchState'
import assertHook from './utils/assertHook'

describe('useTouchState', () => {
  beforeEach(() => cleanup())

  assertHook(useTouchState)

  it('should return a TouchList object', () => {
    const { result } = renderHook(() => useTouchState())

    expect(result.current).to.have.property('length')
  })
})
