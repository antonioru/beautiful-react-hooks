export type CallbackSetter<T> = (handler: T) => void;

export type Noop = () => void;

export interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;

  cancel(): void;

  flush(): ReturnType<T> | undefined;
}
