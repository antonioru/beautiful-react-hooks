import { fireEvent } from '@testing-library/react'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import useOnlineState from '../dist/useOnlineState'
import assertHook from './utils/assertHook'

describe('useOnlineState', () => {
  beforeEach(() => {
    cleanup()
    window.ononline = null
  })

  assertHook(useOnlineState)

  it('should return a boolean value', () => {
    const { result } = renderHook(() => useOnlineState('resize'))

    expect(result.current).to.be.a('boolean')
  })

  it('should return true if the device not support online event', () => {
    delete window.ononline

    const spy = sinon.spy(window.console, 'warn')
    const { result } = renderHook(() => useOnlineState())
    expect(spy.calledOnce).to.be.true
    expect(result.current).to.be.true
  })

  it('should change after an online/offline event', () => {
    const { result } = renderHook(() => useOnlineState())
    expect(result.current).to.be.true

    const offlineEvent = window.document.createEvent('Event')
    offlineEvent.initEvent('offline', false, false)
    fireEvent(window, offlineEvent)
    expect(result.current).to.be.false

    const onlineEvent = window.document.createEvent('Event')
    onlineEvent.initEvent('online', false, false)
    fireEvent(window, onlineEvent)
    expect(result.current).to.be.true
  })
})
