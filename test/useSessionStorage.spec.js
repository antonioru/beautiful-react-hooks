import React, { useEffect } from 'react'
import { cleanup as cleanupReact, render } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import useSessionStorage from '../dist/useSessionStorage'
import assertHook from './utils/assertHook'

describe('useSessionStorage', () => {
  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  afterEach(() => {
    sinon.restore()
  })

  assertHook(useSessionStorage)

  it('should return null when no default value defined', () => {
    const { result, rerender } = renderHook(() => useSessionStorage('storageKey_1'))
    const [value] = result.current

    rerender()

    expect(value).to.equal(null)
  })

  it('should return default value', () => {
    const { result, rerender } = renderHook(() => useSessionStorage('storageKey_2', 100))
    const [value] = result.current

    rerender()

    expect(value).to.equal(100)
  })

  it('should store and return new values', () => {
    const TestComponent = (props) => {
      // eslint-disable-next-line react/prop-types
      const { newValue } = props
      const [value, setValue] = useSessionStorage('storageKey_2', 100)

      const setNewState = (v) => {
        setValue(v)
      }

      useEffect(() => {
        setNewState(newValue)
      }, [])

      return <p>{value}</p>
    }

    const { container } = render(<TestComponent newValue={200} />)

    expect(container.querySelector('p').innerHTML).to.equal('200')
  })

  it('should gracefully handle a getItem error and use the default value', () => {
    Object.defineProperty(window, "sessionStorage", {
      value: {
        ...window.sessionStorage,
        getItem: () => {
          throw new Error()
        },
      },
    })

    const { result, rerender } = renderHook(() =>
      useSessionStorage("storageKey_3", 100)
    )
    const [value] = result.current

    rerender()

    expect(value).to.equal(100)
  })

  it("should gracefully handle a setItem error and maintain the current value", () => {
    Object.defineProperty(window, "sessionStorage", {
      value: {
        ...window.sessionStorage,
        setItem: () => {
          throw new Error()
        },
      },
    })

    const { result, rerender } = renderHook(() =>
      useSessionStorage("storageKey_4", 100)
    )
    const [value, setValue] = result.current
    setValue(200)

    rerender()

    expect(value).to.equal(100)
  })
})
