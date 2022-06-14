export interface Noop {
  noop: true,

  (): void,
}

/**
 * Represent a generic function.
 * Used internally to improve code readability
 */
export interface GenericFunction {
  (...args: any[]): any
}

/**
 * Typed generic callback function, used mostly internally
 * to defined callback setters
 */
export interface SomeCallback<TArgs, TResult = void> {
  (...args: TArgs[]): TResult
}

/**
 * A callback setter is generally used to set the value of
 * a callback that will be used to perform updates
 */
export interface CallbackSetter<TArgs> {
  (nextCallback: SomeCallback<TArgs>): void
}

/**
 * This type is used internally to avoid using directly GeolocationPosition
 * as that type is not always compatible with all typescript versions
 */
export interface BRHGeolocationPosition {
  readonly timestamp: number;
  readonly coords: {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
  };
}

/**
 * This type is used internally to avoid using directly GeolocationPositionError
 * as that type is not always compatible with all typescript versions
 */
export interface BRHGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}
