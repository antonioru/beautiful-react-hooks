# useAudio

Creates <audio> element, tracks its state and exposes playback controls.

### Why? 💡

- A quick way to use the `Audio` in your React components.

### Basic Usage:

```jsx harmony
import { useRef, useState } from 'react';
import { Button } from 'beautiful-react-ui';
import useAudio from 'beautiful-react-hooks/useAudio';

const UseAudioComponent = () => {
  const [state, controls] = useAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", { autoPlay: true });

  return (
    <DisplayDemo>
      {JSON.stringify(state, null, 2)}
      <br />
      <Button onClick={controls.play}>
        Play
      </Button>
      <Button onClick={controls.pause}>
        Pause
      </Button>
      <br />
      <Button onClick={controls.mute}>
        Mute
      </Button>
      <Button onClick={controls.unmute}>
        Unmute
      </Button>
      <br />
      <Button onClick={() => controls.setVolume(.1)}>Volume: 10%</Button>
      <Button onClick={() => controls.setVolume(.5)}>Volume: 50%</Button>
      <Button onClick={() => controls.setVolume(1)}>Volume: 100%</Button>
      <br />
      <Button onClick={() => controls.seek(state.currentTime + 10)}>
        Jump 10 seconds
      </Button>
      <Button onClick={() => controls.seek(state.currentTime - 10)}>
        Jump -10 seconds
      </Button>
    </DisplayDemo>
  );
};

<UseAudioComponent />
```
