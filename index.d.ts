import { MutableRefObject, EffectCallback, DependencyList } from 'react';

export type CallbackSetter = EffectCallback;

// useCallbackRef
export declare const useCallbackRef: () => [MutableRefObject<Function>, EffectCallback];
// useDebouncedCallback
export declare const useDebouncedCallback: (fn: Function, wait?: number, dependencies?: DependencyList) => EffectCallback;
// useGlobalEvent
export declare const useGlobalEvent: (eventName: string) => CallbackSetter;
// useInterval
export declare const useInterval: (delay?: number) => CallbackSetter;
// useLifecycle
export declare const useLifecycle: () => { onMount: CallbackSetter, onUnmount: CallbackSetter };
// useMouseHandler
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

// useMouseState
type MouseState = {
  clientX: number,
  clientY: number,
  screenX: number,
  screenY: number,
}
export declare const useMouseState: (ref?: MutableRefObject<MouseTarget>) => MouseState;
// useMouse
export declare const useMouse: (ref?: MutableRefObject<MouseTarget>) => [MouseState, MouseCallbackSetters];

// useOnMount
export declare const useOnMount: () => CallbackSetter;

// usePrev
export declare const usePrev: (value: any) => unknown;

// useThrottledCallback
export declare const useThrottledCallback: (fn: Function, wait?: number, dependencies?: DependencyList) => EffectCallback;

// useTimeout
export declare const useTimeout: (delay?: number) => CallbackSetter;

// useWillUnmount
export declare const useWillUnmount: () => CallbackSetter;
// useWindowResize
export declare const useWindowResize: () => CallbackSetter;
// useWindowScroll
export declare const useWindowScroll: () => CallbackSetter;

// useGeolocationEvents
type GeolocationCallbackSetters = {
  isSupported: boolean,
  onChange: CallbackSetter,
  onError: CallbackSetter,
}
export declare const useGeolocationEvents: (options?: PositionOptions) => GeolocationCallbackSetters;

// useGeolocationState
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
// useGeolocation
export declare const useGeolocation: (options?: PositionOptions) => [GeolocationState, GeolocationCallbackSetters];
