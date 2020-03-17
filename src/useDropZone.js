import { useState } from 'react';
import useDragEvents from './useDragEvents';

const useDropZone = (targetRef) => {
  const { onDrop, onDragOver, onDragLeave } = useDragEvents(targetRef, false);
  const [isOver, setIsOver] = useState(false);

  onDragOver((event) => {
    event.preventDefault();
    setIsOver(true);
  });

  onDragLeave(() => {
    setIsOver(false);
  });

  return { isOver, onDrop };
};

export default useDropZone;
