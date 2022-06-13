import { RefObject, useRef } from 'react'
import { CallbackSetter, SomeCallback } from '../shared/types'

/**
 * Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
 * callback function and the second one is a reference to a function for can change the first ref.
 *
 * Although it looks quite similar to [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
 * in this case the setter just makes sure the given callback is indeed a new function.
 * **Setting a callback ref does not force your component to re-render.**
 *
 * `createHandlerSetter` is meant to be used internally to abstracting other hooks.
 * Don't use this function to abstract hooks outside this library as it changes quite often
 */
const createHandlerSetter = <TArgs, TResult = void>(callback?: SomeCallback<TArgs, TResult>) => {
  const handlerRef = useRef(callback)

  const setHandler = useRef((nextCallback: SomeCallback<TArgs, TResult>) => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function')
    }

    handlerRef.current = nextCallback
  })

  return [handlerRef, setHandler.current] as [RefObject<SomeCallback<TArgs, TResult>>, CallbackSetter<TArgs>]
}

export default createHandlerSetter
