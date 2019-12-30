import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import hasOwnProperty from './utils/hasOwnProperty';

const useIsomorphicMouseEvent = (ref, callbackRef, eventName) => {
  useEffect(() => {
    const cb = (...args) => {
      if (callbackRef.current) {
        callbackRef.current(...args);
      }
    };
    let target;

    if (ref !== null && !!ref.current) {
      target = ref.current;
    }

    if (ref === null) {
      target = document;
    }

    if (target && target.addEventListener) {
      target.addEventListener(eventName, cb);
    }

    return () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb);
      }
    };
  }, [callbackRef, ref]);
};

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
 * ```jsx harmony
 * const MyComponent = (props) => {
 *  const { myCallback } = props;
 *
 *  return <div onMouseDown={myCallback} />
 * }
 * ```
 *
 * **Please keep doing it**!
 *
 * ### Target ref usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const ref = useRef();
 *   const { onMouseMove } = useMouseEvents(ref);
 *   const [coordinates, setCoordinates] = useState([0, 0]);
 *
 *   // demo purposes only, in real-life scenario use onMouseMove prop instead
 *   onMouseMove((event) => {
 *     const nextCoords = [event.clientX, event.clientY];
 *     setCoordinates(nextCoords);
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       The current mouse coordinates within this div are:
 *       <p>x:{coordinates[0]} y:{coordinates[1]}</p>
 *     </div>
 *   );
 * }
 * ```
 * <br />
 *
 * ### Global events usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const [coordinates, setCoordinates] = useState([0, 0]);
 *   const { onMouseMove } = useMouseEvents();
 *
 *   // demo purposes only, in real-life scenario use onMouseMove prop instead
 *   onMouseMove((event) => {
 *     const nextCoords = [event.clientX, event.clientY];
 *     setCoordinates(nextCoords);
 *   });
 *
 *   return (
 *     <div style={style}>
 *       The current mouse coordinates within the document are:
 *       <p>x:{coordinates[0]} y:{coordinates[1]}</p>
 *     </div>
 *   );
 *};
 * ```
 */
const useMouseEvents = (ref = null) => {
  const [onMouseDownHandler, setOnMouseDown] = useCallbackRef();
  const [onMouseEnterHandler, setOnMouseEnter] = useCallbackRef();
  const [onMouseLeaveHandler, setOnMouseLeave] = useCallbackRef();
  const [onMouseMoveHandler, setOnMouseMove] = useCallbackRef();
  const [onMouseOutHandler, setOnMouseOut] = useCallbackRef();
  const [onMouseOverHandler, setOnMouseOver] = useCallbackRef();
  const [onMouseUpHandler, setOnMouseUp] = useCallbackRef();

  if (ref !== null && !hasOwnProperty(ref, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any mouse event to the given ref');
  }

  useIsomorphicMouseEvent(ref, onMouseDownHandler, 'mousedown');
  useIsomorphicMouseEvent(ref, onMouseEnterHandler, 'mouseenter');
  useIsomorphicMouseEvent(ref, onMouseLeaveHandler, 'mouseleave');
  useIsomorphicMouseEvent(ref, onMouseMoveHandler, 'mousemove');
  useIsomorphicMouseEvent(ref, onMouseOutHandler, 'mouseout');
  useIsomorphicMouseEvent(ref, onMouseOverHandler, 'mouseover');
  useIsomorphicMouseEvent(ref, onMouseUpHandler, 'mouseup');

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
