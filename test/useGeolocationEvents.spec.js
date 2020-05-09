import React from 'react';
import { render, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useGeolocationEvents from '../dist/useGeolocationEvents';
import GeoLocationApiMock, { watchPositionSpy } from './utils/GeoLocationApiMock';

describe('useGeolocationEvents', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApiMock;
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
    expect(useGeolocationEvents).to.be.a('function');
  });

  it('should return an object of geolocation-related callback setters', () => {
    const { result } = renderHook(() => useGeolocationEvents());

    expect(result.current).to.be.an('object').that.has.all.deep.keys('isSupported', 'onChange', 'onError');
    expect(result.current).to.be.frozen;
  });

  it('should perform the onChange callback when geolocation changes', () => {
    const onChangeSpy = sinon.spy();
    const onErrorSpy = sinon.spy();

    const TestComponent = () => {
      const { onChange, onError } = useGeolocationEvents();

      onChange(onChangeSpy);
      onError(onErrorSpy);

      return <div />;
    };

    render(<TestComponent />);

    GeoLocationApiMock.listeners.s();
    GeoLocationApiMock.listeners.e();

    expect(onChangeSpy.called).to.be.true;
  });

  it('should accept an options object to be used as a parameter when calling watchPosition', () => {
    const optionsMock = { foo: 'bar' };

    const TestComponent = () => {
      const { isSupported } = useGeolocationEvents(optionsMock);

      return <div>{isSupported}</div>;
    };

    render(<TestComponent />);

    GeoLocationApiMock.listeners.s();
    GeoLocationApiMock.listeners.e();

    expect(watchPositionSpy.called).to.be.true;
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0];

    expect(lastOptions).to.equal(optionsMock);
  });

  it('if the geolocation API is not supported should return a throwing method', () => {
    delete window.navigator.geolocation; // delete for test purposes

    const { result } = renderHook(() => useGeolocationEvents());

    window.navigator.geolocation = GeoLocationApiMock; // reset to the "original" mock

    expect(result.current.onSomething).to.throw();
    expect(result.current.proprety).to.be.an('object').that.has.key('error');
  });
});
