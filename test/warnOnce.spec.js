import { createSandbox } from 'sinon'
import assertFunction from './utils/assertFunction'
import warnOnce from '../dist/shared/warnOnce'

describe('warnOnce', () => {
  assertFunction(warnOnce)

  const sandbox = createSandbox()

  beforeEach(() => {
    sandbox.spy(console, 'warn')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should not warn the same message twice', () => {
    const message = 'foo'
    const repeats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    repeats.forEach(() => warnOnce(message))

    expect(console.warn.calledOnce).to.be.true
  })
})
