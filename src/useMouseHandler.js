import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';

/**
 * Returns a series of callback setter to possibly handle the most used mouse events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 *
 * ### Target ref usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const [coordinates, setCoordinates] = useState([0, 0]);
 *   const { onMouseMove } = useMouseHandler();
 *
 *   onMouseMove((event) => {
 *     const nextCoords = [event.clientX, event.clientY];
 *     setCoordinates(nextCoords);
 *   });
 *
 *   return (
 *     <div style={style}>
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
 *   const { onMouseMove } = useMouseHandler();
 *
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
const useMouseHandler = (ref = null) => {
  let target;
  const [onMouseDownHandler, setOnMouseDown] = useCallbackRef();
  const [onMouseEnterHandler, setOnMouseEnter] = useCallbackRef();
  const [onMouseLeaveHandler, setOnMouseLeave] = useCallbackRef();
  const [onMouseMoveHandler, setOnMouseMove] = useCallbackRef();
  const [onMouseOutHandler, setOnMouseOut] = useCallbackRef();
  const [onMouseOverHandler, setOnMouseOver] = useCallbackRef();
  const [onMouseUpHandler, setOnMouseUp] = useCallbackRef();

  useEffect(() => {
    if (ref !== null && !!ref.current) {
      target = ref.current;
    }

    if (ref === null) {
      target = document;
    }

    if (target) {
      if (onMouseDownHandler.current) {
        target.addEventListener('mousedown', onMouseDownHandler.current);
      }
      if (onMouseEnterHandler.current) {
        target.addEventListener('mouseenter', onMouseEnterHandler.current);
      }
      if (onMouseLeaveHandler.current) {
        target.addEventListener('mouseleave', onMouseLeaveHandler.current);
      }
      if (onMouseMoveHandler.current) {
        target.addEventListener('mousemove', onMouseMoveHandler.current);
      }
      if (onMouseOutHandler.current) {
        target.addEventListener('mouseout', onMouseOutHandler.current);
      }
      if (onMouseOverHandler.current) {
        target.addEventListener('mouseover', onMouseOverHandler.current);
      }
      if (onMouseUpHandler.current) {
        target.addEventListener('mouseup', onMouseUpHandler.current);
      }
    }

    return () => {
      if (target) {
        target.removeEventListener('mousedown', onMouseDownHandler.current);
        target.removeEventListener('mouseenter', onMouseEnterHandler.current);
        target.removeEventListener('mouseleave', onMouseLeaveHandler.current);
        target.removeEventListener('mousemove', onMouseMoveHandler.current);
        target.removeEventListener('mouseout', onMouseOutHandler.current);
        target.removeEventListener('mouseover', onMouseOverHandler.current);
        target.removeEventListener('mouseup', onMouseUpHandler.current);
      }
    };
  }, [ref, onMouseDownHandler, onMouseEnterHandler, onMouseLeaveHandler, onMouseMoveHandler, onMouseOutHandler,
    onMouseOverHandler, onMouseUpHandler,
  ]);

  return {
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp,
  };
};

export default useMouseHandler;
