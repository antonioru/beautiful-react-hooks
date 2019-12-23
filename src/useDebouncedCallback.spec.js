import { renderHook, cleanup } from '@testing-library/react-hooks';
import useDebouncedCallback from './useDebouncedCallback';

describe('useDebouncedCallback', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useDebouncedCallback).to.be.a('function');
    expect(useDebouncedCallback.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const fn = () => 0;
    const { result } = renderHook(() => useDebouncedCallback(fn));

    expect(result.current).to.be.a('function');
  });

  it('should return a debounced function', () => {
    const { result } = renderHook(() => useDebouncedCallback(() => null, 1000));

    expect(result.current.cancel).to.be.a('function');
    expect(result.current.flush).to.be.a('function');
  });
});
