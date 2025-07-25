import { type RefObject, useState } from 'react'
import useDragEvents from './useDragEvents.ts'

export interface UseDragOptions {
  dragImage?: string
  dragImageXOffset?: number
  dragImageYOffset?: number
  transfer?: string | number | Record<string, any>
  transferFormat?: string
}

const defaultOptions: UseDragOptions = {
  dragImageXOffset: 0,
  dragImageYOffset: 0,
  transferFormat: 'text'
}

const useDrag = <TElement extends HTMLElement>(targetRef: RefObject<TElement>, options = defaultOptions) => {
  const { onDragStart, onDragEnd } = useDragEvents<TElement>(targetRef, true)
  const [isDragging, setIsDragging] = useState(false)
  const opts: UseDragOptions = { ...defaultOptions, ...(options || {}) }

  onDragStart((event: DragEvent) => {
    setIsDragging(true)

    if (opts.dragImage && event.dataTransfer) {
      const img = new Image()
      img.src = opts.dragImage
      event.dataTransfer.setDragImage(img, opts.dragImageXOffset ?? 0, opts.dragImageYOffset ?? 0)
    }

    if (opts.transfer && event.dataTransfer) {
      const data = typeof opts.transfer === 'object' ? JSON.stringify(opts.transfer) : `${opts.transfer}`
      event.dataTransfer.setData(opts.transferFormat ?? 'text', data)
    }
  })

  onDragEnd(() => {
    setIsDragging(false)
  })

  return isDragging
}

export default useDrag
