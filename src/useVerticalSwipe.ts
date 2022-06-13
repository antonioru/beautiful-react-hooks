import { RefObject } from 'react'
import useSwipe, { UseSwipeOptions } from './useSwipe'

const defaultOptions: UseSwipeOptions = {
  threshold: 15,
  preventDefault: true,
}

/**
 * A shortcut to useSwipe (with vertical options)
 * @param ref
 * @param options
 * @return {{alpha: number, count: number, swiping: boolean, direction: null}}
 */
const useVerticalSwipe = <TElement extends HTMLElement>(ref?: RefObject<TElement>, options: UseSwipeOptions = defaultOptions) => {
  const opts: UseSwipeOptions = { ...defaultOptions, ...(options || {}), ...{ direction: 'vertical' } }

  return useSwipe<TElement>(ref, opts)
}

export default useVerticalSwipe
