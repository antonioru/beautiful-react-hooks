import { useState } from 'react';
import useGlobalEvent from './useGlobalEvent';

/**
 * Uses the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) to define
 * whether the browser is connected or not.
 */
const useOnlineState = () => {
  // If the browser doesn't support `navigator.onLine`, it will always come out as false/undefined. And IE8 only
  // supports the online/offline events on document.body, rather than window. So we can properly detect if this hook
  // works fine with online/offline status on browsers by checking existence of `window.ononline`.
  const isSupported = 'ononline' in window;
  const [isOnline, setIsOnline] = useState(isSupported ? navigator.onLine : true);
  const whenOnline = useGlobalEvent('online', { capture: true });
  const whenOffline = useGlobalEvent('offline', { capture: true });

  if (!isSupported) {
    console.log('Please note: your device does not support the \'online\' event, you should avoid using useOnlineState');
  }

  whenOnline(() => {
    setIsOnline(true);
  });

  whenOffline(() => {
    setIsOnline(false);
  });

  return isOnline;
};

export default useOnlineState;
