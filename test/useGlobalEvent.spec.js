import React from 'react'
import { cleanup as cleanupReact, fireEvent, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useGlobalEvent from '../dist/useGlobalEvent'
import assertHook from './utils/assertHook'

describe('useGlobalEvent', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  assertHook(useGlobalEvent)

  it('should return a single function', () => {
    const { result } = renderHook(() => useGlobalEvent('resize'))

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when the event triggers', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onWindowResize = useGlobalEvent('resize')

      onWindowResize(spy)

      return null
    }

    render(<TestComponent />)

    const resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('resize', true, false, window, 0)

    fireEvent(window, resizeEvent)

    expect(spy.called).to.be.true
  })

  it('should change function when provided', () => {
    const firstSpy = sinon.spy()
    const secondSpy = sinon.spy()

    const TestComponent = ({ callback }) => {
      const onWindowResize = useGlobalEvent('resize')

      onWindowResize(callback)

      return null
    }

    const { rerender } = render(<TestComponent callback={firstSpy} />)

    const resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('resize', true, false, window, 0)

    fireEvent(window, resizeEvent)

    expect(firstSpy.called).to.be.true

    rerender(<TestComponent callback={secondSpy} />)

    fireEvent(window, resizeEvent)

    expect(secondSpy.called).to.be.true
  })
})
