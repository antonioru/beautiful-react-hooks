import React from 'react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import useDebouncedFn from '../dist/useDebouncedFn';
import promiseDelay from './utils/promiseDelay';


describe('useDebouncedFn', () => {
  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
  });

  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(useDebouncedFn).to.be.a('function');
  });

  it('should return a single function', () => {
    const fn = () => 0;
    const { result } = renderHook(() => useDebouncedFn(fn));

    expect(result.current).to.be.a('function');
  });

  it('should return a debounced function', async () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const debouncedCallback = useDebouncedFn(() => {
        spy();
      }, 250);

      React.useEffect(() => {
        debouncedCallback();
        debouncedCallback();
        debouncedCallback();
        debouncedCallback();
      }, []);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(300);

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});
