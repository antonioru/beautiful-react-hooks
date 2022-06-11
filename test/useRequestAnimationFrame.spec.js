import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useRequestAnimationFrame from '../dist/useRequestAnimationFrame'
import promiseDelay from './utils/promiseDelay'
import assertHook from './utils/assertHook'

describe('useRequestAnimationFrame', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame = (fn) => fn()
    }
  })

  afterEach(sinon.restore)

  assertHook(useRequestAnimationFrame)

  it('should immediately perform the given function', () => {
    window.requestAnimationFrame = (fn) => fn()
    const spy = sinon.spy()

    renderHook(() => useRequestAnimationFrame(spy))

    expect(spy.called).to.be.true
    expect(spy.args[0][0]).to.be.a('number')
    expect(spy.args[0][1]).to.be.a('function')

    delete window.requestAnimationFrame
  })

  it('should return an onFinish callback to be performed when the animation finishes', async () => {
    window.requestAnimationFrame = (fn) => setTimeout(fn, 1)

    const spy = sinon.spy()

    const TestComponent = () => {
      const onFinish = useRequestAnimationFrame((c, next) => next(), { increment: 5, finishAt: 50, startAt: 0 })

      onFinish(spy)

      return <div />
    }

    render(<TestComponent />)

    await promiseDelay(500)

    expect(spy.called).to.be.true
    delete window.requestAnimationFrame
  })
})
