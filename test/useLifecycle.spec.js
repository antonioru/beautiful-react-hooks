import { cleanup, renderHook } from '@testing-library/react-hooks'
import useLifecycle from '../dist/useLifecycle'
import assertHook from './utils/assertHook'

describe('useLifecycle', () => {
  beforeEach(() => cleanup())

  assertHook(useLifecycle)

  it('the returned function should wrap other lifecycle hooks', () => {
    const { result } = renderHook(() => useLifecycle())

    expect(result.current).to.be.an('object').that.has.all.keys('onDidMount', 'onWillUnmount')
  })
})
