import { cleanup, renderHook } from '@testing-library/react-hooks'
import useQueryParams from '../dist/useQueryParams'
import assertHook from './utils/assertHook'
import ReactRouterWrapper from './utils/ReactRouterWrapper'

describe('useQueryParams', () => {
  beforeEach(() => cleanup())

  assertHook(useQueryParams)

  it('should work similar to useState', () => {
    const initialValue = ['1', '2', '3']
    const { result } = renderHook(() => useQueryParams('foo[]', { initialValue }), { wrapper: ReactRouterWrapper })
    const [val, setVal] = result.current

    expect(val).to.be.an('array')
    expect(val).to.deep.equal(initialValue)
    expect(setVal).to.be.a('function')
  })
})
