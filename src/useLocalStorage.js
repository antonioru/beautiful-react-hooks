import { useState, useEffect } from 'react';
import safelyParseJson from './utils/safelyParseJson';
import isClient from './utils/isClient';
import isAPISupported from './utils/isAPISupported';

const errorMessageSSR = 'localStorage is not supported, this could happen because you\'re using the useLocalStorage'
    + ' hook whilst server side rendering.';

const errorMessageIsNotSupported = 'localStorage is not supported, this could happen because window.localStorage is '
    + 'not supported by your current browser';

/**
 * Save a value on local storage
 */
const useLocalStorage = (localStorageKey, defaultValue) => {
  if (!isClient) {
    // eslint-disable-next-line no-console
    console.warn(errorMessageSSR);
    return [JSON.stringify(defaultValue), () => undefined];
  }

  if (!isAPISupported('localStorage')) {
    // eslint-disable-next-line no-console
    console.warn(errorMessageIsNotSupported);
    return [JSON.stringify(defaultValue), () => undefined];
  }

  const [value, setValue] = useState(
    safelyParseJson(
      window.localStorage.getItem(localStorageKey)
      || JSON.stringify(defaultValue),
    ),
  );

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
