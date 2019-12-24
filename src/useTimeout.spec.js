import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks';
import useTimeout from './useTimeout';
import promiseDelay from '../test/utils/promiseDelay';

describe('useTimeout', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
    sinon.restore();
  });

  it('should be an arrow function', () => {
    expect(useTimeout).to.be.a('function');
    expect(useTimeout.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useTimeout());

    expect(result.current).to.be.a('function');
  });

  it('should delay the execution of its returning function', async () => {
    const delay = 100;
    const spy = sinon.spy();

    const TestComponent = () => {
      const after1Sec = useTimeout(delay);

      after1Sec(spy);

      return null;
    };

    render(<TestComponent />);

    await promiseDelay(1 + delay);

    expect(spy.called).to.be.true;
  });
});
