import { RefObject, useEffect, useRef, useState } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import useMouseEvents from './useMouseEvents'
import useTouchEvents from './useTouchEvents'
import { getDirection, getPointerCoordinates } from './shared/swipeUtils'

export type SwipeState = {
  clientX?: number
  clientY?: number
  direction: 'right' | 'left' | 'up' | 'down',
  alphaX: number,
  alphaY: number,
}

export type SwipeCallback = (state: SwipeState) => any

export type UseEventsSwipeOptions = {
  threshold?: number,
  preventDefault?: boolean,
}

const defaultOptions: UseEventsSwipeOptions = {
  threshold: 15,
  preventDefault: true,
}

/**
 * Very similar to useSwipe but doesn't cause re-rendering during swipe
 */
const useSilentSwipeState = <T extends HTMLElement>(
  targetRef: RefObject<T> = null,
  options: UseEventsSwipeOptions = defaultOptions,
  onSwipeStart: (...args: any[]) => any,
  onSwipeMove: (...args: any[]) => any,
  onSwipeEnd: (...args: any[]) => any) => {
  const startingPointRef = useRef<[number, number]>([-1, -1])
  const directionRef = useRef<'right' | 'left' | 'up' | 'down'>(null)
  const isDraggingRef = useRef(false)
  const alphaRef = useRef<number[]>([])
  const opts = { ...defaultOptions, ...(options || {}) }
  const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } = useMouseEvents(targetRef)
  const { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } = useTouchEvents(targetRef)
  const [state, setState] = useState<SwipeState>()

  const startSwipe = (event: MouseEvent | TouchEvent) => {
    const [clientX, clientY] = getPointerCoordinates(event)
    startingPointRef.current = [clientX, clientY]
    directionRef.current = null

    if (onSwipeStart) {
      onSwipeStart({ clientX, clientY })
    }

    if (opts.preventDefault) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const continueSwipe = (event: MouseEvent | TouchEvent) => {
    const [clientX, clientY] = getPointerCoordinates(event)

    if (opts.preventDefault) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (startingPointRef.current[0] !== -1 && startingPointRef.current[1] !== -1) {
      const alpha: [number, number] = [startingPointRef.current[0] - clientX, startingPointRef.current[1] - clientY]

      if (Math.abs(alpha[0]) > opts.threshold || Math.abs(alpha[1]) > opts.threshold) {
        isDraggingRef.current = true
        directionRef.current = getDirection([clientX, clientY], startingPointRef.current, alpha)
        alphaRef.current = alpha

        if (onSwipeMove) {
          onSwipeMove({
            clientX,
            clientY,
            direction: directionRef.current,
            alphaX: alphaRef.current[0],
            alphaY: alphaRef.current[1],
          })
        }
      }
    }
  }

  const endSwipe = (event: MouseEvent | TouchEvent) => {
    if (isDraggingRef.current && directionRef.current) {
      if (opts.preventDefault) {
        event.preventDefault()
        event.stopPropagation()
      }

      setState({
        direction: directionRef.current,
        alphaX: alphaRef.current[0],
        alphaY: alphaRef.current[1],
      })

      if (onSwipeEnd) {
        onSwipeEnd({
          direction: directionRef.current,
          alphaX: alphaRef.current[0],
          alphaY: alphaRef.current[1],
        })
      }
    }

    startingPointRef.current = [-1, -1]
    isDraggingRef.current = false
    directionRef.current = null
  }

  onMouseDown(startSwipe)
  onTouchStart(startSwipe)

  onMouseMove(continueSwipe)
  onTouchMove(continueSwipe)

  onMouseUp(endSwipe)
  onTouchEnd(endSwipe)

  onMouseLeave(endSwipe)
  onTouchCancel(endSwipe)

  return state
}

/**
 * useSwipeEvents
 * @param targetRef
 * @param options
 */
const useSwipeEvents = <T extends HTMLElement>(targetRef: RefObject<T> = null, options: UseEventsSwipeOptions = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const [onSwipeLeft, setOnSwipeLeft] = createHandlerSetter<SwipeCallback>()
  const [onSwipeRight, setOnSwipeRight] = createHandlerSetter<SwipeCallback>()
  const [onSwipeUp, setOnSwipeUp] = createHandlerSetter<SwipeCallback>()
  const [onSwipeDown, setOnSwipeDown] = createHandlerSetter<SwipeCallback>()
  const [onSwipeStart, setOnSwipeStart] = createHandlerSetter<SwipeCallback>()
  const [onSwipeMove, setOnSwipeMove] = createHandlerSetter<SwipeCallback>()
  const [onSwipeEnd, setOnSwipeEnd] = createHandlerSetter<SwipeCallback>()
  const state: SwipeState = useSilentSwipeState(targetRef, opts, onSwipeStart.current, onSwipeMove.current, onSwipeEnd.current)

  const fnMap = {
    right: onSwipeRight,
    left: onSwipeLeft,
    up: onSwipeUp,
    down: onSwipeDown,
  }

  useEffect(() => {
    if (state && state.direction) {
      const cb = fnMap[state.direction].current

      if (cb && typeof cb === 'function') {
        cb(state)
      }
    }
  }, [state])

  return Object.freeze({
    onSwipeLeft: setOnSwipeLeft,
    onSwipeRight: setOnSwipeRight,
    onSwipeUp: setOnSwipeUp,
    onSwipeDown: setOnSwipeDown,
    onSwipeMove: setOnSwipeMove,
    onSwipeStart: setOnSwipeStart,
    onSwipeEnd: setOnSwipeEnd,
  })
}

export default useSwipeEvents
