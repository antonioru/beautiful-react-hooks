# useDarkMode

A hook that manages all the necessary operations to incorporate a toggle switch for dark and light modes on your website

### 💡 Why?

- Keep information about dark/light mode consistent and in sync across sessions using localStorage
- Return the methods that allows you to change into dark/light mode
- Safely read information about the dark/light mode from user's operating system using `prefers-color-scheme`

### Basic Usage:

```jsx harmony
import { Typography, Tag, Button } from 'antd';

import useDarkMode from 'beautiful-react-hooks/useDarkMode';

const UseDarkModeExample = () => {
  const { toggle, enable, disable, isDarkMode } = useDarkMode();

  const Actions = [
    <Button type='primary' onClick={enable}>
      Enable dark mode
    </Button>,
    <Button onClick={disable}>
      Disable dark mode
    </Button>,
    <Button onClick={toggle}>
      Toggle dark mode
    </Button>
  ]

  return (
    <DisplayDemo title="useDarkMode" actions={Actions}>
      <Typography.Paragraph>Click on the buttons to update isDarkMode flag</Typography.Paragraph>
      <Typography.Paragraph>isDarkMode: <Tag>{isDarkMode ? 'true' : 'false'}</Tag></Typography.Paragraph>
    </DisplayDemo>
  );
};

<UseDarkModeExample />
```

### Mastering the hooks

#### 🛑 When not to use

- in server-only components (during SSR)

<!-- Types -->
### Types
    
```typescript static
export declare const LOCAL_STORAGE_KEY = "beautiful-react-hooks-is-dark-mode";
declare const useDarkMode: (defaultValue?: boolean, localStorageKey?: string) => Readonly<UseDarkModeReturn>;
export interface UseDarkModeReturn {
    isDarkMode: boolean;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
}
export default useDarkMode;

```
<!-- Types:end -->