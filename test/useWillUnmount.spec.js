import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useWillUnmount from '../dist/useWillUnmount';

describe('useWillUnmount', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
  });

  it('should be a function', () => {
    expect(useWillUnmount).to.be.a('function');
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
