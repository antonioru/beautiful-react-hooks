import { type RefObject, useState } from 'react'
import useTouchEvents from './useTouchEvents'

/**
 * Returns the current touches from the touch move event.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useTouchState = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [state, setState] = useState<TouchList>({ length: 0 } as TouchList)
  const { onTouchStart, onTouchMove } = useTouchEvents<TElement>(targetRef)

  onTouchStart((event: TouchEvent) => {
    setState(event.touches)
  })

  onTouchMove((event: TouchEvent) => {
    setState(event.touches)
  })

  return state
}

export default useTouchState
