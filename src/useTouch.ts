import { type RefObject } from 'react'
import useTouchEvents, { type UseTouchEventsReturn } from './useTouchEvents'
import useTouchState from './useTouchState'

/**
 * Returns an array where the first item is the touch state from the `useTouchState` hook and the second item
 * is the object of callback setters from the `useTouchEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useTouch = <TElement extends HTMLElement>(targetRef: RefObject<TElement> | undefined = undefined) => {
  const state = useTouchState<TElement>(targetRef)
  const events = useTouchEvents<TElement>(targetRef)

  return [state, events] as [TouchList, Readonly<UseTouchEventsReturn>]
}

export default useTouch
