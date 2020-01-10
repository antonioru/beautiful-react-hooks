import { renderHook, cleanup } from '@testing-library/react-hooks';
import useOnlineState from './useOnlineState';

describe('useOnlineState', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useOnlineState).to.be.a('function');
    expect(useOnlineState.prototype).to.be.empty;
  });

  it('should return a boolean value', () => {
    const { result } = renderHook(() => useOnlineState('resize'));

    expect(result.current).to.be.a('boolean');
  });
});
