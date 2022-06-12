import React, { useRef } from 'react'
import { cleanup as cleanupReact, fireEvent, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useEvent from '../dist/useEvent'
import assertHook from './utils/assertHook'

describe('useEvent', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  assertHook(useEvent)

  it('should return a single function', () => {
    const target = { current: document.createElement('div') }
    const { result } = renderHook(() => useEvent(target, 'click'))

    expect(result.current).to.be.a('function')
  })

  it('the returned function should be a callback setter that fires when the event occurs', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const target = useRef()
      const onElementClick = useEvent(target, 'click')

      onElementClick(spy)

      return <div ref={target} id="foo" />
    }

    const { container } = render(<TestComponent />)

    container.querySelector('#foo').click()

    expect(spy.called).to.be.true
    expect(spy.callCount).to.equal(1)

    container.querySelector('#foo').click()
    container.querySelector('#foo').click()
    container.querySelector('#foo').click()

    expect(spy.callCount).to.equal(4)
  })

  it('should change function when provided', () => {
    const firstSpy = sinon.spy()
    const secondSpy = sinon.spy()

    const TestComponent = ({ callback }) => {
      const ref = useRef()
      const onRefClick = useEvent(ref, 'click')

      onRefClick(callback)

      return <div ref={ref} id="foo" />
    }

    const { rerender, container } = render(<TestComponent callback={firstSpy} />)

    container.querySelector('#foo').click()

    expect(firstSpy.called).to.be.true
    expect(firstSpy.callCount).to.equal(1)

    rerender(<TestComponent callback={secondSpy} />)

    container.querySelector('#foo').click()
    container.querySelector('#foo').click()

    expect(secondSpy.called).to.be.true
    expect(firstSpy.callCount).to.equal(1)
    expect(secondSpy.callCount).to.equal(2)
  })

  it('it should be \'trickable\' with global objects', () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const onWidowResize = useEvent({ current: window }, 'resize')

      onWidowResize(spy)

      return null
    }

    render(<TestComponent />)

    const resizeEvent = window.document.createEvent('UIEvents')

    resizeEvent.initUIEvent('resize', true, false, window, 0)

    fireEvent(window, resizeEvent)

    expect(spy.called).to.be.true
    expect(spy.callCount).to.equal(1)
  })
})
