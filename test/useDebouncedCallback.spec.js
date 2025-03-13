import React from 'react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import useDebouncedCallback from '../dist/useDebouncedCallback'
import promiseDelay from './utils/promiseDelay'
import assertHook from './utils/assertHook'

describe('useDebouncedCallback', () => {
  beforeEach(() => {
    cleanupReact()
    cleanupHooks()
  })

  afterEach(sinon.restore)

  assertHook(useDebouncedCallback)

  it('should return a single function', () => {
    const fn = () => 0
    const { result } = renderHook(() => useDebouncedCallback(fn))

    expect(result.current).to.be.a('function')
  })

  it('should return a debounced function', async () => {
    const spy = sinon.spy()

    const TestComponent = () => {
      const debouncedCallback = useDebouncedCallback(() => {
        spy()
      }, [], 250)

      React.useEffect(() => {
        debouncedCallback()
        debouncedCallback()
        debouncedCallback()
        debouncedCallback()
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
      const debouncedCallback = useDebouncedCallback(callback, [callback], 250);

      React.useEffect(() => {
        debouncedCallback();
        debouncedCallback();

        setTimeout(() => {
          setCallback(() => secondSpy);
        }, 100);

        setTimeout(() => {
          debouncedCallback();
          debouncedCallback();
        }, 200);
      }, [debouncedCallback]);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(600);

    expect(firstSpy.callCount).to.equal(1); 
    expect(secondSpy.callCount).to.equal(1); 
  })
})
