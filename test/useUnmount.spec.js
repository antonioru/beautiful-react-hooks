import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useUnmount from '../dist/useUnmount'
import assertHook from './utils/assertHook'

describe('useUnmount', () => {
  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  assertHook(useUnmount)

  it('should return a single function', () => {
    const { result } = renderHook(() => useUnmount())

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when component did unmount', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onUnmount = useUnmount()

      onUnmount(spy)

      return null
    }

    const { rerender } = render(<TestComponent />)

    rerender(null)

    expect(spy.called).to.be.true
  })
})
