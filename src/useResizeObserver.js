import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import isApiSupported from './utils/isAPISupported';
import isClient from './utils/isClient';

// eslint-disable-next-line max-len
const errorMessage = 'ResizeObserver is not supported, this could happen both because window.ResizeObserver is not supported by your current browser or you\'re using the useResizeObserver hook whilst server side rendering.';

/**
 * Uses the ResizeObserver API to observe changes within the given HTML Element DOM Rect.
 * @param elementRef
 * @param debounceTimeout
 * @returns {undefined}
 */
const useResizeObserver = (elementRef, debounceTimeout = 100) => {
  const isSupported = isApiSupported('ResizeObserver');
  const observerRef = useRef(null);
  const [DOMRect, setDOMRect] = useState();

  if (isClient && !isSupported) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage);
  }

  // creates the observer reference on mount
  useEffect(() => {
    if (isSupported) {
      const fn = debounce((entries) => {
        const { bottom, height, left, right, top, width } = entries[0].contentRect;

        setDOMRect({ bottom, height, left, right, top, width });
      }, debounceTimeout);

      observerRef.current = new ResizeObserver(fn);
    }

    return () => {
      if (isSupported && observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, []);

  // observes on the provided element ref
  useEffect(() => {
    if (isSupported && elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  }, [elementRef.current]);

  return DOMRect;
};

export default useResizeObserver;
