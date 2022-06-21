import { useHistory } from 'react-router-dom'
import { useCallback, useState } from 'react'
import useDidMount from './useDidMount'

export interface UseQueryParamsOptions<T extends string[]> {
  initialValue?: T,
  replaceState?: boolean,
}

const getParamsFromLocation = <TParam extends string[]>(search: string, param: string, options: UseQueryParamsOptions<TParam>) => {
  const params = new URLSearchParams(search)
  return (params.getAll(param) || options.initialValue || []) as TParam
}

/**
 * Very similar to `useQueryParams`, it eases the process of manipulate a query string that handles multiple values
 */
const useQueryParams = <TParam extends string[]>(param: string, options: UseQueryParamsOptions<TParam> = {}) => {
  const history = useHistory()
  const onMount = useDidMount()
  const [value, setValues] = useState<TParam | []>(getParamsFromLocation<TParam>(history.location.search, param, options))

  const setParamValues = useCallback((nextValues?: TParam) => {
    const { pathname } = history.location
    const params = new URLSearchParams(history.location.search)

    params.delete(param)
    if (nextValues && nextValues.length > 0) {
      nextValues.forEach((currentValue) => {
        params.append(param, currentValue)
      })
    }

    if (options.replaceState) {
      history.replace({ pathname, search: params.toString() })
      setValues(nextValues ? [...nextValues] : [])
      return
    }

    history.push({ pathname, search: params.toString() })
    setValues(nextValues ? [...nextValues] : [])
  }, [history, options.replaceState, param])

  onMount(() => {
    const current = new URLSearchParams(history.location.search)

    if (current.getAll(param).length === 0 && options.initialValue) {
      setParamValues(options.initialValue)
    }
  })

  return [value, setParamValues] as [TParam, (nextValue?: TParam) => void]
}

export default useQueryParams
