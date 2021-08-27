import safeHasOwnProperty from '../dist/shared/safeHasOwnProperty';

describe('safeHasOwnProperty utility', () => {
  it('should be a function', () => {
    expect(safeHasOwnProperty).to.be.a('function');
  });

  it('should return false if nothing is provided', () => {
    const result = safeHasOwnProperty();

    expect(result).to.be.false;
  });

  it('should return true if the given object has the defined property', () => {
    const result = safeHasOwnProperty({ foo: 'bar' }, 'foo');

    expect(result).to.be.true;
  });

  it('should return false if the given object does not have the defined property', () => {
    const result = safeHasOwnProperty({ foo: 'bar' }, 'bar');

    expect(result).to.be.false;
  });
});
