import { useCallback, useState } from 'react'

/**
 * A quick and simple utility for toggle states
 */
const useToggle = (initialState = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialState)

  const toggleState = useCallback(() => {
    setValue(!value)
  }, [value])

  return [value, toggleState]
}

export default useToggle
