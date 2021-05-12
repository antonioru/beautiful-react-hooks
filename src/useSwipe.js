import { useRef, useState } from 'react';
import useMouseEvents from './useMouseEvents';
import useTouchEvents from './useTouchEvents';
import { getDirection, getHorizontalDirection, getPointerCoordinates, getVerticalDirection } from './utils/swipeUtils';

const defaultOptions = {
  direction: 'both',
  threshold: 10,
  preventDefault: true,
};

const initialState = { swiping: false, direction: null, alphaX: 0, alphaY: 0, count: 0 };

const isEqual = (prev, next) => (
  prev.swiping === next.swiping
  && prev.direction === next.direction
  && prev.count === next.count
  && prev.alphaX === next.alphaX
  && prev.alphaY === next.alphaY
);

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

    if (isDraggingRef.current || (startingPointRef.current[0] !== -1 && startingPointRef.current[1] !== -1)) {
      const alpha = [startingPointRef.current[0] - clientX, startingPointRef.current[1] - clientY];

      if (opts.direction === 'both' && (Math.abs(alpha[0]) > opts.threshold || Math.abs(alpha[1]) > opts.threshold)) {
        isDraggingRef.current = true;

        const nextState = {
          alphaX: alpha[0],
          alphaY: alpha[1],
          count: state.count,
          swiping: true,
          direction: getDirection([clientX, clientY], startingPointRef.current, alpha),
        };

        if (!isEqual(nextState, state)) {
          setState(nextState);
        }
      }

      if (opts.direction === 'horizontal' && Math.abs(alpha[0]) > opts.threshold) {
        isDraggingRef.current = true;

        const nextState = {
          alphaX: alpha[0],
          alphaY: 0,
          count: state.count,
          swiping: true,
          direction: getHorizontalDirection(alpha[0]),
        };

        if (!isEqual(nextState, state)) {
          setState(nextState);
        }
      }

      if (opts.direction === 'vertical' && Math.abs(alpha[1]) > opts.threshold) {
        isDraggingRef.current = true;

        const nextState = {
          alphaY: alpha[1],
          alphaX: 0,
          count: state.count,
          swiping: true,
          direction: getVerticalDirection(alpha[1]),
        };

        if (!isEqual(nextState, state)) {
          setState(nextState);
        }
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
