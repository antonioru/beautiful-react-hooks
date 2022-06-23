import { useHistory } from 'react-router-dom'
import { useCallback, useRef } from 'react'
import useDidMount from './useDidMount'
import useURLSearchParams from './useURLSearchParams'

export interface UseQueryParamsOptions<TValue extends string[]> {
  initialValue?: TValue,
  replaceState?: boolean,
}

/**
 * Very similar to `useQueryParams`, it eases the process of manipulate a query string that handles multiple values
 */
const useQueryParams = <TValue extends string[]>(key: string, options: UseQueryParamsOptions<TValue> = {}) => {
  const history = useHistory()
  const params = useURLSearchParams()
  const initialisedRef = useRef(false)
  const onMount = useDidMount()

  const setParam = useCallback((nextValue?: TValue) => {
    params.delete(key)

    if (nextValue) {
      nextValue.forEach((value) => params.append(key, value))
    }

    if (options.replaceState) {
      history.replace({ search: params.toString() })
      return
    }

    history.push({ search: params.toString() })
  }, [options.replaceState, history])

  onMount(() => {
    if (!params.has(key)) {
      setParam(options.initialValue)
      initialisedRef.current = true
    }
  })

  return [initialisedRef.current ? params.getAll(key) : options.initialValue, setParam] as [TValue, (nextValue?: TValue) => void]
}

export default useQueryParams
