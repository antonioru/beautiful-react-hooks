import { useState, useEffect } from 'react';
import safelyParseJson from './utils/safelyParseJson';

/**
 * Save a value on local storage
 */
const useLocalStorage = (localStorageKey, defaultValue) => {
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
