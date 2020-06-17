import { cleanup, renderHook, act } from '@testing-library/react-hooks';
import useValidatedState from '../dist/cjs/useValidatedState';

describe('useValidatedState', () => {
  const makeValidator = (value = true) => () => value;

  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useValidatedState).to.be.a('function');
  });

  it('should return an array of state, setState and validation', () => {
    const initialState = 10;
    const { result } = renderHook(() => useValidatedState(makeValidator(), initialState));

    expect(result.current).to.be.an('array');
    expect(result.current[0]).to.be.equal(initialState);
    expect(result.current[1]).to.a('function');
    expect(result.current[2]).to.an('object');
  });

  it('should return the validated state', () => {
    const initialState = 10;
    const { result } = renderHook(() => useValidatedState(makeValidator(true), initialState));
    const [, setState] = result.current;

    act(() => {
      setState(20);
    });

    expect(result.current[0]).to.equal(20);
    expect(result.current[2]).to.deep.equal({ changed: true, valid: true });
  });
});
