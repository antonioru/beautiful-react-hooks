import { useCallback, useRef } from 'react';

/**
 * Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
 * callback function and the second one is setter for that function.<br /><br />
 *
 * Although it function looks quite similar to the [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
 * hook, in this case the setter just makes sure the given callback is indeed a new function.<br /><br />
 * **Setting a callback ref does not force your component to re-render.**<br /><br />
 *
 * `createHandlerSetter` is useful when abstracting other hooks to possibly implement handlers setters.
 */
const createHandlerSetter = (handlerValue) => {
  const handlerRef = useRef(handlerValue);

  const setHandler = useCallback((nextCallback) => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
    }

    handlerRef.current = nextCallback;
  }, [handlerRef]);

  return [handlerRef, setHandler];
};

export default createHandlerSetter;
