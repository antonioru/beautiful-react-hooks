import { renderHook, cleanup } from '@testing-library/react-hooks';
import useLifecycle from './useLifecycle';

describe('useLifecycle', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useLifecycle).to.be.a('function');
    expect(useLifecycle.prototype).to.be.empty;
  });

  it('should return a single object', () => {
    const { result } = renderHook(() => useLifecycle());

    expect(result.current).to.be.an('object');
  });

  it('the returned function should wrap other lifecycle hooks', () => {
    const { result } = renderHook(() => useLifecycle());

    expect(result.current).to.be.an('object').that.has.all.keys('onMount', 'onUnmount');
  });
});
