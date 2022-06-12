import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import createHandlerSetter from '../dist/factory/createHandlerSetter'
import assertFunction from './utils/assertFunction'

describe('createHandlerSetter', () => {
  beforeEach(() => cleanup())

  assertFunction(createHandlerSetter)

  it('should return an array of 2 elements', () => {
    const { result } = renderHook(() => createHandlerSetter())

    expect(result.current).to.be.an.instanceOf(Array)
    expect(result.current.length).to.equal(2)
  })

  it('should return the reference to a handler', () => {
    const { result } = renderHook(() => createHandlerSetter())
    const [handlerRef] = result.current

    expect(handlerRef.current).to.be.undefined
    expect(handlerRef).to.be.an('object').that.has.all.keys('current')
  })

  it('should return a handler setter', () => {
    const { result } = renderHook(() => createHandlerSetter())
    const [handlerRef, setHandlerRef] = result.current

    const fooCallback = () => undefined

    expect(setHandlerRef).to.be.a('function')

    act(() => {
      setHandlerRef(fooCallback)
    })

    expect(handlerRef.current).to.equal(fooCallback)
  })

  it('the setter should throw when changing the handler to an invalid value', () => {
    const { result } = renderHook(() => createHandlerSetter())
    const [, setHandlerRef] = result.current

    const shouldThrow = () => {
      setHandlerRef({ foo: 'bar' })
    }

    expect(shouldThrow).to.throw()
  })
})
