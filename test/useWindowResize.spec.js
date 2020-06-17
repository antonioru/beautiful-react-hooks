import React from 'react';
import { render, fireEvent, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useWindowResize from '../dist/cjs/useWindowResize';

describe('useWindowResize', () => {
  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
  });

  it('should be a function', () => {
    expect(useWindowResize).to.be.a('function');
  });

  it('should return a single function', () => {
    const { result } = renderHook(() => useWindowResize());

    expect(result.current).to.be.a('function');
  });

  it('the returned function should be a setter for a callback to be performed when window resizes', () => {
    const spy = sinon.spy();

    const TestComponent = () => {
      const onWindowResize = useWindowResize();

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
