import { useEffect } from 'react'
import { Observable, Observer, Subscription } from 'rxjs'

/**
 * Hook, which helps you combine rxjs flow and setState in your component
 */
const useObservable = <T, F extends (observer?: Partial<Observer<T>>) => Subscription>(observable: Observable<T>, setter: F) => {
  useEffect(() => {
    const subscription = observable.subscribe(setter)

    return () => subscription.unsubscribe()
  }, [observable, setter])
}

export default useObservable
