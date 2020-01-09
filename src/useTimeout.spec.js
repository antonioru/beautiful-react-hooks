import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook, act } from '@testing-library/react-hooks';
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

  it('should return an array, the first item is the timeout state whilst the second its clearing method', () => {
    const { result } = renderHook(() => useTimeout(() => null, 1000));

    expect(result.current).to.be.an('array');
    expect(result.current[0]).to.be.an('boolean');
    expect(result.current[1]).to.be.a('function');
  });

  it('should delay the execution of the delayed function', async () => {
    const delay = 50;
    const spy = sinon.spy();

    const TestComponent = () => {
      useTimeout(spy, delay);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(10 + delay);

    expect(spy.called).to.be.true;
  });

  it('should allow to define whether the timeout should be cleared on unmount', async () => {
    const delay = 50;
    const spy = sinon.spy();

    const TestComponent = () => {
      useTimeout(spy, delay, { cancelOnUnmount: false });

      return <div />;
    };

    const { rerender } = render(<TestComponent />);
    rerender(null);

    await promiseDelay(10 + delay);

    expect(spy.called).to.be.true;
  });

  it('even if the provided options is null, it should keep working', () => {
    const { result } = renderHook(() => useTimeout(() => null, 1000, null));

    expect(result.current).to.be.an('array');
  });

  it('should allow to clear the created timeout', () => {
    const spy = sinon.spy();
    const delay = 100;
    const { result, error } = renderHook(() => useTimeout(spy, delay));
    const clear = result.current[1];

    expect(result.current[0]).to.be.false;

    act(clear);

    expect(result.current[0]).to.be.true;
    expect(spy.called).to.be.false;

    act(clear);

    expect(result.current[0]).to.be.true;

    expect(error).to.be.undefined;
  });

  it('should check the received parameters to avoid errors', () => {
    const { result } = renderHook(() => useTimeout(10, { foo: 'bar' }));
    const clear = result.current[1];

    expect(result.current[0]).to.be.false;
    expect(clear).to.be.a('function');

    act(clear);

    expect(result.current[0]).to.be.false;
  });
});
