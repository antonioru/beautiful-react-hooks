import debounce from './debounce';
import promiseDelay from '../../test/utils/promiseDelay';

describe('debounce utility', () => {
  beforeEach(sinon.restore);

  it('should be an arrow function', () => {
    expect(debounce).to.be.a('function');
    expect(debounce.prototype).to.be.empty;
  });

  it('should return a single function', () => {
    const functionMock = () => null;
    const result = debounce(functionMock);

    expect(result).to.be.a('function');
  });

  it('should debounce the execution of the given function', async () => {
    const delay = 250;
    const spy = sinon.spy();
    const debounced = debounce(spy, delay);

    debounced();
    debounced();
    debounced();

    await promiseDelay(delay);

    expect(spy.called).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});
