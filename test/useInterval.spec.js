import React from 'react'
import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useInterval from '../dist/useInterval'
import assertHook from './utils/assertHook'

describe('useInterval', () => {
  beforeEach(() => cleanup())
  afterEach(sinon.restore)

  assertHook(useInterval)

  it('should return an array, the first item is the interval state whilst the second its clearing method', () => {
    const { result } = renderHook(() => useInterval(() => null, 1000))

    expect(result.current).to.be.an('array')
    expect(result.current[0]).to.be.an('boolean')
    expect(result.current[1]).to.be.a('function')
  })

  it('even if the provided options is null, it should keep working', () => {
    const { result } = renderHook(() => useInterval(() => null, 1000, null))

    expect(result.current).to.be.an('array')
  })

  it('should allow to clear the created interval', () => {
    const spy = sinon.spy()
    const ms = 100
    const { result, error } = renderHook(() => useInterval(spy, ms))
    const clear = result.current[1]

    expect(result.current[0]).to.be.false

    act(clear)

    expect(result.current[0]).to.be.true
    expect(spy.called).to.be.false

    act(clear)

    expect(result.current[0]).to.be.true

    expect(error).to.be.undefined
  })

  it('should check the received parameters to avoid errors', () => {
    const { result } = renderHook(() => useInterval(10, { foo: 'bar' }))
    const clear = result.current[1]

    expect(result.current[0]).to.be.false
    expect(clear).to.be.a('function')

    act(clear)

    expect(result.current[0]).to.be.false
  })
})
