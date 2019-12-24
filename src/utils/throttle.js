/**
 * Throttle function
 */
const throttle = (func, duration = 100) => {
  let shouldWait = false;

  return (...args) => {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, duration);
    }
  };
};

export default throttle;
