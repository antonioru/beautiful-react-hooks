import { useLayoutEffect, useState } from 'react';

const defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0,
};

/**
 * Uses the IntersectionObserverMock API to tell whether the given DOM Element (from useRef) is visible within the
 * viewport.
 */
const useViewportSpy = (elementRef, options = defaultOptions) => {
  const [isVisible, setIsVisible] = useState();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((item) => {
      const nextValue = item.isIntersecting;
      setIsVisible(nextValue);
    }), options);

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect(elementRef.current);
    };
  }, [elementRef]);

  return isVisible;
};

export default useViewportSpy;
