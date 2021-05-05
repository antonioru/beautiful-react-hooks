import createHandlerSetter from './utils/createHandlerSetter';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import hasOwnProperty from './utils/hasOwnProperty';
import assignEventCallbackOnMountEffect from './utils/assignEventCallbackOnMountEffect';

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
const useTouchEvents = (targetRef = null) => {
  const [onTouchStartHandler, setOnTouchStartHandler] = createHandlerSetter();
  const [onTouchEndHandler, setOnTouchEndHandler] = createHandlerSetter();
  const [onTouchCancelHandler, setOnTouchCancelHandler] = createHandlerSetter();
  const [onTouchMoveHandler, setOnTouchMoveHandler] = createHandlerSetter();

  if (targetRef !== null && !hasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any touch event to the given ref');
  }

  assignEventCallbackOnMountEffect(targetRef, onTouchStartHandler, 'touchstart');
  assignEventCallbackOnMountEffect(targetRef, onTouchEndHandler, 'touchend');
  assignEventCallbackOnMountEffect(targetRef, onTouchCancelHandler, 'touchcancel');
  assignEventCallbackOnMountEffect(targetRef, onTouchMoveHandler, 'touchmove');

  return Object.freeze({
    onTouchStart: setOnTouchStartHandler,
    onTouchEnd: setOnTouchEndHandler,
    onTouchCancel: setOnTouchCancelHandler,
    onTouchMove: setOnTouchMoveHandler,
  });
};

export default useTouchEvents;
