import { useCallback, useState } from 'react'

const maybeState = <TValue>(state: TValue, defaultValue?: TValue) => (state ?? defaultValue) as TValue

/**
 * Returns a safe state by making sure the given value is not null or undefined
 */
const useDefaultedState = <TValue>(defaultValue: TValue, initialState?: TValue) => {
  const [state, setState] = useState<TValue>(maybeState(initialState, defaultValue) as TValue)

  const setStateSafe = useCallback((nextState: TValue) => {
    setState(maybeState(nextState, defaultValue))
  }, [setState])

  return [maybeState(state, defaultValue), setStateSafe] as [TValue, typeof setStateSafe]
}

export default useDefaultedState
