# useSystemVoices

<div style="padding: 10px; margin: 20px auto; background: #FDCA40; border-radius: 4px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1)">
    [This is still an experimental feature](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)
</div>

A side effect to retrieve all the available system voices using the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Why? 💡

- At the moment, the `window.speechSynthesis.getVoices` function returns all the available system voices, but since  
it does it asynchronously [the returning value is an empty array until a second call is performed](https://w3c.github.io/speech-api/speechapi-errata.html). 
This hook manage the side-effect of correctly retrieve all the available system voices.

### Basic Usage:

```jsx harmony
import { List, Title } from 'beautiful-react-ui';
import useSystemVoices from 'beautiful-react-hooks/useSystemVoices'; 

const SpeechSynthesisDemo = () => {
  const voices  = useSystemVoices();

  return (
   <DisplayDemo>
     <Title size="lg">System voices</Title> 
     <List condensed>
        {voices.map(({ name, lang }) => <List.Item key={name}>{name} - <small>{lang}</small></List.Item>)}
     </List>
   </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

### Mastering the hooks

#### ✅ When to use
 
- When you need to easily get all the system languages from the [Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

#### 🛑 When not to use

- In production...yet. This is still an **experimental feature**
