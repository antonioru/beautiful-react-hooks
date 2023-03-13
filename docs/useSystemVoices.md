# useSystemVoices

A hook that returns all the available voices on the system.

**Note:** it's important to note that the purpose of this hook is to maintain backward compatibility with a previous version of the library
that utilized a non-stable version of the Web Speech API. In that version, voices were returned asynchronously.

If you are currently using a version of the library that does not require this hook, you can simply run:

```typescript static  
const voices = window.speechSynthesis.getVoices()
```

### Why? 💡

- At the moment, the `window.speechSynthesis.getVoices` function returns all the available system voices, but since  
  it does it
  asynchronously [the returning value is an empty array until a second call is performed](https://w3c.github.io/speech-api/speechapi-errata.html)
  this hook manage the side-effect of correctly retrieve all the available system voices.

### Basic Usage:

```jsx harmony
import { List, Typography } from 'antd';
import useSystemVoices from 'beautiful-react-hooks/useSystemVoices';

const SpeechSynthesisDemo = () => {
  const voices = useSystemVoices();

  return (
          <DisplayDemo title="useSystemVoices">
            <Typography.Title>System voices</Typography.Title>
            <List condensed>
              {voices.map(({ name, lang }) => <List.Item key={name}>{name} - <small>{lang}</small></List.Item>)}
            </List>
          </DisplayDemo>
  );
};

<SpeechSynthesisDemo />
```

<!-- Types -->
### Types
    
```typescript static
/**
 * Returns all the available voices on the system.
 * This hook is here to backward compatibility with the previous version of the library that was using
 * a different non-stable version of the Web Speech API.
 */
declare const useSystemVoices: () => SpeechSynthesisVoice[];
export default useSystemVoices;

```
<!-- Types:end -->