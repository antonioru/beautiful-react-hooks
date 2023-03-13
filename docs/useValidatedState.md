# useValidatedState

This hook is similar to useState but accepts a validator function as first parameter and the initial state value as second, then returns the
state array where the third parameter is result of the validation.

### Why? 💡

- You want to have information on a state validation.

### Basic Usage:

```jsx harmony
import { Input, Space, Typography } from 'antd';
import useValidatedState from 'beautiful-react-hooks/useValidatedState';

const passwordValidator = (password) => password.length > 3;

const ValidatedField = () => {
  const [password, setPassword, validation] = useValidatedState(passwordValidator, 'sk8');

  return (
    <DisplayDemo title="useValidatedState">
      <Space direction="vertical">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          status={!validation.valid && 'error'}
          placeholder="Insert password"
        />
        <Typography.Paragraph>
          {validation.valid ? 'Password is valid' : 'Password is too short'}
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<ValidatedField />
```

### Mastering the hook

#### ✅ good to know:

- useValidatedState does not re-render your component twice to save the validation state.

<!-- Types -->
### Types
    
```typescript static
/**
 * Returns a state that changes only if the next value pass its validator
 */
declare const useValidatedState: <TValue, TValidator extends Validator<TValue>>(validator: TValidator, initialValue?: TValue | undefined) => [TValue, (nextValue: TValue) => void, ValidationResult];
export type Validator<TValue> = (value: TValue) => boolean;
export interface ValidationResult {
    changed: boolean;
    valid?: boolean;
}
export default useValidatedState;

```
<!-- Types:end -->