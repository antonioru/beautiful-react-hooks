import { type RefObject, useEffect, useRef, useState } from 'react'
import isFunction from './shared/isFunction'
import useMouseEvents from './useMouseEvents'
import useTouchEvents from './useTouchEvents'
import createHandlerSetter from './factory/createHandlerSetter'
import { getDirection, getPointerCoordinates } from './shared/swipeUtils'
import { type CallbackSetter } from './shared/types'

/**
 * The swipe event state interface
 */
export interface SwipeEventState {
  clientX?: number
  clientY?: number
  direction: 'right' | 'left' | 'up' | 'down'
  alphaX: number
  alphaY: number
}

/**
 * The result of the hook
 */
interface UseSwipeEventsReturn {
  onSwipeLeft: CallbackSetter<SwipeEventState>
  onSwipeRight: CallbackSetter<SwipeEventState>
  onSwipeUp: CallbackSetter<SwipeEventState>
  onSwipeDown: CallbackSetter<SwipeEventState>
  onSwipeMove: CallbackSetter<SwipeEventState>
  onSwipeStart: CallbackSetter<SwipeEventState>
  onSwipeEnd: CallbackSetter<SwipeEventState>
}

export interface UseSwipeEventsOpts {
  threshold?: number
  preventDefault?: boolean
  passive?: boolean
}

const defaultOptions: UseSwipeEventsOpts = {
  threshold: 15,
  preventDefault: true,
  passive: undefined
}
/* eslint-disable @typescript-eslint/default-param-last */

/**
 * Very similar to useSwipe but doesn't cause re-rendering during swipe.
 * Internal usage only.
 */
const useSwipeStateInternal = <TElement extends HTMLElement>(
  targetRef: RefObject<TElement> | undefined = undefined,
  options: UseSwipeEventsOpts = defaultOptions,
  onSwipeStart?: (...args: any[]) => any,
  onSwipeMove?: (...args: any[]) => any,
  onSwipeEnd?: (...args: any[]) => any) => {
  const startingPointRef = useRef<[number, number]>([-1, -1])
  const directionRef = useRef<'right' | 'left' | 'up' | 'down' | null>(null)
  const isDraggingRef = useRef(false)
  const alphaRef = useRef<number[]>([])
  const opts = { ...defaultOptions, ...(options || {}) }
  const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } = useMouseEvents<TElement>(targetRef, opts.passive)
  const { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } = useTouchEvents<TElement>(targetRef, opts.passive)
  const [state, setState] = useState<SwipeEventState>()

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

      if (Math.abs(alpha[0]) > opts.threshold! || Math.abs(alpha[1]) > opts.threshold!) {
        isDraggingRef.current = true
        directionRef.current = getDirection([clientX, clientY], startingPointRef.current, alpha)
        alphaRef.current = alpha

        if (onSwipeMove) {
          onSwipeMove({
            clientX,
            clientY,
            direction: directionRef.current,
            alphaX: alphaRef.current[0],
            alphaY: alphaRef.current[1]
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
        alphaY: alphaRef.current[1]
      })

      if (onSwipeEnd) {
        onSwipeEnd({
          direction: directionRef.current,
          alphaX: alphaRef.current[0],
          alphaY: alphaRef.current[1]
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
 * @param ref
 * @param options
 */
// eslint-disable-next-line max-len
const useSwipeEvents = <TElement extends HTMLElement>(ref: RefObject<TElement> | undefined = undefined, options: UseSwipeEventsOpts = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const [onSwipeLeft, setOnSwipeLeft] = createHandlerSetter<SwipeEventState>()
  const [onSwipeRight, setOnSwipeRight] = createHandlerSetter<SwipeEventState>()
  const [onSwipeUp, setOnSwipeUp] = createHandlerSetter<SwipeEventState>()
  const [onSwipeDown, setOnSwipeDown] = createHandlerSetter<SwipeEventState>()
  const [onSwipeStart, setOnSwipeStart] = createHandlerSetter<SwipeEventState>()
  const [onSwipeMove, setOnSwipeMove] = createHandlerSetter<SwipeEventState>()
  const [onSwipeEnd, setOnSwipeEnd] = createHandlerSetter<SwipeEventState>()
  const state = useSwipeStateInternal<TElement>(ref, opts, onSwipeStart.current!, onSwipeMove.current!, onSwipeEnd.current!)

  const fnMap = {
    right: onSwipeRight,
    left: onSwipeLeft,
    up: onSwipeUp,
    down: onSwipeDown
  }

  useEffect(() => {
    if (state?.direction) {
      const cb = fnMap[state.direction].current

      if (isFunction(cb)) {
        cb(state)
      }
    }
  }, [state])

  return Object.freeze<UseSwipeEventsReturn>({
    onSwipeLeft: setOnSwipeLeft,
    onSwipeRight: setOnSwipeRight,
    onSwipeUp: setOnSwipeUp,
    onSwipeDown: setOnSwipeDown,
    onSwipeMove: setOnSwipeMove,
    onSwipeStart: setOnSwipeStart,
    onSwipeEnd: setOnSwipeEnd
  })
}

export default useSwipeEvents
