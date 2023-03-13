# useSpeechSynthesis

A hook that allows you to integrate text-to-speech functionality (with varying voices) within your React component by leveraging
the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Why? 💡

- Abstracts the implementation details of the Web Speech API into a single reusable function.

### Basic Usage:

```jsx harmony
import { Button, Space, Input } from 'antd';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis';

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`);

  return (
          <DisplayDemo title="useSpeechSynthesis">
            <Space direction="vertical">
              <Input value={name} onChange={(_, v) => setName(v)} placeholder="Name" fluid />
              <Button onClick={speak} type="primary">Say hello...</Button>
            </Space>
          </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Different voices:

`useSpeechSynthesis` receives an optional options object as second parameter to possibly define a custom voice.

```jsx harmony
import { Button, Input, Space, Select } from 'antd';
import useSystemVoices from 'beautiful-react-hooks/useSystemVoices';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis';

const VoiceSelector = ({ onVoiceChange }) => {
  const [current, setVoice] = React.useState(0);
  const voices = useSystemVoices();
  const options = voices.map(({ name }, index) => ({ label: name, value: index }));

  React.useEffect(() => {
    onVoiceChange(voices[current]);
  }, [current]);

  return (
          <Select options={options} onChange={setVoice} value={current} />
  );
};

const SpeechSynthesisDemo = () => {
  const [voice, setVoice] = React.useState();
  const [name, setName] = React.useState('my friend');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`, { voice });

  return (
          <DisplayDemo title="useSpeechSynthesis">
            <Space direction="vertical">
              <Input value={name} onChange={(e, next) => setName(next)} placeholder="Your name" />
              <VoiceSelector onVoiceChange={setVoice} />
              <Button type="primary" onClick={speak}>Greet!</Button>
            </Space>
          </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Different pitch, volume and rate:

`useSpeechSynthesis` receives an optional options object as second parameter to possibly define a custom `rate` and `pitch`

```jsx harmony
import { Button, Input, Space } from 'antd';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis';

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`, { rate: 1.2, pitch: 1.2, volume: 1.2 });

  return (
          <DisplayDemo title="useSpeechSynthesis">
            <Space direction="vertical">
              <Input value={name} onChange={(e, next) => setName(next)} placeholder="Your name" />
              <Button type="primary" onClick={speak}>Greet!</Button>
            </Space>
          </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Mastering the hook

#### ✅ When to use

- When you want to incorporate text-to-speech functionality in your React application by utilizing
  the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

<!-- Types -->
### Types
    
```typescript static
/**
 * The options that can be passed to the hook
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
 */
export interface UseSpeechSynthesisOptions {
    rate?: number;
    pitch?: number;
    volume?: number;
    voice?: SpeechSynthesisVoice;
}
/**
 * The result of the hook
 */
export interface SpeechSynthesisResult {
    readonly speak: () => void;
    readonly speechSynthUtterance: SpeechSynthesisUtterance;
}
/**
 * Enables the possibility to perform a text-to-speech (with different voices) operation in your
 * React component by using the Web_Speech_API
 */
declare const useSpeechSynthesis: (text: string, options?: UseSpeechSynthesisOptions) => Readonly<SpeechSynthesisResult>;
export default useSpeechSynthesis;

```
<!-- Types:end -->