# useDarkMode

-- This hook handle all logic required to add a ☾ dark mode toggle to your website --

### 💡 Why?

- SSR safe,
- Keep information about dark mode in local storage
- Return a few functions allows you to change dark mode state
- Read information about dark mode from user's operating system `prefers-color-scheme`

### Basic Usage:

```jsx harmony
import { Pill, Paragraph, Icon } from 'beautiful-react-ui';
import useDarkMode from 'beautiful-react-hooks/useDarkMode'; 

const UseDarkModeExample = () => {
  const { 
    toggle,
    enable,
    disable,
    isDarkMode
  } = useDarkMode();
  
  return (
    <DisplayDemo>
      <Paragraph>Click on the buttons to update isDarkMode flag</Paragraph>
      <Paragraph>isDarkMode: {isDarkMode ? 'true' : 'false'}</Paragraph>
      <Pill color='primary' onClick={enable}>
        <Icon name="envelope" />
        Enable dark mode
      </Pill>
      <Pill color='primary' onClick={disable}>
        <Icon name="envelope" />
        Disable dark mode
      </Pill>
      <Pill color='primary' onClick={toggle}>
        <Icon name="envelope" />
        Toggle dark mode
      </Pill>
    </DisplayDemo>
  );
};

<UseDarkModeExample />
```

### Mastering the hooks

#### ✅ When to use
 
- When you need to handle dark/light mode logic in your app,

#### 🛑 When not to use

- This hook does not support SSR,
