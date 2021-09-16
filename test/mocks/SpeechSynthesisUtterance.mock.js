export default class SpeechSynthesisUtteranceMock {
  constructor(text) {
    this.text = text
    this.voice = {}
    this.pitch = 0
    this.rate = 0
    this.volume = 0
  }
}
