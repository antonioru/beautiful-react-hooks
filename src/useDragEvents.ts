import { MutableRefObject, useEffect } from 'react'
import safeHasOwnProperty from './shared/safeHasOwnProperty'
import createCbSetterErrorProxy from './shared/createCbSetterErrorProxy'
import useHandlerSetterRef from './shared/useHandlerSetterRef'
import { CallbackSetter } from './shared/types'

const assignDragEventOnMount = <T extends HTMLElement>
  (targetRef: MutableRefObject<T>, handlerRef: MutableRefObject<CallbackSetter<DragEvent>>, eventName: string) => {
  useEffect(() => {
    const cb = (dragEvent: DragEvent) => {
      if (handlerRef && handlerRef.current) {
        handlerRef.current(dragEvent)
      }
    }

    if (targetRef.current) {
      targetRef.current.addEventListener(eventName, cb)
    }

    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener(eventName, cb)
      }
    }
  }, [])
}

type DragEventCallback = (event: DragEvent) => any;

type DragEventsMap = {
  readonly onDrag: CallbackSetter<DragEventCallback>,
  readonly onDrop: CallbackSetter<DragEventCallback>,
  readonly onDragEnter: CallbackSetter<DragEventCallback>,
  readonly onDragEnd: CallbackSetter<DragEventCallback>,
  readonly onDragExit: CallbackSetter<DragEventCallback>,
  readonly onDragLeave: CallbackSetter<DragEventCallback>,
  readonly onDragOver: CallbackSetter<DragEventCallback>,
  readonly onDragStart: CallbackSetter<DragEventCallback>,
}

/**
 * Returns an object of callback setters to handle the drag-related events.
 * It accepts a DOM ref representing the events target (where attach the events to).
 *
 * Returned callback setters: `onDrag`, `onDrop`, `onDragEnter`, `onDragEnd`, `onDragExit`, `onDragLeave`,
 * `onDragOver`, `onDragStart`;
 */
const useDragEvents = <T extends HTMLElement>(targetRef: MutableRefObject<T>, setDraggable: boolean = true): DragEventsMap => {
  const [onDrag, setOnDrag] = useHandlerSetterRef<DragEventCallback>()
  const [onDrop, setOnDrop] = useHandlerSetterRef<DragEventCallback>()
  const [onDragEnter, setOnDragEnter] = useHandlerSetterRef<DragEventCallback>()
  const [onDragEnd, setOnDragEnd] = useHandlerSetterRef<DragEventCallback>()
  const [onDragExit, setOnDragExit] = useHandlerSetterRef<DragEventCallback>()
  const [onDragLeave, setOnDragLeave] = useHandlerSetterRef<DragEventCallback>()
  const [onDragOver, setOnDragOver] = useHandlerSetterRef<DragEventCallback>()
  const [onDragStart, setOnDragStart] = useHandlerSetterRef<DragEventCallback>()

  if (targetRef !== null && !safeHasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any drag event to the given ref')
  }

  useEffect(() => {
    if (setDraggable && targetRef.current && !targetRef.current.hasAttribute('draggable')) {
      targetRef.current.setAttribute('draggable', String(true))
    }
  }, [])

  assignDragEventOnMount(targetRef, onDrag, 'drag')
  assignDragEventOnMount(targetRef, onDrop, 'drop')
  assignDragEventOnMount(targetRef, onDragEnter, 'dragenter')
  assignDragEventOnMount(targetRef, onDragEnd, 'dragend')
  assignDragEventOnMount(targetRef, onDragExit, 'dragexit')
  assignDragEventOnMount(targetRef, onDragLeave, 'dragleave')
  assignDragEventOnMount(targetRef, onDragOver, 'dragover')
  assignDragEventOnMount(targetRef, onDragStart, 'dragstart')

  return Object.freeze({
    onDrag: setOnDrag,
    onDrop: setOnDrop,
    onDragEnter: setOnDragEnter,
    onDragEnd: setOnDragEnd,
    onDragExit: setOnDragExit,
    onDragLeave: setOnDragLeave,
    onDragOver: setOnDragOver,
    onDragStart: setOnDragStart,
  })
}

export default useDragEvents
