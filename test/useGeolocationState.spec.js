import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import GeoLocationApi, { positionMock, watchPositionSpy } from './utils/GeoLocationApiMock';
import useGeolocationState from '../src/useGeolocationState';

describe('useGeolocationState', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApi;
  });

  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
    sinon.reset();
  });

  after(() => {
    delete window.navigator.geolocation;
  });

  it('should be a function', () => {
    expect(useGeolocationState).to.be.a('function');
  });

  it('should return a frozen object containing information about the current position', () => {
    const { result } = renderHook(() => useGeolocationState());

    expect(result.current).to.be.frozen;
    expect(result.current).to.be.an('object').that.has.all.deep.keys('isSupported', 'isRetrieving', 'position');
    expect(result.current.position).to.deep.equal(positionMock);
  });


  it('should accept an options object to be used as a parameter when calling watchPosition', () => {
    const optionsMock = { foo: 'bar' };

    const TestComponent = () => {
      const { isSupported } = useGeolocationState(optionsMock);

      return <div>{isSupported}</div>;
    };

    render(<TestComponent />);

    expect(watchPositionSpy.called).to.be.true;
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0];

    expect(lastOptions).to.equal(optionsMock);
  });
});
