import makePositionObject from './makePositionObject';
import { positionMock } from '../../test/utils/GeoLocationApiMock';

describe('makePositionObject utility', () => {
  it('should be an arrow function', () => {
    expect(makePositionObject).to.be.a('function');
    expect(makePositionObject.prototype).to.be.empty;
  });

  it('should return null if nothing is provided', () => {
    const result = makePositionObject();

    expect(result).to.be.null;
  });

  it('should remove unwanted property from a position object', () => {
    const pos = {
      ...positionMock,
      foo: 'bar',
      bar: 'foo',
    };

    const result = makePositionObject(pos);

    expect(result).to.be.deep.equal(positionMock);
  });
});
