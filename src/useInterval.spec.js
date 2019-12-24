import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useInterval from './useInterval';
import promiseDelay from '../test/utils/promiseDelay';

describe('useInterval', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
    sinon.restore();
  });


  it('should be an arrow function', () => {
    expect(useInterval).to.be.a('function');
    expect(useInterval.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useInterval());

    expect(result.current).to.be.a('function');
  });

  it('should fire the the execution of its returning function every \'x\' milliseconds', async () => {
    const delay = 50;
    const spy = sinon.spy();

    const TestComponent = () => {
      const every50Ms = useInterval(delay);

      every50Ms(spy);

      return null;
    };

    render(<TestComponent />);

    await promiseDelay(delay * 3);

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.equal(2);
  });
});
