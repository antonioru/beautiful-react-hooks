import React from 'react'
import { cleanup, render } from '@testing-library/react'

import assertHook from './utils/assertHook'
import useIsFirstRender from '../dist/useIsFirstRender'

describe('useIsFirstRender', () => {
  beforeEach(() => {
    cleanup()
  })

  assertHook(useIsFirstRender)

  it('should return isFirstRender flag set to true before the first render and then always false', () => {
    const TestComponent = ({ isAfterRerender }) => {
      const isFirstRender = useIsFirstRender();

      if (!isAfterRerender) {
        expect(isFirstRender).to.be.eq(true)
      } else {
        expect(isFirstRender).to.be.eq(false)
      }

      return <div />
    }

    const { rerender } = render(<TestComponent isAfterRerender={false} />)

    rerender(<TestComponent isAfterRerender />)
    rerender(<TestComponent isAfterRerender />)
  })
})
