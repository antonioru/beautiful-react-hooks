/**
 * Checks if two position are equals
 */
const isSamePosition = (current, next) => {
  if (!current || !next || !next.coords) return false;
  if (current.timestamp && next.timestamp && current.timestamp !== next.timestamp) return false;

  return (
    (current.coords.latitude === next.coords.latitude)
    && (current.coords.longitude === next.coords.longitude)
    && (current.coords.altitude === next.coords.altitude)
    && (current.coords.accuracy === next.coords.accuracy)
    && (current.coords.altitudeAccuracy === next.coords.altitudeAccuracy)
    && (current.coords.heading === next.coords.heading)
    && (current.coords.speed === next.coords.speed)
  );
};

export default isSamePosition;
