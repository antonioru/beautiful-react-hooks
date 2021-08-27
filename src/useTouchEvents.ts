import { MutableRefObject } from 'react'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import assignEventOnMount from './shared/assignEventOnMount'
import { CallbackSetter } from './shared/types'

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
const useTouchEvents = <T extends HTMLElement>(targetRef: MutableRefObject<T> = null): TouchEventsMap => {
  const [onTouchStartHandler, setOnTouchStartHandler] = useHandlerSetterRef<TouchCallback>()
  const [onTouchEndHandler, setOnTouchEndHandler] = useHandlerSetterRef<TouchCallback>()
  const [onTouchCancelHandler, setOnTouchCancelHandler] = useHandlerSetterRef<TouchCallback>()
  const [onTouchMoveHandler, setOnTouchMoveHandler] = useHandlerSetterRef<TouchCallback>()

  if (targetRef !== null && !safeHasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any touch event to the given ref')
  }

  assignEventOnMount(targetRef, onTouchStartHandler, 'touchstart')
  assignEventOnMount(targetRef, onTouchEndHandler, 'touchend')
  assignEventOnMount(targetRef, onTouchCancelHandler, 'touchcancel')
  assignEventOnMount(targetRef, onTouchMoveHandler, 'touchmove')

  return Object.freeze({
    onTouchStart: setOnTouchStartHandler,
    onTouchEnd: setOnTouchEndHandler,
    onTouchCancel: setOnTouchCancelHandler,
    onTouchMove: setOnTouchMoveHandler,
  })
}

export default useTouchEvents
