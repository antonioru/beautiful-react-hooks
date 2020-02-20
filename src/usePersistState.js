import React from 'react';

import safeParser from './utils/safeParser';

const usePersistState = (localStorageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    safeParser(
      window.localStorage.getItem(localStorageKey)
        || JSON.stringify(defaultValue),
    ),
  );

  React.useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};

export default usePersistState;
