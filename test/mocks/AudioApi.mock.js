class AudioApiMock extends window.Audio {
  src;
  state;
  duration;
  playing;
  constructor() {
    super();

    this.src = "";
    this.duration = NaN;
    this.playing = false;
    this.state = "STOPPED";
  }
  play = () => {
    this.playing = true;
    this.state = "PLAYING";

    return super.play();
  };
  pause = () => {
    this.playing = false;
    this.state = "PAUSED";

    return super.pause();
  };
}

export default AudioApiMock;
