import { useReducer } from 'react'

const reducer = <TState>(
  previousState: TState,
  updatedState: Partial<TState>,
) => ({
    ...previousState,
    ...updatedState,
  })

const useObjectState = <TState>(
  initialState: TState,
): [TState, (state: Partial<TState>) => void] => {
  const [state, dispatch] = useReducer(
    (previousState: TState, updatedState: Partial<TState>) => reducer(previousState, updatedState),
    initialState,
  )

  const setState = (updatedState: Partial<TState>): void => dispatch(updatedState)

  return [state, setState]
}

export default useObjectState
