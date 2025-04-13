import createStorageHook from './factory/createStorageHook.ts'

/**
 * Save a value on local storage
 */
const useLocalStorage = createStorageHook('local')

export default useLocalStorage
