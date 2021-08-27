import isAPISupported from '../dist/shared/isAPISupported'

describe('isAPISupported utility', () => {
  it('should be a function', () => {
    expect(isAPISupported).to.be.a('function')
  })

  it('should return true if an API is supported', () => {
    const result = isAPISupported('addEventListener')

    expect(result).to.be.true
  })
})
