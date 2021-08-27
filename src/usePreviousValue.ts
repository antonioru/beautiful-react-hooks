import { useEffect, useRef } from 'react'

/**
 * On each render returns the previous value of the given variable/constant.
 */
const usePreviousValue = <T>(value?: T): T => {
  const prevValue = useRef<T>()

  useEffect(() => {
    prevValue.current = value

    return () => {
      prevValue.current = undefined
    }
  })

  return prevValue.current
}

export default usePreviousValue
