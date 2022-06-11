import { cleanup, renderHook } from '@testing-library/react-hooks'
import useTouchEvents from '../dist/useTouchEvents'
import assertHook from './utils/assertHook'

describe('useTouchEvents', () => {
  beforeEach(() => cleanup())

  assertHook(useTouchEvents)

  it('should return an object of mouse-related callback setters', () => {
    const { result } = renderHook(() => useTouchEvents())

    expect(result.current).to.be.an('object').that.has.all.keys('onTouchStart', 'onTouchEnd', 'onTouchMove', 'onTouchCancel')
  })
})
