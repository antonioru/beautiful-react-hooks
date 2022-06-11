import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import useHandlerSetterRef from '../dist/shared/useHandlerSetterRef'
import assertHook from './utils/assertHook'

describe('useHandlerSetterRef', () => {
  beforeEach(() => cleanup())

  assertHook(useHandlerSetterRef)

  it('should return an array of 2 elements', () => {
    const { result } = renderHook(() => useHandlerSetterRef())

    expect(result.current).to.be.an.instanceOf(Array)
    expect(result.current.length).to.equal(2)
  })

  it('should return the reference to a handler', () => {
    const { result } = renderHook(() => useHandlerSetterRef())
    const [handlerRef] = result.current

    expect(handlerRef.current).to.be.undefined
    expect(handlerRef).to.be.an('object').that.has.all.keys('current')
  })

  it('should return a handler setter', () => {
    const { result } = renderHook(() => useHandlerSetterRef())
    const [handlerRef, setHandlerRef] = result.current

    const fooCallback = () => undefined

    expect(setHandlerRef).to.be.a('function')

    act(() => {
      setHandlerRef(fooCallback)
    })

    expect(handlerRef.current).to.equal(fooCallback)
  })

  it('the setter should throw when changing the handler to an invalid value', () => {
    const { result } = renderHook(() => useHandlerSetterRef())
    const [, setHandlerRef] = result.current

    const shouldThrow = () => {
      setHandlerRef({ foo: 'bar' })
    }

    expect(shouldThrow).to.throw()
  })
})
