import React from 'react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useStorage from '../dist/useStorage';

describe('useStorage', () => {
  beforeEach(cleanupHooks);

  afterEach(sinon.restore);

  it('should be a function', () => {
    expect(useStorage).to.be.a('function');
  });

  it('should return a function', () => {
    const useLocalStorage = useStorage('local');
    expect(useLocalStorage).to.be.a('function');
  });

  it('should warn when an invalid storage name is provided', () => {
    const warnSpy = sinon.spy(console, 'warn');

    useStorage('foo');

    expect(warnSpy.called).to.be.true;
  });
});
