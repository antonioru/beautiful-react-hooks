import { cleanup, renderHook } from '@testing-library/react-hooks'
import useSwipeEvents from '../dist/useSwipeEvents'
import assertHook from './utils/assertHook'

describe('useSwipeEvents', () => {
  beforeEach(() => cleanup())

  assertHook(useSwipeEvents)

  it('should return the swipe handler setters', () => {
    const { result } = renderHook(() => useSwipeEvents())

    expect(result.current).to.be.an('object').that.has.all.keys(
      'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'onSwipeUp', 'onSwipeDown'
    )
  })
})
