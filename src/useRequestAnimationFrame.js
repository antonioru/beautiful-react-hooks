import { useCallback, useRef } from 'react';
import createHandlerSetter from './utils/createHandlerSetter';

const defaultOptions = { increment: 1, startAt: 0, finishAt: 100 };

/**
 * Takes care of running an animating function, provided as the first argument, while keeping track of its progress.
 */
const useRequestAnimationFrame = (func, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...options };
  const progress = useRef(opts.startAt);
  const [onFinish, setOnFinish] = createHandlerSetter();

  // eslint-disable-next-line no-use-before-define
  const next = () => window.requestAnimationFrame(step);

  const step = useCallback(() => {
    if (progress.current <= opts.finishAt || opts.finishAt === -1) {
      func(progress.current, next);
      progress.current += opts.increment;
    } else if (onFinish.current) {
      onFinish.current();
    }
  }, [func, opts.finishAt, opts.increment, progress.current, onFinish.current]);

  if (progress.current <= opts.startAt) {
    next();
  }

  return setOnFinish;
};

export default useRequestAnimationFrame;
