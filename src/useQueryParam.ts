import { useHistory } from 'react-router-dom'
import { useCallback, useState } from 'react'
import useDidMount from './useDidMount'

export interface UseQueryParamsOptions<T extends string> {
  initialValue?: T,
  replaceState?: boolean,
}

const getParamFromLocation = <TParam extends string>(search: string, param: string, options: UseQueryParamsOptions<TParam>) => {
  const params = new URLSearchParams(search)
  return (params.get(param) || options.initialValue || '') as TParam
}

/**
 * Ease the process of modify the query string in the URL for the current location.
 */
const useQueryParam = <TParam extends string>(param: string, options: UseQueryParamsOptions<TParam> = {}) => {
  const { push, replace, location } = useHistory()
  const onMount = useDidMount()
  const [value, setValue] = useState<TParam>(getParamFromLocation<TParam>(location.search, param, options))

  const setParam = useCallback((nextValue: TParam) => {
    const params = new URLSearchParams()
    params.set(param, nextValue)

    if (options.replaceState) {
      replace({ search: params.toString() })
      return
    }

    push({ search: params.toString() })
    setValue(nextValue)
  }, [options.replaceState])

  onMount(() => {
    const current = new URLSearchParams(location.search)

    if (!current.get(param) && options.initialValue) {
      setParam(options.initialValue)
    }
  })

  return [value, setParam] as [TParam, (nextValue: TParam) => void]
}

export default useQueryParam
