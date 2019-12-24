import React from 'react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import useThrottledCallback from './useThrottledCallback';
import promiseDelay from '../test/utils/promiseDelay';


describe('useThrottledCallback', () => {
  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
    sinon.restore();
  });

  it('should be an arrow function', () => {
    expect(useThrottledCallback).to.be.a('function');
    expect(useThrottledCallback.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const fn = () => 0;
    const { result } = renderHook(() => useThrottledCallback(fn));

    expect(result.current).to.be.a('function');
  });

  it('should return a throttled function', async () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const throttledFn = useThrottledCallback(() => {
        spy();
      }, 250);

      React.useEffect(() => {
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
      }, []);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(250);

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});
