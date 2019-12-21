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
    const { result } = renderHook(() => useDebouncedCallback(fn, 1000));

    expect(result.current).to.be.a('function');
  });
});
