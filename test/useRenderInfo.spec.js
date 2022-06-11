import React from 'react'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import useRenderInfo from '../dist/useRenderInfo'
import assertHook from './utils/assertHook'

describe('useRenderInfo', () => {
  beforeEach(() => cleanup())

  afterEach(sinon.restore)

  assertHook(useRenderInfo)

  it('should return an information object', () => {
    const name = 'Foo'
    const { result: { current: info } } = renderHook(() => useRenderInfo(name, false))

    expect(info).to.be.an('object')
    expect(info.module).to.equal(name)
    expect(info.renders).to.be.a('number')
    expect(info.sinceLast).to.be.a('string')
    expect(info.timestamp).to.be.a('number')
  })

  it('should print consistent information', () => {
    const { result: { current: info }, rerender } = renderHook(() => useRenderInfo('foo', false))

    rerender()
    rerender()

    expect(info.renders).to.equal(3)
  })

  it('should print renders information in group', () => {
    const groupSpy = sinon.spy(console, 'group')
    const groupEndSpy = sinon.spy(console, 'groupEnd')
    const logSpy = sinon.spy(console, 'log')

    renderHook(() => useRenderInfo(name, true))

    expect(logSpy.called).to.be.true
    expect(groupSpy.called).to.be.true
    expect(groupEndSpy.called).to.be.true
  })
})
