export type Noop = () => void;

export interface GenericFunction {
  (...args: any[]): any
}

/**
 * FIXME: document this type
 */
export interface SomeCallback<TArgs, TResult = void> {
  (...args: TArgs[]): TResult
}

/**
 * FIXME: document this type
 */
export interface CallbackSetter<TArgs> {
  (nextCallback: SomeCallback<TArgs>): void
}
