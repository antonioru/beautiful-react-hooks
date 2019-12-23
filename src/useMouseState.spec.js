import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import useMouseState from './useMouseState';

describe('useMouseState', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useMouseState).to.be.a('function');
    expect(useMouseState.prototype).to.be.empty;
  });

  it('should return a single object having the current mouse position', () => {
    const { result } = renderHook(() => useMouseState());

    expect(result.current).to.be.a('object').that.has.all.keys('clientX', 'clientY', 'screenY', 'screenY');
  });

  it('should update mouse position whilst it moves', () => {
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
