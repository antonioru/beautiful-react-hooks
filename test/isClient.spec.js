import isClient from '../dist/shared/isClient'

describe('isClient utility', () => {
  it('should be a boolean', () => expect(isClient).to.be.a('boolean'))
  it('should return true during tests', () => expect(isClient).to.be.true)
})
