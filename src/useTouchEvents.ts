import { RefObject } from 'react'
import { CallbackSetter } from './shared/types'
import useEvent from './useEvent'

export type TouchCallback = (touchEvent: TouchEvent) => any;

export type TouchEventsMap = {
  onTouchStart: CallbackSetter<TouchCallback>,
  onTouchEnd: CallbackSetter<TouchCallback>,
  onTouchCancel: CallbackSetter<TouchCallback>,
  onTouchMove: CallbackSetter<TouchCallback>,
}

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
const useTouchEvents = <T extends HTMLElement>(targetRef?: RefObject<T>): TouchEventsMap => {
  const target = targetRef || { current: window.document } as unknown as RefObject<HTMLElement>
  const onTouchStart = useEvent(target, 'touchstart')
  const onTouchEnd = useEvent(target, 'touchend')
  const onTouchCancel = useEvent(target, 'touchcancel')
  const onTouchMove = useEvent(target, 'touchmove')

  return Object.freeze({
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onTouchMove,
  })
}

export default useTouchEvents
