import React from 'react'
import { cleanup as cleanupReact, fireEvent, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useMouseEvents from '../dist/useMouseEvents'
import assertHook from './utils/assertHook'

describe('useMouseEvents', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
    sinon.reset()
  })

  assertHook(useMouseEvents)

  it('should return an object of mouse-related callback setters', () => {
    const { result } = renderHook(() => useMouseEvents())

    expect(result.current).to.be.an('object').that.has.all.keys(
      'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'
    )
  })

  it('if no ref is provided, should perform the set callback when a mouse event occurs globally', () => {
    const mouseMoveSpy = sinon.spy()
    const mouseDownSpy = sinon.spy()
    const mouseEnterSpy = sinon.spy()
    const mouseLeaveSpy = sinon.spy()
    const mouseOutSpy = sinon.spy()
    const mouseUpSpy = sinon.spy()
    const mouseOverSpy = sinon.spy()

    const TestComponent = () => {
      const {
        onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseUp, onMouseOver
      } = useMouseEvents()

      onMouseDown(mouseDownSpy)
      onMouseMove(mouseMoveSpy)
      onMouseEnter(mouseEnterSpy)
      onMouseLeave(mouseLeaveSpy)
      onMouseOut(mouseOutSpy)
      onMouseUp(mouseUpSpy)
      onMouseOver(mouseOverSpy)

      return <div />
    }

    render(<TestComponent />)

    fireEvent(document, new MouseEvent('mousedown'))
    fireEvent(document, new MouseEvent('mouseenter'))
    fireEvent(document, new MouseEvent('mouseleave'))
    fireEvent(document, new MouseEvent('mousemove'))
    fireEvent(document, new MouseEvent('mouseout'))
    fireEvent(document, new MouseEvent('mouseup'))
    fireEvent(document, new MouseEvent('mouseover'))

    expect(mouseMoveSpy.called).to.be.true
    expect(mouseDownSpy.called).to.be.true
    expect(mouseEnterSpy.called).to.be.true
    expect(mouseLeaveSpy.called).to.be.true
    expect(mouseOutSpy.called).to.be.true
    expect(mouseUpSpy.called).to.be.true
    expect(mouseOverSpy.called).to.be.true
  })

  it('if ref is provided, should perform the set callback when a mouse event occurs to the given ref', () => {
    const refMock = { current: document.createElement('div') }
    const mouseMoveSpy = sinon.spy()
    const mouseDownSpy = sinon.spy()
    const mouseEnterSpy = sinon.spy()
    const mouseLeaveSpy = sinon.spy()
    const mouseOutSpy = sinon.spy()
    const mouseUpSpy = sinon.spy()
    const mouseOverSpy = sinon.spy()

    const TestComponent = () => {
      const {
        onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseUp, onMouseOver
      } = useMouseEvents(refMock)

      onMouseDown(mouseDownSpy)
      onMouseMove(mouseMoveSpy)
      onMouseEnter(mouseEnterSpy)
      onMouseLeave(mouseLeaveSpy)
      onMouseOut(mouseOutSpy)
      onMouseUp(mouseUpSpy)
      onMouseOver(mouseOverSpy)

      return <div />
    }

    render(<TestComponent />)

    fireEvent(refMock.current, new MouseEvent('mousedown'))
    fireEvent(refMock.current, new MouseEvent('mouseenter'))
    fireEvent(refMock.current, new MouseEvent('mouseleave'))
    fireEvent(refMock.current, new MouseEvent('mousemove'))
    fireEvent(refMock.current, new MouseEvent('mouseout'))
    fireEvent(refMock.current, new MouseEvent('mouseup'))
    fireEvent(refMock.current, new MouseEvent('mouseover'))

    expect(mouseMoveSpy.called).to.be.true
    expect(mouseDownSpy.called).to.be.true
    expect(mouseEnterSpy.called).to.be.true
    expect(mouseLeaveSpy.called).to.be.true
    expect(mouseOutSpy.called).to.be.true
    expect(mouseUpSpy.called).to.be.true
    expect(mouseOverSpy.called).to.be.true
  })

  it('if an invalid ref is provided, should not perform the callback', () => {
    const { result } = renderHook(() => useMouseEvents({ invalid: true }))

    expect(result.current.onSomething).to.be.a('function')
    expect(result.current.onSomething).to.throw()
    expect(result.current.someProperty).to.be.an('object').that.has.key('error')
  })

  it('if the provided ref is not an instance of HTMLElement should not add any listener', () => {
    const refMock = { current: { dispatchEvent: () => undefined } }
    const mouseMoveSpy = sinon.spy()

    const TestComponent = () => {
      const { onMouseMove } = useMouseEvents(refMock)

      onMouseMove(mouseMoveSpy)

      return <div />
    }

    const { rerender } = render(<TestComponent />)

    fireEvent(refMock.current, new MouseEvent('mousemove'))

    expect(mouseMoveSpy.called).to.be.false

    rerender(null)

    fireEvent(refMock.current, new MouseEvent('mousemove'))

    expect(mouseMoveSpy.called).to.be.false
  })
})
