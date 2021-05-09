import { cleanup, renderHook } from '@testing-library/react-hooks';
import useSwipeEvents from '../dist/useSwipeEvents';

describe('useSwipeEvents', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useSwipeEvents).to.be.a('function');
  });

  it('should return the swipe state', () => {
    const { result } = renderHook(() => useSwipeEvents());

    expect(result.current).to.be.an('object').that.has.all.keys('onSwipeLeft', 'onSwipeRight', 'onSwipeUp', 'onSwipeDown');
  });
});
