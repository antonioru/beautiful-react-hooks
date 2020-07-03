import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import useMouseState from '../dist/useMouseState';

describe('useMouseState', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useMouseState).to.be.a('function');
  });

  it('should return a mouse coordinates reporting object', () => {
    const { result } = renderHook(() => useMouseState());

    expect(result.current).to.be.a('object').that.has.all.keys('clientX', 'clientY', 'screenY', 'screenY');
  });

  it('should update the mouse position whilst it moves', () => {
    const refMock = { current: document.createElement('div') };
    const positionMock = { clientX: 10, clientY: 10, screenX: 30, screenY: 30 };
    const { result } = renderHook(() => useMouseState(refMock));

    act(() => {
      const mouseEvent = new MouseEvent('mousemove', positionMock);
      refMock.current.dispatchEvent(mouseEvent);
    });

    expect(result.current).to.deep.equal(positionMock);
  });
});
