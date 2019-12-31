const geoStandardOptions = Object.create(null);

geoStandardOptions.enableHighAccuracy = false;
geoStandardOptions.timeout = 0xFFFFFFFF;
geoStandardOptions.maximumAge = 0;

export default Object.freeze(geoStandardOptions);
