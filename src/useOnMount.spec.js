import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useOnMount from './useOnMount';

describe('useOnMount', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useOnMount).to.be.a('function');
    expect(useOnMount.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useOnMount());

    expect(result.current).to.be.a('function');
  });

  it('the returned function should be a setter for a callback to be performed when component mounts', () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const onMount = useOnMount();

      onMount(spy);

      return null;
    };

    render(<TestComponent />);

    expect(spy.called).to.be.true;
  });
});
