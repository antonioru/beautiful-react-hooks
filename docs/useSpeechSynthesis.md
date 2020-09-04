# useSpeechSynthesis

Enables the possibility to perform a text-to-speach operation in your React component by using the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Why? 💡

- wraps the business logic of handling with the Web Speech API into a single function

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

```jsx harmony
import { Button, Input } from 'beautiful-react-ui';
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis'; 

const SpeechSynthesisDemo = () => {
  const [name, setName] = React.useState('Antò');
  const luca = speechSynthesis.getVoices()[4];
  const { speak } = useSpeechSynthesis(`Ciao, ${name}`, { voice: luca }); 
  
  return (
   <DisplayDemo>
     <Input value={name} onChange={(e, next) => setName(next)} placeholder="Your name" fluid style={{marginBottom: '1rem'}} />
     <Button onClick={speak}>Greet!</Button>
   </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Mastering the hook

#### ✅ When to use
 
- When a component should have a different layout/behaviour on different medias
- Mount/Unmount sub-components according to a defined media-query

#### 🛑 When not to use

- Do not use this hook to define the user device
