import { cleanup, renderHook } from '@testing-library/react-hooks'
import useQueryParam from '../dist/useQueryParam'
import assertHook from './utils/assertHook'
import ReactRouterWrapper from './utils/ReactRouterWrapper'

describe('useQueryParam', () => {
  beforeEach(() => cleanup())

  assertHook(useQueryParam)

  it('should work similar to useState', () => {
    const initialValue = 'bar'
    const { result } = renderHook(() => useQueryParam('foo', { initialValue }), { wrapper: ReactRouterWrapper })
    const [val, setVal] = result.current

    expect(val).to.be.a('string')
    expect(val).to.equal(initialValue)
    expect(setVal).to.be.a('function')
  })
})
