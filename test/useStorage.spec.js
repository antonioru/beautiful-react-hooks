import React from 'react'
import { cleanup as cleanupHooks } from '@testing-library/react-hooks'
import createStorageHook from '../dist/shared/createStorageHook'

describe('createStorageHook', () => {
  beforeEach(cleanupHooks)

  afterEach(sinon.restore)

  it('should be a function', () => {
    expect(createStorageHook).to.be.a('function')
  })

  it('should return a function', () => {
    const useLocalStorage = createStorageHook('local')
    expect(useLocalStorage).to.be.a('function')
  })

  it('should warn when an invalid storage name is provided', () => {
    const warnSpy = sinon.spy(console, 'warn')

    createStorageHook('foo')

    expect(warnSpy.called).to.be.true
  })
})
