import { cleanup, renderHook } from '@testing-library/react-hooks'
import useTouchState from '../dist/useTouchState'

describe('useTouchState', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(useTouchState).to.be.a('function')
  })

  it('should return a TouchList object', () => {
    const { result } = renderHook(() => useTouchState())

    expect(result.current).to.have.property('length')
  })
})
