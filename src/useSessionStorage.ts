import createStorageHook from './shared/createStorageHook'

/**
 * Save a value on session storage
 */
const useSessionStorage = createStorageHook('session')

export default useSessionStorage
