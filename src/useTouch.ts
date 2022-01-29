import { RefObject } from 'react'
import useTouchEvents, { TouchEventsMap } from './useTouchEvents'
import useTouchState, { TouchState } from './useTouchState'

/**
 * Returns an array where the first item is the touch state from the `useTouchState` hook and the second item
 * is the object of callback setters from the `useTouchEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useTouch = <T extends HTMLElement>(targetRef: RefObject<T> = null): [TouchState, TouchEventsMap] => {
  const state = useTouchState(targetRef)
  const events = useTouchEvents(targetRef)

  return [state, events]
}

export default useTouch
