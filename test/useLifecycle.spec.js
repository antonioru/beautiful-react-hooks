import { cleanup, renderHook } from '@testing-library/react-hooks'
import useLifecycle from '../dist/useLifecycle'

describe('useLifecycle', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(useLifecycle).to.be.a('function')
  })

  it('should return a single object', () => {
    const { result } = renderHook(() => useLifecycle())

    expect(result.current).to.be.an('object')
  })

  it('the returned function should wrap other lifecycle hooks', () => {
    const { result } = renderHook(() => useLifecycle())

    expect(result.current).to.be.an('object').that.has.all.keys('onDidMount', 'onWillUnmount')
  })
})
