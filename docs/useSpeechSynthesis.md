# useSpeechSynthesis

<div style="padding: 10px; margin: 20px auto; background: #FDCA40; border-radius: 4px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1)">
    [This is still an experimental feature](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)
</div>

Enables the possibility to perform a text-to-speach (with different voices) operation in your React component by using the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Why? 💡

- wraps the business logic of handling the Web Speech API into a single function

### Basic Usage:

```jsx harmony
import { Button, Input } from 'beautiful-react-ui';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis'; 

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`); 
  
  return (
   <DisplayDemo>
     <Input value={name} onChange={(_, v) => setName(v)} placeholder="Name" fluid />
     <Button onClick={speak} style={{marginTop: '1rem'}}>Greet!</Button>
   </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Different voices:

`useSpeechSynthesis` receives an optional options object as second parameter to possibly define a custom voice.

```jsx harmony
import { Button, Input, Select } from 'beautiful-react-ui';
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
      <Select options={options} onChange={setVoice} value={current} fluid />
   );
};


const SpeechSynthesisDemo = () => {
  const [voice, setVoice] = React.useState();
  const [name, setName] = React.useState('my friend');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`, { voice }); 
  
  return (
   <DisplayDemo>
     <div style={{marginBottom: '20px'}}>
       <VoiceSelector onVoiceChange={setVoice} />
       <Input value={name} onChange={(e, next) => setName(next)} placeholder="Your name" fluid style={{marginBottom: '1rem'}} />
     </div>
     <Button onClick={speak}>Greet!</Button>
   </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Different pitch, volume and rate:

`useSpeechSynthesis` receives an optional options object as second parameter to possibly define a custom `rate` and `pitch`

```jsx harmony
import { Button, Input } from 'beautiful-react-ui';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis'; 

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antonio');
  const { speak } = useSpeechSynthesis(`Hello, ${name}`, { rate: 10, pitch: 15, volume: 2 }); 
  
  return (
   <DisplayDemo>
     <Input value={name} onChange={(_, v) => setName(v)} placeholder="Name" fluid />
     <Button onClick={speak} style={{marginTop: '1rem'}}>Greet!</Button>
   </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Mastering the hook

#### ✅ When to use
 
- When in need of a text-to-speech functionality using the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).


#### 🛑 When not to use

- In production...yet. This is still an **experimental feature**
