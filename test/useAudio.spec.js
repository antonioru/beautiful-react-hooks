import {
  cleanup,
  renderHook,
} from "@testing-library/react-hooks";

import useAudio from "../dist/useAudio";
import assertHook from "./utils/assertHook";

import AudioMock from "./mocks/AudioApi.mock";

const validAudioUrl =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

describe("useAudio", () => {
  const originalAudio = global.Audio;

  before(() => {
    global.Audio = window.Audio = AudioMock;
  });

  beforeEach(() => {
    cleanup();
  });

  after(() => {
    global.Audio = window.Audio = originalAudio;
  });

  assertHook(useAudio);

  describe("when the Audio API is not supported", () => {
    beforeEach(() => {
      delete global.Audio;
      delete window.Audio;
    });

    afterEach(() => {
      global.Audio = window.Audio = originalAudio;
      sinon.restore();
    });

    it("should not play anything", async () => {
      const warnSpy = sinon.spy(console, "warn");

      const { result } = renderHook(() => useAudio(validAudioUrl));

      const [state, controls, audio] = result.current;

      expect(warnSpy.called).to.be.true;
      expect(audio.current).to.be.null;
      expect(controls)
        .to.be.an("object")
        .that.has.all.deep.keys(
          "play",
          "mute",
          "pause",
          "unmute",
          "seek",
          "onError",
          "setVolume"
        );
      expect(state)
        .to.be.an("object")
        .that.has.all.deep.keys(
          "loop",
          "muted",
          "playbackRate",
          "volume",
          "currentTime",
          "duration",
          "isPlaying",
          "autoPlay",
          "isSrcLoading",
          "preload"
        );
    });
  });

  it("should return state, controls and audioRef", async () => {
    const { result } = renderHook(() => useAudio(validAudioUrl));

    const [state, controls, audio] = result.current;

    expect(audio.current).to.not.be.undefined;
    expect(controls)
      .to.be.an("object")
      .that.has.all.deep.keys(
        "play",
        "mute",
        "pause",
        "unmute",
        "seek",
        "onError",
        "setVolume"
      );
    expect(state)
      .to.be.an("object")
      .that.has.all.deep.keys(
        "loop",
        "muted",
        "playbackRate",
        "volume",
        "currentTime",
        "duration",
        "isPlaying",
        "autoPlay",
        "isSrcLoading",
        "preload"
      );
  });
});
