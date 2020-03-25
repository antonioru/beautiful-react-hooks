import { useState, useEffect } from 'react';
import safelyParseJson from './utils/safelyParseJson';
import isClient from './utils/isClient';


const useStorage = (type) => (initialValue) => {
  const [store, setStore] = useState(initialValue);

  let storageType = type;

  if (storageType !== 'local' && storageType !== 'session') {
    storageType = 'local';
  }

  storageType += 'Storage';

  // Setters and Getters
  const get = (key) => safelyParseJson(isClient ? window[storageType].getItem(key) : store[key]);
  const set = (key, value) => {
    const valueToStore = value instanceof Function ? value(safelyParseJson(store[key])) : value;

    if (isClient) {
      window[storageType].setItem(key, JSON.stringify(valueToStore));
    }

    return setStore((x) => ({
      ...x,
      [key]: valueToStore,
    }));
  };

  useEffect(() => {
    if (isClient) {
      Object
        .keys(store)
        .map((k) => window[storageType].setItem(k, JSON.stringify(store[k])));
    }
  }, [store]);

  let storage = store;

  if (isClient) {
    storage = window[storageType];
  }

  return {
    ...storage,
    get,
    set,
  };
};

export default useStorage;
