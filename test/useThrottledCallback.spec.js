import React from 'react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import useThrottledCallback from '../dist/useThrottledCallback'
import promiseDelay from './utils/promiseDelay'
import assertHook from './utils/assertHook'

describe('useThrottledCallback', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  afterEach(sinon.restore)

  assertHook(useThrottledCallback)

  it('should return a single function', () => {
    const fn = () => 0
    const { result } = renderHook(() => useThrottledCallback(fn))

    expect(result.current).to.be.a('function')
  })

  it('should return a throttled function', async () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const throttledFn = useThrottledCallback(() => {
        spy()
      }, [], 250)

      React.useEffect(() => {
        throttledFn()
        throttledFn()
        throttledFn()
        throttledFn()
      }, [])

      return <div />
    }

    render(<TestComponent />)

    await promiseDelay(300)

    expect(spy.called).to.be.true
    expect(spy.callCount).to.equal(1)
  })

  it('should use the latest callback', async () => {
    const firstSpy = sinon.spy();
    const secondSpy = sinon.spy();

    const TestComponent = () => {
      const [callback, setCallback] = React.useState(() => firstSpy);
      const throttledCallback = useThrottledCallback(callback, [callback], 250); 

      React.useEffect(() => {
        throttledCallback();
        throttledCallback();
      }, [throttledCallback]);

      React.useEffect(() => {
        setTimeout(() => {
          setCallback(() => secondSpy);
        }, 100);
      }, []);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(600);

    expect(firstSpy.callCount).to.equal(1); 
    expect(secondSpy.callCount).to.equal(1); 
  })
})
