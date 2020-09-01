import { useEffect } from 'react';

/**
 * Hook, which helps you combine rxjs flow and setState in your component
 */
const useObservable = (observable, setter) => {
  useEffect(() => {
    const subscription = observable.subscribe(setter);

    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

export default useObservable;
