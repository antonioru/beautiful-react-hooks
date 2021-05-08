import { useEffect, useRef, useState } from 'react';
import createHandlerSetter from './utils/createHandlerSetter';
import useMouseEvents from './useMouseEvents';
import useTouchEvents from './useTouchEvents';
import { getDirection, getPointerCoordinates } from './utils/swipeUtils';

const defaultOptions = {
  threshold: 15,
  preventDefault: true,
};

/**
 * Very similar to useSwipe but doesn't cause re-rendering during swipe
 * @param targetRef
 * @param options
 * @return {undefined}
 */
const useSilentSwipeState = (targetRef = null, options = defaultOptions) => {
  const startingPointRef = useRef([-1, -1]);
  const directionRef = useRef(null);
  const isDraggingRef = useRef(false);
  const opts = { ...defaultOptions, ...(options || {}) };
  const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } = useMouseEvents(targetRef);
  const { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } = useTouchEvents(targetRef);
  const [direction, setDirection] = useState();

  const startSwipe = (event) => {
    const [clientX, clientY] = getPointerCoordinates(event);
    startingPointRef.current = [clientX, clientY];
    directionRef.current = null;

    if (opts.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const continueSwipe = (event) => {
    const [clientX, clientY] = getPointerCoordinates(event);

    if (opts.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (startingPointRef.current[0] !== -1 && startingPointRef.current[1] !== -1) {
      const alpha = [startingPointRef.current[0] - clientX, startingPointRef.current[1] - clientY];

      if (Math.abs(alpha[0]) > opts.threshold || Math.abs(alpha[1]) > opts.threshold) {
        isDraggingRef.current = true;
        directionRef.current = getDirection([clientX, clientY], startingPointRef.current, alpha);
      }
    }
  };

  const endSwipe = (event) => {
    if (isDraggingRef.current && directionRef.current) {
      if (opts.preventDefault) {
        event.preventDefault();
        event.stopPropagation();
      }

      setDirection(directionRef.current);
    }

    startingPointRef.current = [-1, -1];
    isDraggingRef.current = false;
    directionRef.current = null;
  };

  onMouseDown(startSwipe);
  onTouchStart(startSwipe);

  onMouseMove(continueSwipe);
  onTouchMove(continueSwipe);

  onMouseUp(endSwipe);
  onTouchEnd(endSwipe);

  onMouseLeave(endSwipe);
  onTouchCancel(endSwipe);

  return direction;
};

/**
 * useSwipeEvents
 * @param targetRef
 * @param options
 */
const useSwipeEvents = (targetRef = null, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) };
  const [onSwipeLeft, setOnSwipeLeft] = createHandlerSetter();
  const [onSwipeRight, setOnSwipeRight] = createHandlerSetter();
  const [onSwipeUp, setOnSwipeUp] = createHandlerSetter();
  const [onSwipeDown, setOnSwipeDown] = createHandlerSetter();
  const direction = useSilentSwipeState(targetRef, opts);

  const fnMap = {
    right: onSwipeRight.current,
    left: onSwipeLeft.current,
    up: onSwipeUp.current,
    down: onSwipeDown.current,
  };

  useEffect(() => {
    if (direction) {
      const cb = fnMap[direction];

      if (cb && typeof cb === 'function') {
        cb(direction);
      }
    }
  }, [direction]);

  return Object.freeze({
    onSwipeLeft: setOnSwipeLeft,
    onSwipeRight: setOnSwipeRight,
    onSwipeUp: setOnSwipeUp,
    onSwipeDown: setOnSwipeDown,
  });
};

export default useSwipeEvents;
