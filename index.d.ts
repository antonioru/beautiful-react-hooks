import {MutableRefObject, EffectCallback, DependencyList, Dispatch, SetStateAction} from 'react';

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

type HandlerSetter = (...parameters: Array<any>) => unknown;

type Cancelable = {
  cancel(): void;
  flush(): void;
}

/**
 * useDebouncedFn
 */
export declare const useDebouncedFn: (fn: Function, wait?: number, options?: ThrottleOrDebounceOpts, dependencies?: DependencyList) => Cancelable;

/**
 * useDidMount
 */
export declare const useDidMount: (handler: Function) => HandlerSetter;

/**
 * useGeolocation
 */
export declare const useGeolocation: (options?: PositionOptions) => [GeolocationState, GeolocationCallbackSetters];

/**
 * useGeolocationEvents
 */
type GeolocationCallbackSetters = {
  isSupported: boolean,
  onChange: HandlerSetter,
  onError: HandlerSetter,
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
export declare const useGlobalEvent: (eventName: string, options?: EventListenerOptions, handler?: Function) => HandlerSetter;

/**
 * useInterval
 */
export declare const useInterval: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

/**
 * useLifecycle
 */
export declare const useLifecycle: (mount: Function, unmount: Function) => { onDidMount: HandlerSetter, onWillUnmount: HandlerSetter };

/**
 * useMediaQuery
 */
export declare const useMediaQuery: (mediaQuery: string) => boolean;

/**
 * useOnlineState
 */
export declare const useOnlineState: () => boolean;

/**
 * useViewportSpy
 */
export declare const useViewportSpy: (elementRef: MutableRefObject<HTMLElement>, options?: IntersectionObserverInit) => boolean;

/**
 * useValidatedState
 */
export declare const useValidatedState: (validator: Function, initialState?: any) => [
  any,
  Dispatch<SetStateAction<any>>,
  { changed: boolean, valid: boolean }
];


/**
 * useDrag
 */
type DragOptions = {
  dragImage?: string,
  dragImageXOffset?: number,
  dragImageYOffset?: number,
  transfer?: object | string | number,
  transferFormat: 'text' | 'text/plain',
};

export declare const useDrag: (ref: MutableRefObject<MouseTarget>, options: DragOptions) => boolean;

/**
 * useDragEvents
 */
export declare const useDragEvents: (ref: MutableRefObject<MouseTarget>, setDraggable?: boolean) => ({
  onDrag: HandlerSetter,
  onDrop: HandlerSetter,
  onDragEnter: HandlerSetter,
  onDragEnd: HandlerSetter,
  onDragExit: HandlerSetter,
  onDragLeave: HandlerSetter,
  onDragOver: HandlerSetter,
  onDragStart: HandlerSetter,
});

/**
 * useMouse
 */
export declare const useMouse: (ref?: MutableRefObject<MouseTarget>) => [MouseState, MouseCallbackSetters];

/**
 * useMouseEvents
 */
type MouseTarget = HTMLElement | Document | Window;

type MouseCallbackSetters = {
  onMouseDown: HandlerSetter,
  onMouseEnter: HandlerSetter,
  onMouseLeave: HandlerSetter,
  onMouseMove: HandlerSetter,
  onMouseOut: HandlerSetter,
  onMouseOver: HandlerSetter,
  onMouseUp: HandlerSetter,
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
export declare const useThrottledFn: (fn: Function, wait?: number, options?: ThrottleOrDebounceOpts, dependencies?: DependencyList) => Cancelable;

/**
 * useTimeout
 */
export declare const useTimeout: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

/**
 * useConditionalTimeout
 */
export declare const useConditionalTimeout: (fn: Function, milliseconds: number, condition: boolean, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

/**
 * useValueHistory
 */
export declare const useValueHistory: (value: any) => Array<any>;


/**
 * useWillUnmount
 */
export declare const useWillUnmount: (handler?: Function) => HandlerSetter;

/**
 * useWindowResize
 */
export declare const useWindowResize: (handler: Function) => HandlerSetter;

/**
 * useWindowScroll
 */
export declare const useWindowScroll: (handler: Function) => HandlerSetter;

/**
 * useRequestAnimationFrame
 */

type UseRequestAnimationFrameOptions = { increment: number, startAt: number, finishAt: number };

export declare const useRequestAnimationFrame: (func: Function, options?: UseRequestAnimationFrameOptions) => HandlerSetter;

/**
 * useLocalStorage
 */
export declare const useLocalStorage: (localStorageKey:any, defaultValue: any) => [any, HandlerSetter];

/**
 * useStorage
 */
type StorageType = 'local' | 'session';
type SetValueFn<T> = ((item: T) => T) | T;
interface StorageModifiers<T extends {}> {
	set: <K extends keyof T = keyof T>(key: K, value: SetValueFn<T[K]>) => void;
	get: <K extends keyof T = keyof T>(key?: K) => T[K];
}

type Storage<T> = T & StorageModifiers<T>;
export declare const useStorage: <T extends {} = any>(storageType: StorageType) => (initialValue?: T) => Storage<T>

/**
 * useStorageKey
 */
export declare const useStorageKey: <T extends {} = any>(storageType: StorageType) => (key: keyof T, initialValue?: T) => [T, Dispatch<SetStateAction<T>>]
