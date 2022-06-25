import { cleanup as cleanupReact } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook, act } from '@testing-library/react-hooks'
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
    const { result } = renderHook(() => useSessionStorage('storageKey_1'))
    const [value] = result.current

    expect(value).to.equal(null)
  })

  it('should return default value', () => {
    const { result } = renderHook(() => useSessionStorage('storageKey_2', 100))
    const [value] = result.current

    expect(value).to.equal(100)
    expect(JSON.parse(window.sessionStorage.getItem('storageKey_2'))).to.equal(100)
  })

  it('should store and return new values', () => {
    const { result } = renderHook(() =>
      useSessionStorage("storageKey_3", 100)
    )

    expect(result.current[0]).to.equal(100)
    expect(JSON.parse(window.sessionStorage.getItem('storageKey_3'))).to.equal(100)

    act(() => {
      result.current[1](200)
    })

    expect(result.current[0]).to.equal(200)
    expect(JSON.parse(window.sessionStorage.getItem('storageKey_3'))).to.equal(200)
  })

  it('should accept a callback argument for setValue', () => {
    const { result } = renderHook(() =>
      useSessionStorage("storageKey_4", 100)
    )

    expect(result.current[0]).to.equal(100)
    expect(JSON.parse(window.sessionStorage.getItem('storageKey_4'))).to.equal(100)

    act(() => {
      result.current[1](prev => prev + 100)
    })

    expect(result.current[0]).to.equal(200)
    expect(JSON.parse(window.sessionStorage.getItem('storageKey_4'))).to.equal(200)
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

    const { result } = renderHook(() =>
      useSessionStorage("storageKey_5", 100)
    )
    const [value] = result.current
    expect(value).to.equal(100)
  })

  it("should gracefully handle a setItem error and set the new value", () => {
    Object.defineProperty(window, "sessionStorage", {
      value: {
        ...window.sessionStorage,
        setItem: () => {
          throw new Error()
        },
      },
    })

    const { result } = renderHook(() =>
      useSessionStorage("storageKey_6", 100)
    )

    act(() => {
      result.current[1](200)
    })

    expect(result.current[0]).to.equal(200)
  })
})
