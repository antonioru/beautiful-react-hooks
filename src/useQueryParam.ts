import { useCallback, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import useDidMount from './useDidMount'
import useURLSearchParams from './useURLSearchParams'

export interface UseQueryParamOptions<TValue extends string> {
  initialValue?: TValue,
  replaceState?: boolean,
}

/**
 * Ease the process of modify the query string in the URL for the current location.
 */
const useQueryParam = <TValue extends string>(key: string, options: UseQueryParamOptions<TValue> = {}) => {
  const history = useHistory()
  const params = useURLSearchParams()
  const initialisedRef = useRef(false)
  const onMount = useDidMount()

  const setParam = useCallback((nextValue?: TValue) => {
    if (!nextValue) {
      params.delete(key)
    } else {
      params.set(key, nextValue)
    }

    if (options.replaceState) {
      history.replace({ search: params.toString() })
      return
    }

    history.push({ search: params.toString() })
  }, [options.replaceState, history])

  onMount(() => {
    if (!params.has(key)) {
      initialisedRef.current = true
      setParam(options.initialValue)
    }
  })

  return [initialisedRef.current ? params.get(key) : options.initialValue, setParam] as [TValue, (nextValue?: TValue) => void]
}

export default useQueryParam
