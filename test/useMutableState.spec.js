import React, { useEffect } from 'react'
import { render } from '@testing-library/react'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import useMutableState from '../dist/useMutableState'
import assertHook from './utils/assertHook'

describe('useMutableState', () => {
  beforeEach(cleanup)

  assertHook(useMutableState)

  it('should return an object', () => {
    const { result } = renderHook(() => useMutableState({ value: 0 }))

    expect(result.current).to.be.an('object').that.has.property('value')
  })

  it('should re-render when the value changes', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const state = useMutableState({ value: 0 })

      spy()

      useEffect(() => {
        state.value = 1
      }, [])

      return <div>val: {state.value}</div>
    }

    render(<TestComponent />)

    expect(spy.callCount).to.equal(2)
  })
})
