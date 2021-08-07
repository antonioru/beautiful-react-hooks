import { useEffect, useRef } from 'react'

const distinctValues = <T>(value: T, current: number, array: T[]): boolean => array.indexOf(value) === current

/**
 * Accepts a variable (possibly a prop or a state) and returns its history (changes through updates).
 */
const useValueHistory = <T = unknown>(value: T, distinct = false): T[] => {
  const history = useRef<T[]>([])

  // quite simple
  useEffect(() => {
    history.current.push(value)

    if (distinct) {
      history.current.filter(distinctValues)
    }
  }, [value])

  return history.current
}

export default useValueHistory
