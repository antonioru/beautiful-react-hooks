import { useEffect } from 'react'
import { type Observable, type Observer } from 'rxjs'

/**
 * Hook, which helps you combine rxjs flow and setState in your component
 */
const useObservable = <T, F extends Partial<Observer<T>> | ((value: T) => void)>(observable: Observable<T>, setter: F) => {
  useEffect(() => {
    const subscription = observable.subscribe(setter)

    return () => {
      subscription.unsubscribe()
    }
  }, [observable, setter])
}

export default useObservable
