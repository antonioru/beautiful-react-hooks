import { cleanup, renderHook } from '@testing-library/react-hooks'
import useLongPress from '../dist/useLongPress'
import assertHook from './utils/assertHook'

describe('useLongPress', () => {
  beforeEach(() => cleanup())

  assertHook(useLongPress)

  it('should return a boolean value reporting whether the long-press event is happening as well as the handlers setters', () => {
    const ref = { current: document.createElement('div') }
    const { result } = renderHook(() => useLongPress(ref))

    expect(result.current.isLongPressing).to.be.a('boolean')
    expect(result.current.onLongPressStart).to.be.a('function')
    expect(result.current.onLongPressEnd).to.be.a('function')
  })
})
