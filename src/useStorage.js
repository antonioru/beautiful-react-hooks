import { useState, useEffect } from 'react';
import safelyParseJson from './utils/safelyParseJson';
import isClient from './utils/isClient';
import isAPISupported from './utils/isAPISupported';
import isDevelopment from './utils/isDevelopment';

/**
 *
 */
const useStorage = (type) => {
  const storageName = `${type}Storage`;
  const storage = window[storageName];

  if (isClient && !isAPISupported(storageName)) {
    // eslint-disable-next-line no-console
    console.warn(`${storageName} is not supported`);
  }

  /**
   * hook
   */
  return (storageKey, defaultValue) => {
    if (!isClient) {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.warn(`Please be aware that ${storageName} could not be available during SSR`);
      }
      return [JSON.stringify(defaultValue), () => undefined];
    }

    const [value, setValue] = useState(
      safelyParseJson(storage.getItem(storageKey) || JSON.stringify(defaultValue)),
    );

    useEffect(() => {
      storage.setItem(storageKey, JSON.stringify(value));
    }, [storageKey, value]);

    return [value, setValue];
  };
};

export default useStorage;
