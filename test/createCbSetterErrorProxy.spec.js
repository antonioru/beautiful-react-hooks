import createCbSetterErrorProxy from '../dist/shared/createCbSetterErrorProxy'
import assertFunction from './utils/assertFunction'

describe('createCbSetterErrorProxy utility', () => {
  assertFunction(createCbSetterErrorProxy)

  it('should return a Proxy instance', () => {
    const result = createCbSetterErrorProxy('foo')

    expect(typeof result).to.equal('object')
  })

  it('should return an error throwing function when trying to access a property starting with \'on\'', () => {
    const errorMsg = 'foo'
    const result = createCbSetterErrorProxy(errorMsg)

    expect(result.onSomething).to.be.a('function')
    expect(result.onSomething).to.throw(Error, errorMsg)
  })

  it('should return an object when trying to access any other property', () => {
    const errorMsg = 'foo'
    const result = createCbSetterErrorProxy(errorMsg)

    expect(result.something).to.be.an('object').that.has.property('error', errorMsg)
  })
})
