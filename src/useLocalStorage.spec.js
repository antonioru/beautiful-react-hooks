import React, { useEffect } from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    cleanupHooks();
    cleanupReact();
  });

  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(useLocalStorage).to.be.a('function');
  });

  it('should return null when no default value defined', () => {
    const { result, rerender } = renderHook(() => useLocalStorage('storageKey_1'));
    const [value] = result.current;
    rerender();
    expect(value).to.equal(null);
  });


  it('should return default value', () => {
    const { result, rerender } = renderHook(() => useLocalStorage('storageKey_2', 100));
    const [value] = result.current;
    rerender();

    expect(value).to.equal(100);
  });

  it('should store and return new value', () => {
    const TestComponent = (props) => {
      // eslint-disable-next-line react/prop-types
      const { newValue } = props;
      const [value, setValue] = useLocalStorage('storageKey_2', 100);

      const setNewState = (v) => {
        setValue(v);
      };

      useEffect(() => {
        setNewState(newValue);
      }, []);

      return <p>{value}</p>;
    };

    const { container } = render(<TestComponent newValue={200} />);

    expect(container.querySelector('p').innerHTML).to.equal('200');
  });

  it('should warn when the window.localStorage API is not supported', () => {
    Reflect.deleteProperty(window, 'localStorage');

    const warnSpy = sinon.spy(console, 'warn');
    const { result } = renderHook(() => useLocalStorage('test-key'));

    expect(result.current[0]).to.be.null;
    expect(result.current[1].called).to.be.undefined;
    expect(warnSpy.called).to.be.true;
  });
});
