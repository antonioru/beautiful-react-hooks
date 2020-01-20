import { renderHook, cleanup } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  const mediaQueryListMock = {
    listeners: {},
    matches: true,
    addListener(cb) {
      this.listeners.cb = cb;
    },
    removeListener() {
      delete this.listeners.cb;
    },
  };

  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useMediaQuery).to.be.a('function');
  });

  it('should return a boolean value', () => {
    window.matchMedia = () => (mediaQueryListMock);
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).to.be.a('boolean');

    delete window.matchMedia;
  });

  it('should return an error when the window.matchMedia API is not supported', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).to.be.a('object');
    expect(result.current.someProp).to.be.a('object').that.has.key('error');
    expect(result.current.onSomething).to.be.a('function').that.throws;
  });
});
