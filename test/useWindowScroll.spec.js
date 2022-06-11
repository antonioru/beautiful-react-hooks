import React from 'react'
import { cleanup as cleanupReact, fireEvent, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useWindowScroll from '../dist/useWindowScroll'
import assertHook from './utils/assertHook'

describe('useWindowScroll', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  assertHook(useWindowScroll)

  it('should return a single function', () => {
    const { result } = renderHook(() => useWindowScroll())

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a setter for a callback to be performed when window scrolls', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onWindowScroll = useWindowScroll()

      onWindowScroll(spy)

      return null
    }

    render(<TestComponent />)

    const resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('scroll', true, false, window, 0)

    fireEvent(window, resizeEvent)

    expect(spy.called).to.be.true
  })
})
