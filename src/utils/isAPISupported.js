/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
const isApiSupported = (api) => (api in window);

export default isApiSupported;
