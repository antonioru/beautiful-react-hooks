import { DependencyList, Dispatch, EffectCallback, MutableRefObject, SetStateAction } from 'react';
import { Observable } from 'rxjs';

declare module 'beautiful-react-hooks' {

  type GenericCallback = (...args: unknown[]) => unknown;

  type TimeoutOrIntervalOpts = {
    cancelOnUnmount: boolean,
  }

  type HandlerSetter<T = Array<any>> = (a: T) => void;

  /**
   * useMouseEvents
   */
  type MouseTarget = HTMLElement | Document | Window;

  type MouseState = {
    clientX: number,
    clientY: number,
    screenX: number,
    screenY: number,
  }

  type MouseHandlerSetters = {
    onMouseDown: HandlerSetter,
    onMouseEnter: HandlerSetter,
    onMouseLeave: HandlerSetter,
    onMouseMove: HandlerSetter,
    onMouseOut: HandlerSetter,
    onMouseOver: HandlerSetter,
    onMouseUp: HandlerSetter,
  }

  /**
   * useConditionalTimeout
   */
  export const useConditionalTimeout: (fn: GenericCallback, milliseconds: number, condition: boolean, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

  type Cancelable = {
    cancel(): void;
    flush(): void;
  }

  type ThrottleOrDebounceOpts = {
    leading: boolean,
    trailing: boolean,
  }

  /**
   * Accepts a function and returns a new debounced yet memoized version of that same function that delays
   * its invoking by the defined time.
   *
   * If `wait` is not defined, its default value will be 250ms.
   */
  export const useDebouncedFn: <F extends Function>(fn: F, wait?: number, options?: Partial<ThrottleOrDebounceOpts>, dependencies?: DependencyList) => F & Cancelable;


  /**
   * useDefaultedState
   */
  export const useDefaultedState: <S = unknown> (defaultValue: S, initialState?: S) => [S, SetStateAction<S>];


  /**
   * useDidMount
   */
  export const useDidMount: (handler: CallableFunction) => HandlerSetter;

  type DragOptions = {
    dragImage?: string,
    dragImageXOffset?: number,
    dragImageYOffset?: number,
    transfer?: object | string | number,
    transferFormat: 'text' | 'text/plain',
  };

  /**
   * useDrag
   */
  export const useDrag: <T = MouseTarget>(ref: MutableRefObject<T> | null | undefined, options: DragOptions) => boolean;

  /**
   * useDragEvents
   */
  export const useDragEvents: <T = MouseTarget>(ref: MutableRefObject<T> | null | undefined, setDraggable?: boolean) => ({
    onDrag: HandlerSetter,
    onDrop: HandlerSetter,
    onDragEnter: HandlerSetter,
    onDragEnd: HandlerSetter,
    onDragExit: HandlerSetter,
    onDragLeave: HandlerSetter,
    onDragOver: HandlerSetter,
    onDragStart: HandlerSetter,
  });


  export const useDropZone: <T = MouseTarget>(ref: MutableRefObject<T> | null | undefined) => ({ isOver: boolean, onDrop: HandlerSetter })


  /**
   * useGeolocation
   */
  export const useGeolocation: (options?: PositionOptions) => [GeolocationState, GeolocationCallbackSetters];

  /**
   * useGeolocationEvents
   */
  type GeolocationCallbackSetters = {
    isSupported: boolean,
    onChange: HandlerSetter,
    onError: HandlerSetter,
  }
  export const useGeolocationEvents: (options?: PositionOptions) => GeolocationCallbackSetters;

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
  export const useGeolocationState: (options?: PositionOptions) => GeolocationState;

  /**
   * useGlobalEvent
   */
  export const useGlobalEvent: (eventName: string, options?: EventListenerOptions, handler?: Function) => HandlerSetter;

  type OrientedSwipeOptions = Pick<UseSwipeOptions, 'threshold' | 'preventDefault'>

  export const useHorizontalSwipe: <T = MouseTarget>(ref?: MutableRefObject<T | undefined> | null | undefined, options?: OrientedSwipeOptions) => SwipeState

  /**
   * useInterval
   */
  export const useInterval: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

  /**
   * useLifecycle
   */
  export const useLifecycle: (mount: Function, unmount: Function) => { onDidMount: HandlerSetter, onWillUnmount: HandlerSetter };

  /**
   * useLocalStorage
   */
  export const useLocalStorage: <T = any>(localStorageKey: string, defaultValue: T) => [T, HandlerSetter<T>];

  /**
   * useMediaQuery
   */
  export const useMediaQuery: (mediaQuery: string) => boolean;

  /**
   * useMouse
   */
  export const useMouse: <T = MouseTarget>(ref?: MutableRefObject<T | undefined>) => [MouseState, MouseHandlerSetters];

  /**
   * useMouseEvents
   */
  type MouseCallbackSetters = {
    onMouseDown: HandlerSetter,
    onMouseEnter: HandlerSetter,
    onMouseLeave: HandlerSetter,
    onMouseMove: HandlerSetter,
    onMouseOut: HandlerSetter,
    onMouseOver: HandlerSetter,
    onMouseUp: HandlerSetter,
  }
  export const useMouseEvents: (ref?: MutableRefObject<MouseTarget | undefined>) => MouseCallbackSetters;

  /**
   * useMouseState
   */
  export const useMouseState: (ref?: MutableRefObject<MouseTarget | undefined>) => MouseState;

  /**
   * useObservable
   */
  export const useObservable: <T = unknown> (observable: Observable<T>, setter: Dispatch<SetStateAction<T>>) => void;

  /**
   * useOnlineState
   */
  export const useOnlineState: () => boolean;
  /**
   * usePreviousValue
   */
  export const usePreviousValue: <T = any>(value: T) => T;

  type RenderInfo = {
    module: string,
    renders: number,
    timestamp: number,
    sinceLast: string,
  }

  export const useRenderInfo: (name?: string, log?: boolean) => RenderInfo;

  /**
   * useRequestAnimationFrame
   */

  type UseRequestAnimationFrameOptions = { increment: number, startAt: number, finishAt: number };

  export const useRequestAnimationFrame: (func: Function, options?: UseRequestAnimationFrameOptions) => HandlerSetter;

  /**
   * useResizeObserver
   */
  export const useResizeObserver: <T = HTMLElement> (elementRef: MutableRefObject<T | null | undefined>, timeout?: number) => DOMRect | undefined;

  /**
   * useSessionStorage
   */
  export const useSessionStorage: <T = any>(localStorageKey: string, defaultValue: T) => [T, HandlerSetter<T>];

  /**
   * useSpeechSynthesis
   */
  type SpeechOptions = {
    voice?: SpeechSynthesisVoice,
    pitch?: number,
    volume?: number,
    rate?: number,
  }

  export const useSpeechSynthesis: (text: string, options?: SpeechOptions) => ({ speak: Function, speechSynthUtterance: SpeechSynthesisUtterance });

  /**
   * useStorage
   */
  export const useStorage: (type: 'local' | 'session') => typeof useSessionStorage | typeof useLocalStorage;


  type UseSwipeOptions = {
    direction?: 'both' | 'vertical' | 'horizontal',
    threshold?: number,
    preventDefault?: boolean,
  }

  type SwipeState = {
    swiping: boolean,
    direction: 'left' | 'right' | 'up' | 'down' | null,
    alpha: number | number[],
    count: number,
  }

  export const useSwipe: <T = MouseTarget>(ref?: MutableRefObject<T | undefined> | null | undefined, options?: UseSwipeOptions) => SwipeState

  export const useSwipeEvents: <T = MouseTarget>(ref?: MutableRefObject<T | undefined> | null | undefined, options?: OrientedSwipeOptions) => ({
    onSwipeLeft: HandlerSetter,
    onSwipeRight: HandlerSetter,
    onSwipeUp: HandlerSetter,
    onSwipeDown: HandlerSetter,
  })

  /**
   * useSystemVoices
   */
  export const useSystemVoices: () => Array<SpeechSynthesisVoice>;

  /**
   * useThrottledFn
   */
  export const useThrottledFn: <F extends Function>(fn: F, wait?: number, options?: ThrottleOrDebounceOpts, dependencies?: DependencyList) => F & Cancelable;

  /**
   * useTimeout
   */
  export const useTimeout: (fn: Function, milliseconds: number, options?: TimeoutOrIntervalOpts) => [boolean, EffectCallback];

  /**
   * useTouch
   */
  export const useTouch: (ref?: MutableRefObject<MouseTarget | undefined>) => [TouchList, TouchCallbackSetters];

  /**
   * useTouchEvents
   */
  type TouchCallbackSetters = {
    onTouchStart: HandlerSetter,
    onTouchEnd: HandlerSetter,
    onTouchMove: HandlerSetter,
    onTouchCancel: HandlerSetter,
  }
  export const useTouchEvents: (ref?: MutableRefObject<MouseTarget | undefined>) => MouseCallbackSetters;

  /**
   * useTouchState
   */
  export const useTouchState: (ref?: MutableRefObject<MouseTarget | undefined>) => TouchList;


  /**
   * useValidatedState
   */
  export const useValidatedState: (validator: Function, initialState?: any) => [
    any,
    Dispatch<SetStateAction<any>>,
    { changed: boolean, valid: boolean }
  ];

  /**
   * useValueHistory
   */
  export const useValueHistory: <S = unknown> (value: any, distinct?: boolean) => Array<S>;

  export const useVerticalSwipe: <T = MouseTarget>(ref?: MutableRefObject<T | undefined> | null | undefined, options?: OrientedSwipeOptions) => SwipeState
  /**
   * useViewportSpy
   */
  export const useViewportSpy: (elementRef: MutableRefObject<HTMLElement | null | undefined>, options?: IntersectionObserverInit) => boolean;
  /**
   * useWillUnmount
   */
  export const useWillUnmount: (handler?: Function) => HandlerSetter;

  /**
   * useWindowResize
   */
  export const useWindowResize: (handler: Function) => HandlerSetter;

  /**
   * useWindowScroll
   */
  export const useWindowScroll: (handler: Function) => HandlerSetter;
}
