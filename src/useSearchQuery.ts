import useQueryParam from './useQueryParam'

/**
 * Ease the process of modify the 'search' query string in the URL for the current location.
 * It's just a shortcut/wrapper around useQueryParam
 */
const useSearchQuery = <T extends string>(initialValue: T, replaceState = false) => useQueryParam('search', { initialValue, replaceState })

export default useSearchQuery
