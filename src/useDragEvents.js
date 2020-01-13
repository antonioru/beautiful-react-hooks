import { useEffect } from 'react';
import hasOwnProperty from './utils/hasOwnProperty';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import createHandlerSetter from './utils/createHandlerSetter';

const assignDragEventOnMount = (targetRef, handlerRef, eventName) => {
  useEffect(() => {
    const cb = (dragEvent) => {
      if (handlerRef.current) {
        handlerRef.current(dragEvent);
      }
    };

    if (targetRef.current) {
      targetRef.current.addEventListener(eventName, cb);
    }

    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

/**
 * Returns an object of callback setters to handle the drag-related events.
 * It accepts a DOM ref representing the events target (where attach the events to).
 *
 * Returned callback setters: `onDrag`, `onDrop`, `onDragEnter`, `onDragEnd`, `onDragExit`, `onDragLeave`,
 * `onDragOver`, `onDragStart`;
 */
const useDragEvents = (targetRef, setDraggable = true) => {
  const [onDrag, setOnDrag] = createHandlerSetter();
  const [onDrop, setOnDrop] = createHandlerSetter();
  const [onDragEnter, setOnDragEnter] = createHandlerSetter();
  const [onDragEnd, setOnDragEnd] = createHandlerSetter();
  const [onDragExit, setOnDragExit] = createHandlerSetter();
  const [onDragLeave, setOnDragLeave] = createHandlerSetter();
  const [onDragOver, setOnDragOver] = createHandlerSetter();
  const [onDragStart, setOnDragStart] = createHandlerSetter();

  if (targetRef !== null && !hasOwnProperty(targetRef, 'current')) {
    return createCbSetterErrorProxy('Unable to assign any drag event to the given ref');
  }

  useEffect(() => {
    if (setDraggable && targetRef.current && !targetRef.current.hasAttribute('draggable')) {
      targetRef.current.setAttribute('draggable', true);
    }
  }, []);

  assignDragEventOnMount(targetRef, onDrag, 'drag');
  assignDragEventOnMount(targetRef, onDrop, 'drop');
  assignDragEventOnMount(targetRef, onDragEnter, 'dragenter');
  assignDragEventOnMount(targetRef, onDragEnd, 'dragend');
  assignDragEventOnMount(targetRef, onDragExit, 'dragexit');
  assignDragEventOnMount(targetRef, onDragLeave, 'dragleave');
  assignDragEventOnMount(targetRef, onDragOver, 'dragover');
  assignDragEventOnMount(targetRef, onDragStart, 'dragstart');

  return Object.freeze({
    onDrag: setOnDrag,
    onDrop: setOnDrop,
    onDragEnter: setOnDragEnter,
    onDragEnd: setOnDragEnd,
    onDragExit: setOnDragExit,
    onDragLeave: setOnDragLeave,
    onDragOver: setOnDragOver,
    onDragStart: setOnDragStart,
  });
};

export default useDragEvents;
