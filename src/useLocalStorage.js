import { useState, useEffect } from 'react';
import safelyParseJson from './utils/safelyParseJson';
import isClient from './utils/isClient';
import isAPISupported from './utils/isAPISupported';

const errorMessage = 'localStorage is not supported, this could happen both because window.localStorage is not '
    + 'supported by your current browser or you\'re using the useLocalStorage hook whilst server side rendering.';

/**
 * Save a value on local storage
 */
const useLocalStorage = (localStorageKey, defaultValue) => {
  if (!isClient || !isAPISupported('localStorage')) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage);
    return [null, () => undefined];
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
