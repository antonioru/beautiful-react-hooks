import React from 'react';
import { render, fireEvent, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useGlobalEvent from '../src/useGlobalEvent';

describe('useGlobalEvent', () => {
  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
  });

  it('should be a function', () => {
    expect(useGlobalEvent).to.be.a('function');
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useGlobalEvent('resize'));

    expect(result.current).to.be.a('function');
  });

  it('the returned function should be a setter for a callback to be performed when the event triggers', () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const onWindowResize = useGlobalEvent('resize');

      onWindowResize(spy);

      return null;
    };

    render(<TestComponent />);

    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);

    fireEvent(window, resizeEvent);

    expect(spy.called).to.be.true;
  });
});
