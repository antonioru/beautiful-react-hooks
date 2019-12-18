import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import useCallbackRef from './useCallbackRef';

describe('useCallbackRef', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useCallbackRef).to.be.a('function');
    expect(useCallbackRef.prototype).to.be.empty;
  });

  it('should return an array of 2 elements', () => {
    const { result } = renderHook(() => useCallbackRef());

    expect(result.current).to.be.an.instanceOf(Array);
    expect(result.current.length).to.equal(2);
  });

  it('should return the reference to callback', () => {
    const { result } = renderHook(() => useCallbackRef());
    const [callbackRef] = result.current;

    expect(callbackRef.current).to.be.undefined;
    expect(callbackRef).to.be.an('object').that.has.all.keys('current');
  });

  it('should return a setter for the callback', () => {
    const { result } = renderHook(() => useCallbackRef());
    const [callbackRef, setCallbackRef] = result.current;

    const fooCallback = () => undefined;

    expect(setCallbackRef).to.be.a('function');

    act(() => {
      setCallbackRef(fooCallback);
    });

    expect(callbackRef.current).to.equal(fooCallback);
  });

  it('the setter should avoid changing the ref current\'s value when the given callback is invalid', () => {
    const { result } = renderHook(() => useCallbackRef());
    const [callbackRef, setCallbackRef] = result.current;

    act(() => {
      setCallbackRef({ foo: 'bar' });
    });

    expect(callbackRef.current).to.be.undefined;
  });
});
