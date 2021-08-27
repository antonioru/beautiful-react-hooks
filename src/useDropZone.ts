import { MutableRefObject, useState } from 'react'
import useDragEvents from './useDragEvents'
import { CallbackSetter } from './shared/types'

export type DropZoneState = { isOver: boolean, onDrop: CallbackSetter<(event: DragEvent) => any> }

const useDropZone = <T extends HTMLElement>(targetRef: MutableRefObject<T>): DropZoneState => {
  const { onDrop, onDragOver, onDragLeave } = useDragEvents<T>(targetRef, false)
  const [isOver, setIsOver] = useState<boolean>(false)

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
