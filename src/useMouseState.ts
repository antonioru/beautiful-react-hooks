import { type RefObject, useState } from 'react'
import useMouseEvents from './useMouseEvents.ts'

const createStateObject = (event: MouseEvent) => ({
  clientX: event.clientX,
  clientY: event.clientY,
  screenX: event.screenX,
  screenY: event.screenY
})

/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useMouseState = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>) => {
  const [state, setState] = useState({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 })
  const { onMouseMove } = useMouseEvents<TElement>(targetRef)

  onMouseMove((event: MouseEvent) => {
    const nextState = createStateObject(event)
    setState(nextState)
  })

  return state
}

export default useMouseState
