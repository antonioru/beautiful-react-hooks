import { useLayoutEffect, useState, useRef } from 'react';
import isClient from './utils/isClient';
import isApiSupported from './utils/isAPISupported';

const defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0,
};
const errorMessage = 'IntersectionObserver is not supported, this could happen both because'
    + ' window.IntersectionObserver is not supported by'
    + ' your current browser or you\'re using the useViewportSpy hook whilst server side rendering.';

/**
 * Uses the IntersectionObserverMock API to tell whether the given DOM Element (from useRef) is visible within the
 * viewport.
 */
const useViewportSpy = (elementRef, options = defaultOptions, unsubscribeEarly= false) => {
  if (!isClient || !isApiSupported('IntersectionObserver')) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage);
    return null;
  }
  const isVisibleRef = useRef(false);
  const disconnected = useRef(false);
  const [isVisible, setIsVisible] = useState();

  useLayoutEffect(() => {
    if (!disconnected.current) {
      const observer = new window.IntersectionObserver((entries) => entries.forEach((item) => {
        const nextValue = item.isIntersecting;
        if (nextValue && !isVisibleRef.current) {
          setIsVisible(nextValue);
        }
      }), options);
      if (isVisibleRef.current && unsubscribeEarly) {
        observer.disconnect();
        disconnected.current = true;
      }
      observer.observe(elementRef.current);

      return () => {
        observer.disconnect(elementRef.current);
      };
    }
  }, [elementRef]);
  if (!isVisibleRef.current && isVisible) {
    isVisibleRef.current = isVisible;
  }
  return isVisibleRef.current;
};

export default useViewportSpy;
