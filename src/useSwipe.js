import { useRef, useState } from 'react';
import useMouseEvents from './useMouseEvents';
import useTouchEvents from './useTouchEvents';

const defaultOptions = {
  direction: 'both',
  threshold: 15,
  preventDefault: true,
};

const initialState = { swiping: false, direction: null, alpha: 0, count: 0 };

const getPointerCoordinates = (event) => {
  if (event.touches) {
    const { clientX, clientY } = event.touches[0];
    return [clientX, clientY];
  }

  const { clientX, clientY } = event;

  return [clientX, clientY];
};

const getHorizontalDirection = (alpha) => (alpha < 0 ? 'right' : 'left');
const getVerticalDirection = (alpha) => (alpha < 0 ? 'down' : 'up');
const getDirection = (currentPoint, startingPoint, alpha) => {
  const alphaX = startingPoint[0] - currentPoint[0];
  const alphaY = startingPoint[1] - currentPoint[1];
  if (Math.abs(alphaX) > Math.abs(alphaY)) {
    return getHorizontalDirection(alpha[0]);
  }

  return getVerticalDirection(alpha[1]);
};

/**
 * useSwipe hook, provides funcionalities
 */
const useSwipe = (targetRef = null, options = defaultOptions) => {
  const [state, setState] = useState(initialState);
  const startingPointRef = useRef([-1, -1]);
  const isDraggingRef = useRef(false);
  const opts = { ...defaultOptions, ...(options || {}) };
  const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } = useMouseEvents(targetRef);
  const { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } = useTouchEvents(targetRef);

  const startSwipe = (event) => {
    const [clientX, clientY] = getPointerCoordinates(event);
    startingPointRef.current = [clientX, clientY];

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
      isDraggingRef.current = true;

      if (opts.direction === 'both' && (Math.abs(alpha[0]) > opts.threshold || Math.abs(alpha[1]) > opts.threshold)) {
        setState((prevState) => ({
          ...prevState,
          swiping: true,
          direction: getDirection([clientX, clientY], startingPointRef.current, alpha),
          alpha,
        }));
      }

      if (opts.direction === 'horizontal' && Math.abs(alpha[0]) > opts.threshold) {
        setState((prevState) => ({
          ...prevState,
          swiping: true,
          direction: getHorizontalDirection(alpha[0]),
          alpha: alpha[0],
        }));
      }

      if (opts.direction === 'vertical' && Math.abs(alpha[1]) > opts.threshold) {
        setState((prevState) => ({
          ...prevState,
          swiping: true,
          direction: getVerticalDirection(alpha[1]),
          alpha: alpha[1],
        }));
      }
    }
  };

  const endSwipe = (event) => {
    if (isDraggingRef.current) {
      if (opts.preventDefault) {
        event.preventDefault();
        event.stopPropagation();
      }

      setState((prevState) => ({
        ...prevState,
        swiping: false,
        count: state.count + 1,
      }));
    }

    startingPointRef.current = [-1, -1];
    isDraggingRef.current = false;
  };

  onMouseDown(startSwipe);
  onTouchStart(startSwipe);

  onMouseMove(continueSwipe);
  onTouchMove(continueSwipe);

  onMouseUp(endSwipe);
  onTouchEnd(endSwipe);

  onMouseLeave(endSwipe);
  onTouchCancel(endSwipe);

  return state;
};

export default useSwipe;
