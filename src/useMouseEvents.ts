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
const useMouseEvents = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>, passive?: boolean) => {
  const target = targetRef || { current: window.document } as unknown as RefObject<TElement>
  const onMouseDown = useEvent<MouseEvent, TElement>(target, 'mousedown', { passive })
  const onMouseEnter = useEvent<MouseEvent, TElement>(target, 'mouseenter', { passive })
  const onMouseLeave = useEvent<MouseEvent, TElement>(target, 'mouseleave', { passive })
  const onMouseMove = useEvent<MouseEvent, TElement>(target, 'mousemove', { passive })
  const onMouseOut = useEvent<MouseEvent, TElement>(target, 'mouseout', { passive })
  const onMouseOver = useEvent<MouseEvent, TElement>(target, 'mouseover', { passive })
  const onMouseUp = useEvent<MouseEvent, TElement>(target, 'mouseup', { passive })

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
