import { renderHook, cleanup } from '@testing-library/react-hooks';
import useDrag from '../src/useDrag';

describe('useDrag', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useDrag).to.be.a('function');
  });

  it('should return an object the state of the current dragging element', () => {
    const targetRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useDrag(targetRef));

    expect(result.current).to.be.an('boolean');
  });
});
