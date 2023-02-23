# useAudio

Creates an `<audio>` element, monitors its state and provides access to playback controls.

### Why? 💡

- A speedy approach to integrating the audio feature into your React component
- Enhances the readability of components involving the audio feature

### Basic Usage:

```jsx harmony
import { useRef, useState } from 'react';
import { Button, Typography } from 'antd';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import useAudio from 'beautiful-react-hooks/useAudio';

const UseAudioComponent = () => {
  const [state, controls] = useAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", { autoPlay: true });
  const code = JSON.stringify(state, null, '\t');

  const Actions = [
    <Button onClick={controls.play} shape="round" icon={<PlayCircleFilled />} />,
    <Button onClick={controls.pause} shape="round" icon={<PauseCircleFilled />} />,
    <Button onClick={controls.mute}>
      Mute
    </Button>,
    <Button onClick={() => controls.setVolume(state.volume + 0.1)}>Vol +1</Button>,
    <Button onClick={() => controls.setVolume(state.volume - 0.1)}>Vol -1</Button>,
    <Button onClick={() => controls.seek(state.currentTime + 10)}>+10 secs</Button>,
    <Button onClick={() => controls.seek(state.currentTime - 10)}>-10 secs</Button>
  ]

  return (
    <DisplayDemo title="useAudio" actions={Actions}>
      <Typography.Paragraph code>
        <pre>
          {code}
        </pre>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<UseAudioComponent />
```

<!-- Types -->