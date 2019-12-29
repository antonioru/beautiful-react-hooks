import { MutableRefObject, EffectCallback, DependencyList } from 'react';

export type CallbackSetter = EffectCallback;

export declare const useCallbackRef: () => [MutableRefObject<Function>, EffectCallback];
export declare const useDebouncedCallback: (fn: Function, wait?: number, dependencies?: DependencyList) => EffectCallback;
export declare const useGlobalEvent: (eventName: string) => CallbackSetter;
export declare const useInterval: (delay?: number) => CallbackSetter;
export declare const useLifecycle: () => { onMount: CallbackSetter, onUnmount: CallbackSetter };

type MouseTarget = HTMLElement | Document | Window;

type MouseHandlers = {
  onMouseDown: CallbackSetter,
  onMouseEnter: CallbackSetter,
  onMouseLeave: CallbackSetter,
  onMouseMove: CallbackSetter,
  onMouseOut: CallbackSetter,
  onMouseOver: CallbackSetter,
  onMouseUp: CallbackSetter,
}
export declare const useMouseHandler: (ref?: MutableRefObject<MouseTarget>) => MouseHandlers;

type MouseState = {
  clientX: number,
  clientY: number,
  screenX: number,
  screenY: number,
}
export declare const useMouseState: (ref?: MutableRefObject<MouseTarget>) => MouseState;

export declare const useMouse: (ref?: MutableRefObject<MouseTarget>) => [MouseState, MouseHandlers];

export declare const useOnMount: () => CallbackSetter;
export declare const useThrottledCallback: (fn: Function, wait?: number, dependencies?: DependencyList) => EffectCallback;

export declare const useTimeout: (delay?: number) => CallbackSetter;

export declare const useWillUnmount: () => CallbackSetter;
export declare const useWindowResize: () => CallbackSetter;
export declare const useWindowScroll: () => CallbackSetter;
