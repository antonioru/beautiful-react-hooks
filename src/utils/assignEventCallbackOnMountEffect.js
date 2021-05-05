import { useEffect } from 'react';

const assignEventCallbackOnMountEffect = (targetRef, handlerRef, eventName) => {
  useEffect(() => {
    const cb = (mouseEvent) => {
      if (handlerRef.current) {
        handlerRef.current(mouseEvent);
      }
    };
    let target;

    if (targetRef !== null && !!targetRef.current) {
      target = targetRef.current;
    }

    if (targetRef === null) {
      target = document;
    }

    if (target && target.addEventListener) {
      target.addEventListener(eventName, cb);
    }

    return () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

export default assignEventCallbackOnMountEffect;
