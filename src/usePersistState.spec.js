import React, { useEffect } from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks';
import usePersistState from './usePersistState';

describe('usePersistState', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
    sinon.restore();
  });

  it('should be a function', () => {
    expect(usePersistState).to.be.a('function');
  });
  it('should return default value', () => {
    const { result, rerender } = renderHook(() => usePersistState('storageKey', 100));
    const [value] = result.current;
    rerender();

    expect(value).to.equal(100);
  });

  it('should store and return new value', () => {
    const TestComponent = (props) => {
      // eslint-disable-next-line react/prop-types
      const { newValue } = props;
      const [value, setValue] = usePersistState('storageKey', 100);

      const setNewState = (v) => {
        setValue(v);
      };

      useEffect(() => {
        setNewState(newValue);
      }, []);

      return <p>{value}</p>;
    };

    const { container, rerender } = render(<TestComponent newValue={200} />);
    rerender(<TestComponent newValue={300} />);

    expect(container.querySelector('p').innerHTML).to.equal('200');
  });
});
