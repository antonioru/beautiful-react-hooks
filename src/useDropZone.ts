import { type RefObject, useState } from 'react'
import useDragEvents from './useDragEvents'
import { type CallbackSetter } from './shared/types'

export interface UseDropZoneResult {
  readonly isOver: boolean
  readonly onDrop: CallbackSetter<DragEvent>
}

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

  return Object.freeze<UseDropZoneResult>({
    isOver,
    onDrop
  })
}

export default useDropZone
