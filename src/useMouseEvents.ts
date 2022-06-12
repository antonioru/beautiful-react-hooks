import { RefObject } from 'react'
import useEvent from './useEvent'

/**
 * Returns a frozen object of callback setters to handle the mouse events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 */
const useMouseEvents = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>) => {
  const target = targetRef || { current: window.document } as unknown as RefObject<HTMLElement>
  const onMouseDown = useEvent(target, 'mousedown')
  const onMouseEnter = useEvent(target, 'mouseenter')
  const onMouseLeave = useEvent(target, 'mouseleave')
  const onMouseMove = useEvent(target, 'mousemove')
  const onMouseOut = useEvent(target, 'mouseout')
  const onMouseOver = useEvent(target, 'mouseover')
  const onMouseUp = useEvent(target, 'mouseup')

  return Object.freeze({
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  })
}

export default useMouseEvents
