import { MutableRefObject, EffectCallback, DependencyList } from 'react';

type ThrottleOrDebounceOpts = {
  leading: boolean,
  trailing: boolean,
}

type TimeoutOrIntervalOpts = {
  cancelOnUnmount: boolean,
}

type EventListenerOptions = {
  capture: boolean,
  once: boolean,
  passive: boolean,
}

type CallbackSetter = EffectCallback;

/**
 * useCallbackRef
 */
export declare const useCallbackRef: (value: Function) => [MutableRefObject<Function>, EffectCallback];

/**
 * useDebouncedFn
 */
export declare const useDebouncedFn: (fn: Function, wait?: number, options?: ThrottleOrDebounceOpts, dependencies?: DependencyList) => EffectCallback;

/**
 * useDidMount
 */
export declare const useDidMount: (handler: Function) => CallbackSetter;

/**
 * useGeolocation
 */
export declare const useGeolocation: (options?: PositionOptions) => [GeolocationState, GeolocationCallbackSetters];

/**
 * useGeolocationEvents
 */
type GeolocationCallbackSetters = {
  isSupported: boolean,
  onChange: CallbackSetter,
  onError: CallbackSetter,
}
export declare const useGeolocationEvents: (options?: PositionOptions) => GeolocationCallbackSetters;

/**
 * useGeolocationState
 */
type GeolocationState = {
  isSupported: boolean,
  isRetrieving: boolean,
  position: {
    timestamp: number,
    coords: {
      latitude: number,
      longitude: number,
      altitude: number,
      accuracy: number,
      altitudeAccuracy: number,
      heading: number,
      speed: number,
    },
  }
}
export declare const useGeolocationState: (options?: PositionOptions) => GeolocationState;

/**
 * useGlobalEvent
 */
export declare const useGlobalEvent: (eventName: string, options?: EventListenerOptions, handler?: Function) => CallbackSetter;

/**
 * useInterval
 */
export declare const useInterval: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

/**
 * useLifecycle
 */
export declare const useLifecycle: (mount: Function, unmount: Function) => { onDidMount: CallbackSetter, onWillUnmount: CallbackSetter };

/**
 * useMediaQuery
 */
export declare const useMediaQuery: (mediaQuery: string) => boolean;

/**
 * useMouse
 */
export declare const useMouse: (ref?: MutableRefObject<MouseTarget>) => [MouseState, MouseCallbackSetters];

/**
 * useMouseEvents
 */
type MouseTarget = HTMLElement | Document | Window;

type MouseCallbackSetters = {
  onMouseDown: CallbackSetter,
  onMouseEnter: CallbackSetter,
  onMouseLeave: CallbackSetter,
  onMouseMove: CallbackSetter,
  onMouseOut: CallbackSetter,
  onMouseOver: CallbackSetter,
  onMouseUp: CallbackSetter,
}
export declare const useMouseEvents: (ref?: MutableRefObject<MouseTarget>) => MouseCallbackSetters;

/**
 * useMouseState
 */
type MouseState = {
  clientX: number,
  clientY: number,
  screenX: number,
  screenY: number,
}
export declare const useMouseState: (ref?: MutableRefObject<MouseTarget>) => MouseState;

/**
 * usePreviousValue
 */
export declare const usePreviousValue: (value: any) => any;

/**
 * useThrottledFn
 */
export declare const useThrottledFn: (fn: Function, wait?: number, options?: ThrottleOrDebounceOpts, dependencies?: DependencyList) => EffectCallback;

/**
 * useTimeout
 */
export declare const useTimeout: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

/**
 * useValueHistory
 */
export declare const useValueHistory: (value: any) => Array<any>;


/**
 * useWillUnmount
 */
export declare const useWillUnmount: (handler?: Function) => CallbackSetter;

/**
 * useWindowResize
 */
export declare const useWindowResize: (handler: Function) => CallbackSetter;

/**
 * useWindowScroll
 */
export declare const useWindowScroll: (handler: Function) => CallbackSetter;
