# useSpeechSynthesis

A hook that provides an interface for using the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to
recognize and transcribe speech in a user's browser.

### Why? 💡

- Abstracts the implementation details of the Web Speech API into a single reusable function.

### Basic Usage:

```jsx harmony
import { Button, Space, Tag, Typography, Input } from 'antd';
import useSpeechRecognition from 'beautiful-react-hooks/useSpeechRecognition';

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { startRecording, transcript, stopRecording, isRecording, isSupported } = useSpeechRecognition();

  return (
    <DisplayDemo title="useSpeechSynthesis">
      <Space direction="vertical">
        <Typography.Paragraph>
          Supported: <Tag color={isSupported ? 'green' : 'red'}>{isSupported ? 'Yes' : 'No'}</Tag>
        </Typography.Paragraph>
        <Button onClick={!isRecording ? startRecording : stopRecording} type="primary">
          {isRecording ? 'Stop' : 'Start'} recording
        </Button>
        <Typography.Paragraph>
          {transcript}
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

<!-- Types -->
