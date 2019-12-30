import useBattery from './useBattery';

/**
 * @TODO: write tests for this hook.
 * The tests for this hook are missing (and so it has been excluded from .nycrc) because JSDom is not actually
 * supporting the Javascript battery API.
 * Please consider contributing to [JSDom](https://github.com/jsdom/jsdom)
 */
describe('useBatteryEvents', () => {
  it('should be an arrow function', () => {
    expect(useBattery).to.be.a('function');
    expect(useBattery.prototype).to.be.empty;
  });
});
