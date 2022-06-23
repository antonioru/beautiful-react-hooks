import { cleanup, renderHook } from '@testing-library/react-hooks'
import useURLSearchParams from '../dist/useURLSearchParams'
import assertHook from './utils/assertHook'
import ReactRouterWrapper from './utils/ReactRouterWrapper'

describe('useURLSearchParams', () => {
  beforeEach(() => cleanup())

  assertHook(useURLSearchParams)

  it('should return an instance of URLSearchParams', () => {
    const { result } = renderHook(() => useURLSearchParams(), { wrapper: ReactRouterWrapper })
    expect(result.current).to.be.an.instanceOf(URLSearchParams)
  })
})
