# useValidatedState

This hook is similar to useState but accepts a validator function as first parameter and the initial state value as second, then returns the
state array where the third parameter is result of the validation.

### Why? 💡

- You want to have information on a state validation.

### Basic Usage:

```jsx harmony
import { Input } from 'beautiful-react-ui';
import useValidatedState from 'beautiful-react-hooks/useValidatedState';

const passwordValidator = (password) => password.length > 3;

const ValidatedField = () => {
  const [password, setPassword, validation] = useValidatedState(passwordValidator, 'sk8');

  return (
    <DisplayDemo style={{ textAlign: 'left' }}>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        color={validation.valid ? 'success' : 'danger'}
        icon="key"
        placeholder="Insert password"
        helpText={validation.valid ? 'Password is valid' : 'Password is too short'}
        fluid
      />
    </DisplayDemo>
  );
};

<ValidatedField />
```

### Mastering the hook

#### ✅ good to know:

- useValidatedState does not re-render your component twice to save the validation state.
