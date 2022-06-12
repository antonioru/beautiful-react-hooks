import { RefObject, useState } from 'react'
import useTouchEvents from './useTouchEvents'

export type TouchState = TouchList | { length: 0 }

/**
 * Returns the current touches from the touch move event.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useTouchState = <T extends HTMLElement>(targetRef?: RefObject<T>): TouchState => {
  const [state, setState] = useState<TouchState>({ length: 0 })
  const { onTouchMove } = useTouchEvents(targetRef)

  onTouchMove((event: TouchEvent) => {
    setState(event.touches)
  })

  return state
}

export default useTouchState
