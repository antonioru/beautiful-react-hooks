import React from 'react'
import { cleanup as cleanupReact, fireEvent, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useWindowResize from '../dist/useWindowResize'
import assertHook from './utils/assertHook'

describe('useWindowResize', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  assertHook(useWindowResize)

  it('should return a single function', () => {
    const { result } = renderHook(() => useWindowResize())

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when window resizes', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onWindowResize = useWindowResize()

      onWindowResize(spy)

      return null
    }

    render(<TestComponent />)

    const resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('resize', true, false, window, 0)

    fireEvent(window, resizeEvent)

    expect(spy.called).to.be.true
  })
})
