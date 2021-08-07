import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react'

/**
 * Returns a state that changes only if the next value pass its validator
 */
const useValidatedState = <T = unknown, V extends (value: T) => boolean = (value: T) => boolean>
  (validator: V, initialValue?: T): [T, Dispatch<SetStateAction<T>>, { changed: boolean, valid?: boolean }] => {
  const [state, setState] = useState<T>(initialValue)
  const validation = useRef<{ changed: boolean, valid?: boolean }>({ changed: false })

  const onChange = useCallback((nextValue) => {
    setState(nextValue)
    validation.current = { changed: true, valid: validator(nextValue) }
  }, [validator])

  return [state, onChange, validation.current]
}

export default useValidatedState
