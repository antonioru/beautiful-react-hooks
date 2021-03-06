/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
const isApiSupported = (api) => (typeof window !== 'undefined' ? api in window : false);

export default isApiSupported;
