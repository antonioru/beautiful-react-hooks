import React from 'react'
import { from } from 'rxjs'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import useObservable from '../dist/useObservable'
import assertHook from './utils/assertHook'

describe('useObservable', () => {
  beforeEach(() => cleanup())

  afterEach(sinon.restore)

  assertHook(useObservable)

  it('should return a function', (done) => {
    const observer = renderHook(() => useObservable(from([1]), () => done()))
    expect(observer).to.be.a('function')
  })

  it('should subscribe correctly', (done) => {
    const numbers$ = from([1, 2, 3, 4, 5])
    const expected = []
    renderHook(() => useObservable(numbers$, (result) => expected.push(result)))
    expect(expected).to.have.lengthOf(5)
    done()
  })
})
