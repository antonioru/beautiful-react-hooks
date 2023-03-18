import { type RefObject, useCallback, useState } from 'react'
import useMouseEvents from './useMouseEvents'
import useConditionalTimeout from './useConditionalTimeout'
import createHandlerSetter from './factory/createHandlerSetter'
import useTouchEvents from './useTouchEvents'
import { type CallbackSetter } from './shared/types'

/**
 * A hook that facilitates the implementation of the long press functionality on a given target, supporting both mouse and touch events.
 */
const useLongPress = <TElement extends HTMLElement>(target: RefObject<TElement>, duration = 500) => {
  const { onMouseDown, onMouseUp, onMouseLeave } = useMouseEvents<TElement>(target, false)
  const { onTouchStart, onTouchEnd } = useTouchEvents(target, false)
  const [isLongPressing, setIsLongPressing] = useState(false)
  const [timerOn, startTimer] = useState(false)
  const [onLongPressStart, setOnLongPressStart] = createHandlerSetter<void>()
  const [onLongPressEnd, setOnLongPressEnd] = createHandlerSetter<void>()

  const longPressStart = useCallback((event: MouseEvent | TouchEvent) => {
    event.preventDefault()
    startTimer(true)
  }, [])

  const longPressStop = useCallback((event: MouseEvent | TouchEvent) => {
    if (!isLongPressing) return
    clearTimeout()
    setIsLongPressing(false)
    startTimer(false)
    event.preventDefault()

    if (onLongPressEnd?.current) {
      onLongPressEnd.current()
    }
  }, [isLongPressing])

  const [, clearTimeout] = useConditionalTimeout(() => {
    setIsLongPressing(true)

    if (onLongPressStart?.current) {
      onLongPressStart.current()
    }
  }, duration, timerOn)

  onMouseDown(longPressStart)
  onMouseLeave(longPressStop)
  onMouseUp(longPressStop)

  onTouchStart(longPressStart)
  onTouchEnd(longPressStop)

  return Object.freeze<UseLongPressResult>({
    isLongPressing,
    onLongPressStart: setOnLongPressStart,
    onLongPressEnd: setOnLongPressEnd
  })
}

export interface UseLongPressResult {
  isLongPressing: boolean
  onLongPressStart: CallbackSetter<void>
  onLongPressEnd: CallbackSetter<void>
}

export default useLongPress
