import React from 'react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import useThrottledCallback from '../dist/useThrottledCallback'
import promiseDelay from './utils/promiseDelay'
import assertHook from './utils/assertHook'

describe('useThrottledCallback', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  afterEach(sinon.restore)

  assertHook(useThrottledCallback)

  it('should return a single function', () => {
    const fn = () => 0
    const { result } = renderHook(() => useThrottledCallback(fn))

    expect(result.current).to.be.a('function')
  })

  it('should return a throttled function', async () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const throttledFn = useThrottledCallback(() => {
        spy()
      }, 250)

      React.useEffect(() => {
        throttledFn()
        throttledFn()
        throttledFn()
        throttledFn()
      }, [])

      return <div />
    }

    render(<TestComponent />)

    await promiseDelay(250)

    expect(spy.called).to.be.true
    expect(spy.callCount).to.equal(1)
  })
})
