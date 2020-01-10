import { useState } from 'react';
import useGlobalEvent from './useGlobalEvent';

/**
 * Uses the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) to define
 * whether the browser is connected or not.
 */
const useOnlineState = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const whenOnline = useGlobalEvent('online', { capture: true });
  const whenOffline = useGlobalEvent('offline', { capture: true });


  whenOnline(() => {
    setIsOnline(true);
  });

  whenOffline(() => {
    setIsOnline(false);
  });

  return isOnline;
};

export default useOnlineState;
