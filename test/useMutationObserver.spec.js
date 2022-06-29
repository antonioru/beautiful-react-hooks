import React, { useRef, useState } from 'react'
import MutationObserverMock from 'mutation-observer'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { cleanup as cleanupReact, render } from '@testing-library/react'

import assertHook from './utils/assertHook'
import promiseDelay from './utils/promiseDelay'
import useMutationObserver from '../dist/useMutationObserver'

describe('useMutationObserver', () => {
  const originalMutationObserver = global.MutationObserver

  before(() => {
    global.MutationObserver = window.MutationObserver = MutationObserverMock
  })

  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  after(() => {
    global.MutationObserver = window.MutationObserver = originalMutationObserver
  })

  assertHook(useMutationObserver)

  describe('when the MutationObserver API is not supported', () => {  
    beforeEach(() => {
      delete global.MutationObserver
      delete window.MutationObserver
    })
  
    afterEach(() => {
      global.MutationObserver = window.MutationObserver = originalMutationObserver
      sinon.restore()
    })
  
    it('should not observe anything', async () => {
      const refMock = { current: document.createElement('div') }
      const warnSpy = sinon.spy(console, 'warn')
  
      const { result } = renderHook(() => useMutationObserver(refMock))
  
      expect(warnSpy.called).to.be.true
      expect(result.current).to.be.undefined
    })
  })

  it('should observe for element mutations when the MutationObserver API is supported', async () => {
    const callbackSpy = sinon.spy()

    const TestComponent = () => {
      const ref = useRef(null)
      const [count, setCount] = useState(0)

      useState(() => {
        const clear = setTimeout(() => {
          setCount(prev => prev + 1)
        }, 200);

        return () => clearTimeout(clear)
      }, [])

      useMutationObserver(ref, callbackSpy)

      return (
        <div ref={ref}>
          <div>Hello</div>
          <div>World</div>
          <div>Mutation counter: {count}</div>
        </div>
      );
    }

    render(<TestComponent />)

    expect(callbackSpy.called).to.be.false

    await promiseDelay(300)

    expect(callbackSpy.called).to.be.true
  })
})
