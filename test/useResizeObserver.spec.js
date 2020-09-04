import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import useResizeObserver from '../dist/useResizeObserver';
import ResizeObserverMock from './mocks/ResizeObserver.mock';
import promiseDelay from './utils/promiseDelay';

describe('useResizeObserver', () => {
  const originalRO = global.ResizeObserver;

  before(() => {
    global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
  });

  beforeEach(cleanup);

  after(() => {
    global.ResizeObserver = window.ResizeObserver = originalRO;
  });

  it('should be a function', () => {
    expect(useResizeObserver).to.be.a('function');
  });

  it('should return undefined when first initialised', () => {
    const refMock = { current: document.createElement('div') };
    const { result } = renderHook(() => useResizeObserver(refMock, 100));

    expect(result.current).to.be.undefined;
  });

  it('should return a single function', async () => {
    const refMock = { current: document.createElement('div') };
    const { result, rerender } = renderHook(() => useResizeObserver(refMock, 0));

    act(() => {
      ResizeObserver.simulateResize(refMock.current);
    });

    rerender();

    await promiseDelay(250); // wait 250ms to let the debounced fn to perform

    expect(result.current).to.be.an('object');
  });
});
