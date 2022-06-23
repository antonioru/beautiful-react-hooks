import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Wraps the business logic of retrieve always updated URLSearchParams
 */
const useURLSearchParams = () => {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export default useURLSearchParams
