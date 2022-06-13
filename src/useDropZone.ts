import { RefObject, useState } from 'react'
import useDragEvents from './useDragEvents'

const useDropZone = <TElement extends HTMLElement>(targetRef: RefObject<TElement>) => {
  const { onDrop, onDragOver, onDragLeave } = useDragEvents<TElement>(targetRef, false)
  const [isOver, setIsOver] = useState(false)

  onDragOver((event: DragEvent) => {
    event.preventDefault()
    setIsOver(true)
  })

  onDragLeave(() => {
    setIsOver(false)
  })

  return { isOver, onDrop }
}

export default useDropZone
