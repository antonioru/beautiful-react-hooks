import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  RefObject,
} from 'react'

import noop from './shared/noop'
import isClient from './shared/isClient'
import useObjectState from './useObjectState'
import { CallbackSetter } from './shared/types'
import isDevelopment from './shared/isDevelopment'
import isAPISupported from './shared/isAPISupported'
import createHandlerSetter from './factory/createHandlerSetter'

type TPreload = 'auto' | 'metadata' | 'none';

type TAudioRef = RefObject<HTMLAudioElement | null>;

type TOutput = [IState, IControls, TAudioRef];

export interface IOptions {
  loop?: boolean;
  muted?: boolean;
  volume?: number;
  autoPlay?: boolean;
  preload?: TPreload;
  playbackRate?: number;
}

interface IState {
  loop: boolean;
  muted: boolean;
  volume: number;
  duration: number;
  autoPlay: boolean;
  isPlaying: boolean;
  preload?: TPreload;
  currentTime: number;
  playbackRate: number;
  isSrcLoading: boolean | undefined;
}

interface IControls {
  play: () => void;
  mute: () => void;
  pause: () => void;
  unmute: () => void;
  seek: (time: number) => void;
  onError: CallbackSetter<Error>;
  setVolume: (volume: number) => void;
}

const defaultOptions: Required<IOptions> = {
  volume: 1,
  loop: false,
  muted: false,
  playbackRate: 1,
  autoPlay: false,
  preload: 'auto',
}

const defaultState: IState = {
  duration: 0,
  currentTime: 0,
  isPlaying: false,
  isSrcLoading: undefined,
  ...defaultOptions,
}

const errorEventCodeToMessageMapper: Record<number, string> = {
  3: 'MEDIA_ERR_DECODE - error occurred when decoding',
  4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - audio not supported',
  2: 'MEDIA_ERR_NETWORK - error occurred when downloading',
  1: 'MEDIA_ERR_ABORTED - fetching process aborted by user',
}

const hookNotSupportedControls: IControls = Object.freeze({
  seek: noop,
  play: noop,
  mute: noop,
  pause: noop,
  unmute: noop,
  onError: noop,
  setVolume: noop,
})

const checkIfRefElementExists = <TElement>(
  ref: MutableRefObject<TElement>,
  callback: (element: TElement) => unknown,
) => () => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    return callback(element)
  }

export const useAudio = (src: string, options?: IOptions): TOutput => {
  const hookNotSupportedResponse: TOutput = [
    defaultState,
    hookNotSupportedControls,
    useRef<HTMLAudioElement | null>(null),
  ]

  if (!isClient) {
    if (!isDevelopment) {
      // eslint-disable-next-line no-console
      console.warn(
        'Please be aware that useAudio hook could not be available during SSR',
      )
    }

    return hookNotSupportedResponse
  }

  if (!isAPISupported('Audio')) {
    // eslint-disable-next-line no-console
    console.warn(
      "The current device does not support the 'Audio' API, you should avoid using useAudio hook",
    )

    return hookNotSupportedResponse
  }

  const audioRef = useRef<HTMLAudioElement>(new Audio(src))
  const [onErrorRef, setOnErrorRef] = createHandlerSetter<Error>()

  const [state, setState] = useObjectState<IState>(defaultState)

  const onError = (error: Error) => {
    if (onErrorRef.current) {
      onErrorRef.current(error)
    }
  }

  const play = useCallback(
    checkIfRefElementExists(audioRef, (element) => element
      .play()
      .then(() => {
        setState({
          isPlaying: true,
        })
      })
      .catch(onError)),
    [],
  )

  const pause = useCallback(
    checkIfRefElementExists(audioRef, (element) => {
      element.pause()

      setState({
        isPlaying: false,
      })
    }),
    [],
  )

  const mute = useCallback(
    checkIfRefElementExists(audioRef, (element) => {
      // eslint-disable-next-line no-param-reassign
      element.muted = true

      setState({
        muted: true,
      })
    }),
    [],
  )

  const unmute = useCallback(
    checkIfRefElementExists(audioRef, (element) => {
      // eslint-disable-next-line no-param-reassign
      element.muted = false

      setState({
        muted: false,
      })
    }),
    [],
  )

  const seek = useCallback(
    (time: number) => checkIfRefElementExists(audioRef, (element) => {
      const newTime = time >= 0 ? Math.min(time, element.duration) : Math.max(time, 0)

      // eslint-disable-next-line no-param-reassign
      element.currentTime = newTime

      setState({
        currentTime: newTime,
      })
    })(),
    [],
  )

  const setVolume = useCallback(
    (volume: number) => checkIfRefElementExists(audioRef, (element) => {
      const newVolume = volume >= 0 ? Math.min(volume, 1) : Math.max(volume, 0)

      // eslint-disable-next-line no-param-reassign
      element.volume = newVolume

      setState({
        volume: newVolume,
      })
    })(),
    [],
  )

  const onLoadedData = checkIfRefElementExists(audioRef, (element) => setState({
    isSrcLoading: false,
    duration: element.duration,
    currentTime: element.currentTime,
  }))

  const onTimeUpdate = checkIfRefElementExists(audioRef, (element) => setState({
    currentTime: element.currentTime,
  }))

  const errorEventCallback = () => {
    const element = audioRef.current
    const errorCode = element.error.code
    const errorMessage = element.error.message
      || errorEventCodeToMessageMapper[errorCode]
      || 'UNKNOWN'

    onError(new Error(errorMessage))
  }

  useEffect(() => {
    const element = audioRef.current!

    if (!element) {
      return
    }

    const mergedOptions = { ...defaultOptions, ...options }

    element.loop = mergedOptions.loop
    element.muted = mergedOptions.muted
    element.volume = mergedOptions.volume
    element.preload = mergedOptions.preload
    element.autoplay = mergedOptions.autoPlay
    element.playbackRate = mergedOptions.playbackRate

    setState({
      ...mergedOptions,
      isSrcLoading: true,
    })

    element.addEventListener('loadeddata', onLoadedData)
    element.addEventListener('timeupdate', onTimeUpdate)
    element.addEventListener('error', errorEventCallback)

    // eslint-disable-next-line consistent-return
    return () => {
      element.removeEventListener('loadeddata', onLoadedData)
      element.removeEventListener('timeupdate', onTimeUpdate)
      element.removeEventListener('error', errorEventCallback)

      pause()
    }
  }, [])

  useEffect(() => {
    if (state.isSrcLoading === false && state.autoPlay) {
      play()
    }
  }, [state.isSrcLoading, state.autoPlay])

  const controls = Object.freeze({
    seek,
    play,
    mute,
    pause,
    unmute,
    setVolume,
    onError: setOnErrorRef,
  })

  return [state, controls, audioRef]
}

export default useAudio
