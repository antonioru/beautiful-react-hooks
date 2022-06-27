import React from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHook, renderHook } from '@testing-library/react-hooks'

import useCookie from '../dist/useCookie'
import assertHook from './utils/assertHook'
import CookieStoreApiMock from './mocks/CookieStoreApi.mock'

const onErrorSpy = sinon.spy()
const consoleWarnSpy = sinon.spy()
const realConsoleWarning = console.warn

describe('useCookie', () => {
  before(() => {
    console.warn = consoleWarnSpy
    window.cookieStore = CookieStoreApiMock
  })

  after(() => {
    delete window.cookieStore
    console.warn = realConsoleWarning
  })

  beforeEach(() => {
    cleanupHook()
    cleanupReact()
    sinon.reset()
  })

  assertHook(useCookie)

  it('should return mocked object when browser does not support cookieStore API', () => {
    delete window.cookieStore

    const { result } = renderHook(() => useCookie())

    expect(consoleWarnSpy.called).to.be.true
    expect(result.current).to.be.an('object').that.has.all.deep.keys('onError', 'cookieValue', 'updateCookie', 'deleteCookie')

    window.cookieStore = CookieStoreApiMock
  })

  it('should save default value when no cookie is set', async () => {
    const { result, waitFor } = renderHook(() => useCookie('test', { defaultValue: 'default' }))

    await waitFor(() => result.current.cookieValue === 'default');

    expect(result.current.cookieValue).to.equal('default')
  })

  it('should intial, update and then delete cookie', async () => {
    const { result, waitForNextUpdate, waitFor } = renderHook(() => useCookie('test', { defaultValue: 'default' }))

    await waitFor(() => result.current.cookieValue === 'default');

    expect(result.current.cookieValue).to.equal('default')
    result.current.updateCookie('newValue')

    await waitForNextUpdate()
    expect(result.current.cookieValue).to.equal('newValue')

    result.current.deleteCookie()

    await waitForNextUpdate()
    expect(result.current.cookieValue).to.be.undefined
  })

  it('should call onError callback when an arror occurs', async () => {
    Object.defineProperty(window, "cookieStore", {
      value: {
        ...window.cookieStore,
        get: () => {
          throw new Error('error')
        }
      }
    })

    const TestComponent = () => {
      const { onError } = useCookie('test', { defaultValue: 'default' })

      onError(onErrorSpy)

      return <div />
    }

    render(<TestComponent />)

    expect(onErrorSpy.called).to.be.true
  })
})
