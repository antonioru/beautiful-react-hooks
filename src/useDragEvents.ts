import { RefObject, useEffect } from 'react'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import useEvent from './useEvent'

/**
 * Returns an object of callback setters to handle the drag-related events.
 * It accepts a DOM ref representing the events target (where attach the events to).
 *
 * Returned callback setters: `onDrag`, `onDrop`, `onDragEnter`, `onDragEnd`, `onDragExit`, `onDragLeave`,
 * `onDragOver`, `onDragStart`;
 */
const useDragEvents = <TElement extends HTMLElement>(targetRef: RefObject<TElement>, isDraggable: boolean = true) => {
  const onDrag = useEvent<DragEvent, TElement>(targetRef, 'drag')
  const onDrop = useEvent<DragEvent, TElement>(targetRef, 'drop')
  const onDragEnter = useEvent<DragEvent, TElement>(targetRef, 'dragenter')
  const onDragEnd = useEvent<DragEvent, TElement>(targetRef, 'dragend')
  const onDragExit = useEvent<DragEvent, TElement>(targetRef, 'dragexit')
  const onDragLeave = useEvent<DragEvent, TElement>(targetRef, 'dragleave')
  const onDragOver = useEvent<DragEvent, TElement>(targetRef, 'dragover')
  const onDragStart = useEvent<DragEvent, TElement>(targetRef, 'dragstart')

  if (targetRef !== null && !safeHasOwnProperty(targetRef, 'current')) {
    throw new Error('Unable to assign any drag event to the given ref')
  }

  useEffect(() => {
    if (isDraggable && targetRef.current && !targetRef.current.hasAttribute('draggable')) {
      targetRef.current.setAttribute('draggable', String(true))
    }
  }, [])

  return Object.freeze({
    onDrag,
    onDrop,
    onDragEnter,
    onDragEnd,
    onDragExit,
    onDragLeave,
    onDragOver,
    onDragStart,
  })
}

export default useDragEvents
