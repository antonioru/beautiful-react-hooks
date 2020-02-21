import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks';
import usePreviousValue from './usePreviousValue';

describe('usePreviousValue', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
  });

  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(usePreviousValue).to.be.a('function');
  });

  it('should return undefined after the first render', () => {
    const { result } = renderHook(() => usePreviousValue(10));

    expect(result.current).to.be.undefined;
  });

  it('should return the previous value of a given variable', () => {
    const TestComponent = (props) => {
      // eslint-disable-next-line react/prop-types
      const { value } = props;
      const prev = usePreviousValue(value);

      return <p>{prev}</p>;
    };

    const { container, rerender } = render(<TestComponent value={1} />);
    rerender(<TestComponent value={2} />);

    expect(container.querySelector('p').innerHTML).to.equal('1');
  });
});
