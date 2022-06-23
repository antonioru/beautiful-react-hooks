import { cleanup, renderHook } from '@testing-library/react-hooks'
import useSearchQuery from '../dist/useSearchQuery'
import assertHook from './utils/assertHook'
import ReactRouterWrapper from './utils/ReactRouterWrapper'

describe('useSearchQuery', () => {
  beforeEach(() => cleanup())

  assertHook(useSearchQuery)

  it('should work similar to useState', () => {
    const initialValue = 'foo'
    const { result } = renderHook(() => useSearchQuery(initialValue), { wrapper: ReactRouterWrapper })
    const [val, setVal] = result.current

    expect(val).to.be.a('string')
    expect(val).to.equal(initialValue)
    expect(setVal).to.be.a('function')
  })
})
