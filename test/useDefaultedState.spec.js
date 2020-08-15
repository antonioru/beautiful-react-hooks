import { cleanup, renderHook } from '@testing-library/react-hooks';
import useDefaultedState from '../dist/useDefaultedState';

describe('useDefaultedState', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useDefaultedState).to.be.a('function');
  });

  it('should return an array', () => {
    const { result } = renderHook(() => useDefaultedState(10));

    expect(result.current).to.be.an('array');
  });

  it('should default the state when null or undefined', () => {
    const defaultVal = 10;
    const { result } = renderHook(() => useDefaultedState(defaultVal));

    expect(result.current[0]).to.equal(defaultVal);
  });
});
