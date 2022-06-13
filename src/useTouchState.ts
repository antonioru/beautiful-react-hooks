import { RefObject, useState } from 'react'
import useTouchEvents from './useTouchEvents'

/**
 * Returns the current touches from the touch move event.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useTouchState = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>) => {
  const [state, setState] = useState<TouchList>({ length: 0 } as TouchList)
  const { onTouchMove } = useTouchEvents<TElement>(targetRef)

  onTouchMove((event: TouchEvent) => {
    setState(event.touches)
  })

  return state
}

export default useTouchState
