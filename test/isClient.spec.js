import isClient from '../src/utils/isClient';

describe('isClient utility', () => {
  it('should be a boolean', () => expect(isClient).to.be.a('boolean'));
  it('should return true during tests', () => expect(isClient).to.be.true);
});
