import { RefObject } from 'react'
import useEvent from './useEvent'

/**
 * Returns a frozen object of callback setters to handle the touch events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useTouchEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useTouchEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useTouchEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 */
const useTouchEvents = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>, usePassiveEvents?: boolean) => {
  const target = targetRef || { current: window.document } as unknown as RefObject<TElement> // hackish but works
  const onTouchStart = useEvent<TouchEvent, TElement>(target, 'touchstart', { passive: usePassiveEvents })
  const onTouchEnd = useEvent<TouchEvent, TElement>(target, 'touchend', { passive: usePassiveEvents })
  const onTouchCancel = useEvent<TouchEvent, TElement>(target, 'touchcancel', { passive: usePassiveEvents })
  const onTouchMove = useEvent<TouchEvent, TElement>(target, 'touchmove', { passive: usePassiveEvents })

  return Object.freeze({
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onTouchMove,
  })
}

export default useTouchEvents
