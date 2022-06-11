import geolocationStandardOptions from '../dist/shared/geolocationStandardOptions'

describe('geolocationStandardOptions utility', () => {
  it('should be a frozen object defining standard geolocation options', () => {
    expect(geolocationStandardOptions).to.be.an('object').that.has.all.deep.keys(
      'enableHighAccuracy', 'timeout', 'maximumAge'
    )
    expect(geolocationStandardOptions).to.be.frozen
  })
})
