import hasOwnProperty from './hasOwnProperty';

describe('hasOwnProperty utility', () => {
  it('should be an arrow function', () => {
    expect(hasOwnProperty).to.be.a('function');
    expect(hasOwnProperty.prototype).to.be.empty;
  });

  it('should return false if nothing is provided', () => {
    const result = hasOwnProperty();

    expect(result).to.be.false;
  });

  it('should return true if the given object has the defined property', () => {
    const result = hasOwnProperty({ foo: 'bar' }, 'foo');

    expect(result).to.be.true;
  });

  it('should return false if the given object does not have the defined property', () => {
    const result = hasOwnProperty({ foo: 'bar' }, 'bar');

    expect(result).to.be.false;
  });
});
