import useSwipe from './useSwipe';

const defaultOptions = {
  threshold: 15,
  preventDefault: true,
};

/**
 * A shortcut to useSwipe (with vertical options)
 * @param ref
 * @param options
 * @return {{alpha: number, count: number, swiping: boolean, direction: null}}
 */
const useVerticalSwipe = (ref = null, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}), ...{ direction: 'vertical' } };

  return useSwipe(ref, opts);
};

export default useVerticalSwipe;
