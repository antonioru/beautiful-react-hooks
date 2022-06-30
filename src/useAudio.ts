import { useCallback, useEffect, useState } from 'react'

const useAudio = (src: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(src))

  const [, setForceUpdate] = useState(false)
  const forceUpdate = () => setForceUpdate((prevState) => !prevState)

  useEffect(() => {
    setAudio(new Audio(src))

    audio.addEventListener('play', forceUpdate)
    audio.addEventListener('pause', forceUpdate)
    audio.addEventListener('ended', forceUpdate)
    audio.addEventListener('timeupdate', forceUpdate)

    return () => {
      audio.removeEventListener('play', forceUpdate)
      audio.removeEventListener('pause', forceUpdate)
      audio.removeEventListener('ended', forceUpdate)
      audio.removeEventListener('timeupdate', forceUpdate)

      audio.remove()
    }
  }, [src])

  const play = useCallback(audio.play, [src])

  const pause = useCallback(audio.pause, [src])

  const mute = useCallback(
    () => {
      audio.muted = true
    },
    [src],
  )

  const unmute = useCallback(
    () => {
      audio.muted = false
    },
    [src],
  )

  const toggleMute = useCallback(
    () => {
      audio.muted = !audio.muted
    },
    [src],
  )

  const setVolume = useCallback(
    (volume: number) => {
      audio.volume = volume
    },
    [src],
  )

  const jump = useCallback(
    (time: number) => {
      audio.currentTime += time
    },
    [src],
  )

  return Object.freeze({
    jump,
    mute,
    play,
    pause,
    unmute,
    setVolume,
    toggleMute,
    volume: audio.volume,
    isMuted: audio.muted,
    duration: audio.duration,
    isPlaying: !audio.paused,
    currentTime: audio.currentTime,

  })
}

export default useAudio
