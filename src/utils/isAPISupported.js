/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
export default (api) => (api in window);
