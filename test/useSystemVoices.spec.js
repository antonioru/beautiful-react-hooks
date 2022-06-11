import { cleanup, renderHook } from '@testing-library/react-hooks'
import useSystemVoices from '../dist/useSystemVoices'
import SpeechSynthesisMock from './mocks/SpeechSynthesis.mock'
import assertHook from './utils/assertHook'

describe('useSystemVoices', () => {
  const originalSpeechSynth = window.speechSynthesis

  before(() => {
    window.speechSynthesis = SpeechSynthesisMock
  })

  beforeEach(() => cleanup())

  after(() => {
    window.speechSynthesis = originalSpeechSynth
  })

  assertHook(useSystemVoices)

  it('should return the list of all available system voices', () => {
    const { result } = renderHook(() => useSystemVoices())

    expect(result.current).to.be.an('array')
  })
})
