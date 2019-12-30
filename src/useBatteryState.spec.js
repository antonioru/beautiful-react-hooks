import { cleanup } from '@testing-library/react-hooks';
import useBatteryState from './useBatteryState';

/**
 * @TODO: write tests for this hook.
 * The tests for this hook are missing (and so it has been excluded from .nycrc) because JSDom is not actually
 * supporting the Javascript battery API.
 * Please consider contributing to [JSDom](https://github.com/jsdom/jsdom)
 */
describe('useBatteryState', () => {
  beforeEach(cleanup);

  it('should be an arrow function', () => {
    expect(useBatteryState).to.be.a('function');
    expect(useBatteryState.prototype).to.be.empty;
  });
});
