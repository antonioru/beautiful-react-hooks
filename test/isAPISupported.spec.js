import isAPISupported from '../dist/shared/isAPISupported'
import assertFunction from './utils/assertFunction'

describe('isAPISupported utility', () => {
  assertFunction(isAPISupported)

  it('should return true if an API is supported', () => {
    const result = isAPISupported('addEventListener')

    expect(result).to.be.true
  })
})
