import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useDidMount from '../dist/useDidMount'
import assertHook from './utils/assertHook'

describe('useDidMount', () => {
  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  afterEach(sinon.restore)

  assertHook(useDidMount)

  it('should return a single function', () => {
    const { result } = renderHook(() => useDidMount())

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when component did mount', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onMount = useDidMount()

      onMount(spy)

      return null
    }

    render(<TestComponent />)

    expect(spy.called).to.be.true
  })
})
