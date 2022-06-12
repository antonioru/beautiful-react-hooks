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

  it('the returned function should be a callback setter that fires when the event occurs', () => {
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
})
