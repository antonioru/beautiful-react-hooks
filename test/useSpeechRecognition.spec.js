import { cleanup, renderHook } from '@testing-library/react-hooks'
import useSpeechRecognition from '../dist/useSpeechRecognition'
import SpeechSynthesisUtteranceMock from './mocks/SpeechSynthesisUtterance.mock'
import SpeechSynthesisMock from './mocks/SpeechSynthesis.mock'
import assertHook from './utils/assertHook'

describe('useSpeechRecognition', () => {
  const originalSpeechSynth = global.speechSynthesis
  const originalSpeechSynthesisUtterance = global.SpeechSynthesisUtterance

  before(() => {
    global.speechSynthesis = SpeechSynthesisMock
    global.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock
  })

  beforeEach(() => cleanup())

  after(() => {
    global.SpeechSynthesisUtterance = originalSpeechSynthesisUtterance
    global.speechSynthesis = originalSpeechSynth
  })

  assertHook(useSpeechRecognition)

  it('should return an object containing the speak function and the utter', () => {
    const { result } = renderHook(() => useSpeechRecognition())

    expect(result.current).to.be.an('object')
    expect(result.current.startRecording).to.be.a('function')
    expect(result.current.stopRecording).to.be.a('function')
    expect(result.current.transcript).to.be.a('string')
    expect(result.current.isRecording).to.be.a('boolean')
    expect(result.current.isSupported).to.be.a('boolean')
  })
})
