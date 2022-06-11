import { cleanup, renderHook } from '@testing-library/react-hooks'
import useDropZone from '../dist/useDropZone'
import assertHook from './utils/assertHook'

describe('useDropZone', () => {
  beforeEach(() => cleanup())

  assertHook(useDropZone)

  it('should return an object the state of the current dragging element', () => {
    const targetRef = { current: document.createElement('div') }
    const { result } = renderHook(() => useDropZone(targetRef))

    expect(result.current).to.be.an('object').that.has.all.deep.keys('isOver', 'onDrop')
  })
})
