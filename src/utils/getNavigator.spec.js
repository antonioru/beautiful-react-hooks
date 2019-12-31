import getNavigator from './getNavigator';

describe('getNavigator utility', () => {
  it('should be an arrow function', () => {
    expect(getNavigator).to.be.a('function');
    expect(getNavigator.prototype).to.be.empty;
  });

  it('should return the window navigator if exists', () => {
    const result = getNavigator();

    expect(result).to.be.equal(window.navigator);
  });

  it('should return the null if navigator does not exists', () => {
    delete window.navigator;

    const result = getNavigator();

    expect(result).to.be.equal(null);
  });
});
