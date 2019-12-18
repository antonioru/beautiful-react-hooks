import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useWillUnmount from './useWillUnmount';

describe('useWillUnmount', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useWillUnmount).to.be.a('function');
    expect(useWillUnmount.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useWillUnmount());

    expect(result.current).to.be.a('function');
  });

  it('the returned function should be a setter for a callback to be performed when component will unmount', () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const onUnmount = useWillUnmount();

      onUnmount(spy);

      return null;
    };

    const { rerender } = render(<TestComponent />);

    rerender(null);

    expect(spy.called).to.be.true;
  });
});
