import { DependencyList, EffectCallback, useEffect } from 'react'

import useIsFirstRender from './useIsFirstRender'

function useUpdateEffect(callback: EffectCallback, deps?: DependencyList) {
  const isFirstRender = useIsFirstRender()

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isFirstRender) {
      return callback()
    }
  }, deps)
}

export default useUpdateEffect
