import throttle from './throttle';
import promiseDelay from '../../test/utils/promiseDelay';

describe('debounce utility', () => {
  beforeEach(sinon.restore);

  it('should be an arrow function', () => {
    expect(throttle).to.be.a('function');
    expect(throttle.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const functionMock = () => null;
    const result = throttle(functionMock);

    expect(result).to.be.a('function');
  });

  it('should throttle the execution of the given function', async () => {
    const delay = 250;
    const spy = sinon.spy();
    const throttled = throttle(spy, delay);

    throttled();
    throttled();
    throttled();

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.equal(1);

    await promiseDelay(10 + delay);

    throttled();

    expect(spy.callCount).to.equal(2);
  });
});
