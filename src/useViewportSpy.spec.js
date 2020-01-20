import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import useViewportSpy from './useViewportSpy';
import IntersectionObserverMock from '../test/utils/IntersectionObserverMock';

describe('useViewportSpy', () => {
  before(() => {
    global.IntersectionObserver = IntersectionObserverMock;
  });

  beforeEach(cleanup);

  after(() => {
    delete global.IntersectionObserver;
  });

  it('should be a function', () => {
    expect(useViewportSpy).to.be.a('function');
  });

  it('should return a single function', () => {
    const refMock = { current: document.createElement('div') };
    const { result } = renderHook(() => useViewportSpy(refMock));

    expect(result.current).to.be.a('boolean');
  });

  it('should return a single function', () => {
    const refMock = { current: document.createElement('div') };
    const { result } = renderHook(() => useViewportSpy(refMock, { threshold: 0.2 }));

    act(() => {
      IntersectionObserverMock.simulateObservation();
    });

    expect(result.current).to.be.true;
  });
});
