import React, { useEffect } from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks';
import useStorage from '../dist/useStorage';

describe('useStorage', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
  });

  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(useStorage).to.be.a('function');
  });

  it('should return a function', () => {
    const useLocalStorage = useStorage('local');
    expect(useLocalStorage).to.be.a('function');
  });

  it('should return default value', () => {
    const { result, rerender } = renderHook(() => useStorage('local')({
      counter: 0,
    }));

    const localStorage = result.current;
    rerender();

    expect(localStorage.get('counter')).to.equal(0);
  });

  it('should store and return new value', () => {
    const TestComponent = () => {
      const storage = useStorage('session')({ counter: 0 });

      const increment = () => storage.set('counter', (oldValue) => oldValue + 1);

      useEffect(() => {
        increment();
      }, []);

      return <button type="button" onClick={increment}>{storage.counter}</button>;
    };

    const { container } = render(<TestComponent />);

    expect(container.querySelector('button').innerHTML).to.equal('1');

    container.querySelector('button').click();

    expect(container.querySelector('button').innerHTML).to.equal('2');
  });
});
