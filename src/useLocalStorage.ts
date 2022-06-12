import createStorageHook from './factory/createStorageHook'

/**
 * Save a value on local storage
 */
const useLocalStorage = createStorageHook('local')

export default useLocalStorage
