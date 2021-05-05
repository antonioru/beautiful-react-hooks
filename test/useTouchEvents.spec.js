import { cleanup, renderHook } from '@testing-library/react-hooks';
import useTouchEvents from '../dist/useTouchEvents';

describe('useTouchEvents', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useTouchEvents).to.be.a('function');
  });

  it('should return an object of mouse-related callback setters', () => {
    const { result } = renderHook(() => useTouchEvents());

    expect(result.current).to.be.an('object').that.has.all.keys('onTouchStart', 'onTouchEnd', 'onTouchMove', 'onTouchCancel');
  });
});
