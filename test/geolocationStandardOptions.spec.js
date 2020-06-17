import geolocationStandardOptions from '../dist/cjs/utils/geolocationStandardOptions';

describe('geolocationStandardOptions utility', () => {
  it('should be an object without any prototype', () => {
    expect(geolocationStandardOptions).to.be.an('object').that.has.all.deep.keys(
      'enableHighAccuracy', 'timeout', 'maximumAge',
    );
    expect(geolocationStandardOptions).to.be.frozen;
  });
});
