import createHandlerSetter from './utils/createHandlerSetter';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import hasOwnProperty from './utils/hasOwnProperty';
import assignEventCallbackOnMountEffect from './utils/assignEventCallbackOnMountEffect';

/**
 * Returns a frozen object of callback setters to handle the mouse events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 */
const useMouseEvents = (targetRef = null) => {
  const [onMouseDownHandler, setOnMouseDown] = createHandlerSetter();
  const [onMouseEnterHandler, setOnMouseEnter] = createHandlerSetter();
  const [onMouseLeaveHandler, setOnMouseLeave] = createHandlerSetter();
  const [onMouseMoveHandler, setOnMouseMove] = createHandlerSetter();
  const [onMouseOutHandler, setOnMouseOut] = createHandlerSetter();
  const [onMouseOverHandler, setOnMouseOver] = createHandlerSetter();
  const [onMouseUpHandler, setOnMouseUp] = createHandlerSetter();

  if (targetRef !== null && !hasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any mouse event to the given ref');
  }

  assignEventCallbackOnMountEffect(targetRef, onMouseDownHandler, 'mousedown');
  assignEventCallbackOnMountEffect(targetRef, onMouseEnterHandler, 'mouseenter');
  assignEventCallbackOnMountEffect(targetRef, onMouseLeaveHandler, 'mouseleave');
  assignEventCallbackOnMountEffect(targetRef, onMouseMoveHandler, 'mousemove');
  assignEventCallbackOnMountEffect(targetRef, onMouseOutHandler, 'mouseout');
  assignEventCallbackOnMountEffect(targetRef, onMouseOverHandler, 'mouseover');
  assignEventCallbackOnMountEffect(targetRef, onMouseUpHandler, 'mouseup');

  return Object.freeze({
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp,
  });
};

export default useMouseEvents;
