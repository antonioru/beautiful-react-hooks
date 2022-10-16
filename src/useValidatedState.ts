import { useCallback, useRef, useState } from 'react'

export interface ValidationResult {
  changed: boolean,
  valid?: boolean,
}

/**
 * Returns a state that changes only if the next value pass its validator
 */
const useValidatedState = <TValue, TValidator extends (value: TValue) => boolean>
  (validator: TValidator, initialValue?: TValue) => {
  const [state, setState] = useState<TValue>(initialValue)
  const validation = useRef<ValidationResult>({ changed: false })

  const onChange = useCallback((nextValue: TValue) => {
    setState(nextValue)
    validation.current = { changed: true, valid: validator(nextValue) }
  }, [validator])

  return [state, onChange, validation.current] as [TValue, (nextValue: TValue) => void, ValidationResult]
}

export default useValidatedState
