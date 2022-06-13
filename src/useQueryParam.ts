import { useSearchParams } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import useDidMount from './useDidMount'

export interface UseQueryParamsOptions<T extends string> {
  initialValue?: T,
  replaceState?: boolean,
}

/**
 * Ease the process of modify the query string in the URL for the current location.
 */
const useQueryParam = <TParam extends string>(param: string, options: UseQueryParamsOptions<TParam> = {}) => {
  const [params, setParams] = useSearchParams()
  const onMount = useDidMount()
  const value = useMemo(() => params.get(param) || options.initialValue || '', [options.initialValue, params])

  const setParam = useCallback((nextValue: TParam) => {
    params.set(param, nextValue)

    setParams(params, { replace: options.replaceState })
  }, [setParams, params, options.replaceState])

  onMount(() => {
    if (!params.get(param) && options.initialValue) {
      setParam(options.initialValue)
    }
  })

  return [value, setParam]
}

export default useQueryParam
