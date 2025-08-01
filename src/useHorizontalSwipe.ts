import { type RefObject } from 'react'
import useSwipe, { type UseSwipeOptions } from './useSwipe.ts'

const defaultOptions: UseSwipeOptions = {
  threshold: 15,
  preventDefault: true
}

/**
 * A shortcut to useSwipe (with horizontal options)
 */
const useHorizontalSwipe = <TElement extends HTMLElement>(ref?: RefObject<TElement>, options: UseSwipeOptions = defaultOptions) => {
  const opts: UseSwipeOptions = { ...defaultOptions, ...(options || {}), ...{ direction: 'horizontal' } }

  return useSwipe<TElement>(ref, opts)
}

export default useHorizontalSwipe
