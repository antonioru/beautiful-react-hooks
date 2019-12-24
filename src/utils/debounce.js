/**
 * Debounce function
 */
const debounce = (func, duration = 100) => {
  let timeout;

  return (...args) => {
    const effect = () => {
      timeout = undefined;
      return func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
};

export default debounce;
