import { renderHook, cleanup } from '@testing-library/react-hooks';
import useDropZone from '../dist/cjs/useDropZone';

describe('useDropZone', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useDropZone).to.be.a('function');
  });

  it('should return an object the state of the current dragging element', () => {
    const targetRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useDropZone(targetRef));

    expect(result.current).to.be.an('object').that.has.all.deep.keys('isOver', 'onDrop');
  });
});
