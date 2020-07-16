import React from 'react';
import { cleanup, renderHook, act } from '@testing-library/react-hooks';
import useInterval from '../dist/useInterval';

describe('useInterval', () => {
  beforeEach(cleanup);
  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(useInterval).to.be.a('function');
  });

  it('should return an array, the first item is the interval state whilst the second its clearing method', () => {
    const { result } = renderHook(() => useInterval(() => null, 1000));

    expect(result.current).to.be.an('array');
    expect(result.current[0]).to.be.an('boolean');
    expect(result.current[1]).to.be.a('function');
  });

  /* it('should repeat the execution of the given function every x-milliseconds', async () => {
    const ms = 50;
    const spy = sinon.spy();

    const TestComponent = () => {
      useInterval(spy, ms);

      return <div />;
    };

    render(<TestComponent />);

    await promiseDelay(3 * ms);

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.be.at.least(2);
  }); */

  it('even if the provided options is null, it should keep working', () => {
    const { result } = renderHook(() => useInterval(() => null, 1000, null));

    expect(result.current).to.be.an('array');
  });


  /*it('should allow to define whether the interval should be cleared on unmount', async () => {
    const noop = () => void 0;
    const { result, unmount, wait } = renderHook(() => useInterval(noop, 10, { cancelOnUnmount: true }));

    await wait(() => true, { timeout: 250 });

    unmount();

    expect(result.current[0]).to.be.true;
  });*/

  it('should allow to clear the created interval', () => {
    const spy = sinon.spy();
    const ms = 100;
    const { result, error } = renderHook(() => useInterval(spy, ms));
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
    const { result } = renderHook(() => useInterval(10, { foo: 'bar' }));
    const clear = result.current[1];

    expect(result.current[0]).to.be.false;
    expect(clear).to.be.a('function');

    act(clear);

    expect(result.current[0]).to.be.false;
  });
});
