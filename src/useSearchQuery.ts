import useQueryParam from './useQueryParam'

/**
 * Ease the process of modify the 'search' query string in the URL for the current location.
 * It's just a shortcut/wrapper around useQueryParam
 */
const useSearchQuery = <TSearchKey extends string>(initialValue: TSearchKey, replaceState = false) => useQueryParam<TSearchKey>('search', {
  initialValue,
  replaceState,
})

export default useSearchQuery
