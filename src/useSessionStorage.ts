import createStorageHook from './factory/createStorageHook'

/**
 * Save a value on session storage
 */
const useSessionStorage = createStorageHook('session')

export default useSessionStorage
