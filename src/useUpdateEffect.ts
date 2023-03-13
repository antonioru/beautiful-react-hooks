import { type DependencyList, type EffectCallback, useEffect } from 'react'
import useIsFirstRender from './useIsFirstRender'

/**
 * A hook that runs an effect after the first render.
 * @param callback
 * @param deps
 */
const useUpdateEffect = (callback: EffectCallback, deps?: DependencyList) => {
  const isFirstRender = useIsFirstRender()

  useEffect(() => {
    if (!isFirstRender) {
      return callback()
    }

    return undefined
  }, deps)
}

export default useUpdateEffect
