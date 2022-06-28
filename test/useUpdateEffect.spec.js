import { useEffect } from 'react'
import { cleanup, renderHook } from '@testing-library/react-hooks'

import assertHook from './utils/assertHook'
import useUpdateEffect from '../dist/useUpdateEffect'

describe('useUpdateEffect', () => {
  beforeEach(() => {
    cleanup()
  })

  assertHook(useUpdateEffect)

  it('should represent directly the difference between useEffect and useUpdateEffect', () => {
    const useEffectCallbackSpy = sinon.spy()
    const useUpdateEffectCallbackSpy = sinon.spy()

    const { rerender: rerenderUseEffect } = renderHook(() => useEffect(useEffectCallbackSpy))
    const { rerender: rerenderUseUpdateEffect } = renderHook(() => useUpdateEffect(useUpdateEffectCallbackSpy))

    expect(useEffectCallbackSpy.called).to.be.true
    expect(useUpdateEffectCallbackSpy.called).to.be.false

    rerenderUseEffect();
    rerenderUseUpdateEffect()

    expect(useEffectCallbackSpy.called).to.be.true
    expect(useUpdateEffectCallbackSpy.called).to.be.true
  })
})
