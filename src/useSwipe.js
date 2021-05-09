import { useRef, useState } from 'react';
import useMouseEvents from './useMouseEvents';
import useTouchEvents from './useTouchEvents';
import { getDirection, getHorizontalDirection, getPointerCoordinates, getVerticalDirection } from './utils/swipeUtils';

const defaultOptions = {
  direction: 'both',
  threshold: 15,
  preventDefault: true,
};

const initialState = { swiping: false, direction: null, alpha: 0, count: 0 };

/**
 * useSwipe hook
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

      if (opts.direction === 'both' && (Math.abs(alpha[0]) > opts.threshold || Math.abs(alpha[1]) > opts.threshold)) {
        isDraggingRef.current = true;

        setState((prevState) => ({
          ...prevState,
          swiping: true,
          direction: getDirection([clientX, clientY], startingPointRef.current, alpha),
          alpha,
        }));
      }

      if (opts.direction === 'horizontal' && Math.abs(alpha[0]) > opts.threshold) {
        isDraggingRef.current = true;

        setState((prevState) => ({
          ...prevState,
          swiping: true,
          direction: getHorizontalDirection(alpha[0]),
          alpha: alpha[0],
        }));
      }

      if (opts.direction === 'vertical' && Math.abs(alpha[1]) > opts.threshold) {
        isDraggingRef.current = true;

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
