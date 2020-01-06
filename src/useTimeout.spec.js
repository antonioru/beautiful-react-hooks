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

  it('should return a single function when the delayed function is not provided', () => {
    const { result } = renderHook(() => useTimeout(1000));

    expect(result.current).to.be.a('function');
  });

  it('should return undefined when the delayed function is provided', () => {
    const { result } = renderHook(() => useTimeout(() => null, 1000));

    expect(result.current).to.be.undefined;
  });

  it('should delay the execution of the delayed function', async () => {
    const delay = 100;
    const spy = sinon.spy();

    const TestComponent = () => {
      const after1Sec = useTimeout(delay);

      after1Sec(spy);

      return null;
    };

    render(<TestComponent />);

    await promiseDelay(10 + delay);

    expect(spy.called).to.be.true;
  });

  it('should accept an object of options to possibly customise the setTimeout behaviour', async () => {
    const delay = 100;
    const spy = sinon.spy();

    const TestComponent = (props) => {
      // eslint-disable-next-line react/destructuring-assignment
      const after1Sec = useTimeout(delay, { cancelPrevious: props.cancelPrevious });

      after1Sec(spy);

      return null;
    };

    const { rerender } = render(<TestComponent cancelPrevious={false} />);

    rerender(<TestComponent cancelPrevious />);

    await promiseDelay(10 + (2 * delay));

    expect(spy.called).to.be.false;
  });
});
