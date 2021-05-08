/**
 * Takes a mouse or a touch events and returns clientX and clientY values
 * @param event
 * @return {[undefined, undefined]}
 */
export const getPointerCoordinates = (event) => {
  if (event.touches) {
    const { clientX, clientY } = event.touches[0];
    return [clientX, clientY];
  }

  const { clientX, clientY } = event;

  return [clientX, clientY];
};

export const getHorizontalDirection = (alpha) => (alpha < 0 ? 'right' : 'left');

export const getVerticalDirection = (alpha) => (alpha < 0 ? 'down' : 'up');

export const getDirection = (currentPoint, startingPoint, alpha) => {
  const alphaX = startingPoint[0] - currentPoint[0];
  const alphaY = startingPoint[1] - currentPoint[1];
  if (Math.abs(alphaX) > Math.abs(alphaY)) {
    return getHorizontalDirection(alpha[0]);
  }

  return getVerticalDirection(alpha[1]);
};
