import React from 'react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import useDebouncedCallback from '../dist/useDebouncedCallback'
import promiseDelay from './utils/promiseDelay'
import assertHook from './utils/assertHook'

describe('useDebouncedCallback', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  afterEach(sinon.restore)

  assertHook(useDebouncedCallback)

  it('should return a single function', () => {
    const fn = () => 0
    const { result } = renderHook(() => useDebouncedCallback(fn))

    expect(result.current).to.be.a('function')
  })

  it('should return a debounced function', async () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const debouncedCallback = useDebouncedCallback(() => {
        spy()
      }, [], 250)

      React.useEffect(() => {
        debouncedCallback()
        debouncedCallback()
        debouncedCallback()
        debouncedCallback()
      }, [])

      return <div />
    }

    render(<TestComponent />)

    await promiseDelay(300)

    expect(spy.called).to.be.true
    expect(spy.callCount).to.equal(1)
  })
})
