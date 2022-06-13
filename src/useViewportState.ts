import { useState } from 'react'
import useWindowScroll from './useWindowScroll'
import useWindowResize from './useWindowResize'
import useThrottledCallback from './useThrottledCallback'
import useDidMount from './useDidMount'

export interface ViewportState {
  width: number,
  height: number,
  scrollX: number,
  scrollY: number,
}

/**
 * Returns updated information on the current viewport state
 */
const useViewportState = (debounceBy: number = 250) => {
  const [viewport, setViewport] = useState<ViewportState>({ width: 0, height: 0, scrollY: 0, scrollX: 0 })
  const onScroll = useWindowScroll()
  const onResize = useWindowResize()
  const onMount = useDidMount()

  const saveInfo = useThrottledCallback(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    })
  }, [setViewport], debounceBy)

  onScroll(saveInfo)
  onResize(saveInfo)
  onMount(saveInfo)

  return viewport
}

export default useViewportState
