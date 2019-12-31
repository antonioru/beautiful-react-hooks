/**
 * Returns the window.navigator object, if exists
 * @returns {any}
 */
const getNavigator = () => ('navigator' in window && typeof window.navigator === 'object' ? navigator : null);

export default getNavigator;
