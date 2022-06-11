import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useWillUnmount from '../dist/useWillUnmount'
import assertHook from './utils/assertHook'

describe('useWillUnmount', () => {
  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  assertHook(useWillUnmount)

  it('should return a single function', () => {
    const { result } = renderHook(() => useWillUnmount())

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when component will unmount', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onUnmount = useWillUnmount()

      onUnmount(spy)

      return null
    }

    const { rerender } = render(<TestComponent />)

    rerender(null)

    expect(spy.called).to.be.true
  })
})
