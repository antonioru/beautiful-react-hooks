import useSwipe from './useSwipe';

const defaultOptions = {
  threshold: 15,
  preventDefault: true,
};

/**
 * A shortcut to useSwipe (with horizontal options)
 * @param ref
 * @param options
 * @return {{alpha: number, count: number, swiping: boolean, direction: null}}
 */
const useHorizontalSwipe = (ref = null, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}), ...{ direction: 'horizontal' } };

  return useSwipe(ref, opts);
};

export default useHorizontalSwipe;
