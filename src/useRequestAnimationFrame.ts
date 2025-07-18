import { useCallback, useRef } from 'react'
import createHandlerSetter from './factory/createHandlerSetter.ts'
import isClient from './shared/isClient.ts'
import isAPISupported from './shared/isAPISupported.ts'
import { type CallbackSetter, type GenericFunction } from './shared/types.ts'
import noop from './shared/noop.ts'
import warnOnce from './shared/warnOnce.ts'

export interface UseRequestAnimationFrameOpts {
  increment?: number
  startAt?: number
  finishAt?: number
}

const defaultOptions = { increment: 1, startAt: 0, finishAt: 100 }

const errorMessage = 'requestAnimationFrame is not supported, this could happen both because ' +
  'window.requestAnimationFrame is not supported by your current browser version or you\'re using the ' +
  'useRequestAnimationFrame hook whilst server side rendering.'

/**
 * Takes care of running an animating function, provided as the first argument, while keeping track of its progress.
 */
const useRequestAnimationFrame = <T extends GenericFunction>(func: T, options: UseRequestAnimationFrameOpts = defaultOptions) => {
  if (!isClient || !isAPISupported('requestAnimationFrame')) {
    warnOnce(errorMessage)
    return noop as CallbackSetter<void>
  }

  const opts = { ...defaultOptions, ...options }
  const progress = useRef(opts.startAt)
  const [onFinish, setOnFinish] = createHandlerSetter<undefined>()

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const next = () => window.requestAnimationFrame(step)

  const step = useCallback(() => {
    if (progress.current <= opts.finishAt || opts.finishAt === -1) {
      func(progress.current, next)
      progress.current += opts.increment
    } else if (onFinish.current) {
      onFinish.current()
    }
  }, [func, opts.finishAt, opts.increment, progress.current, onFinish])

  if (progress.current <= opts.startAt) {
    next()
  }

  return setOnFinish
}

export default useRequestAnimationFrame
