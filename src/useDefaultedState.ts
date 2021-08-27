import { Dispatch, SetStateAction, useCallback, useState } from 'react'

const maybeState = <T>(state: T, defaultValue?: T) => (state ?? defaultValue)

/**
 * Returns a safe state by making sure the given value is not null or undefined
 */
const useDefaultedState = <T>(defaultValue: T, initialState?: T): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState(maybeState(initialState, defaultValue))

  const setStateSafe = useCallback((nextState: T) => {
    setState(maybeState(nextState, defaultValue))
  }, [setState])

  return [maybeState(state, defaultValue), setStateSafe]
}

export default useDefaultedState
