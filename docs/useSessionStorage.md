# useSessionStorage

A hook for storing values into [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

### 💡 Why?

- A quick way to use the `sessionStorage` in your React components.

### Basic Usage:

```jsx harmony
import React, { useCallback } from 'react';
import { Pill, Paragraph, Icon } from 'beautiful-react-ui';
import useSessionStorage from 'beautiful-react-hooks/useSessionStorage';

const NotificationBadgeExample = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useSessionStorage('demo-notification-count', notifications);
  
  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  return (
    <DisplayDemo>
      <Paragraph>Click on the badge to clear from the session storage</Paragraph>
      <Pill color="primary" onClick={clearNotifications}>
        <Icon name="envelope" />
        You've got {notificationCount} new messages
      </Pill>
    </DisplayDemo>
  )
};

<NotificationBadgeExample notifications={100} />
```

### Mastering the hooks

#### ✅ When to use

- When you need to get/set values from and to the `sessionStorage`

#### 🛑 When not to use

- Do not use this hook as a state manager, the `sessionStorage` is meant to be used for small pieces of data
