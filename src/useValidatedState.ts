import { useCallback, useRef, useState } from 'react'

/**
 * Returns a state that changes only if the next value pass its validator
 */
const useValidatedState = <TValue, TValidator extends Validator<TValue>>(validator: TValidator, initialValue?: TValue) => {
  const [state, setState] = useState<TValue | undefined>(initialValue)
  const validation = useRef<ValidationResult>({ changed: false })

  const onChange = useCallback((nextValue: TValue) => {
    setState(nextValue)
    validation.current = { changed: true, valid: validator(nextValue) }
  }, [validator])

  return [state, onChange, validation.current] as [TValue, (nextValue: TValue) => void, ValidationResult]
}

export type Validator<TValue> = (value: TValue) => boolean

export interface ValidationResult {
  changed: boolean
  valid?: boolean
}

export default useValidatedState
