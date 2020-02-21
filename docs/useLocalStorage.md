# useLocalStorage

A hook for storing data. Uses the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store values.

### 💡 Why?

- Quick and alternative way to reading/storing data.

### Basic Usage:

```jsx harmony
import React, { useCallback } from 'react'; 
import { Pill, Paragraph, Icon } from 'beautiful-react-ui'; 
import { useLocalStorage } from 'beautiful-react-hooks'; 

const NotificationBadgeExample = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useLocalStorage('demo-notification-count', notifications);
  
  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  return (
    <DisplayDemo>
        <Paragraph>Click on the badge to clear from the local storage</Paragraph>
        <Pill color="primary" onClick={clearNotifications}>
          <Icon name="envelope" />
          You've got {notificationCount} new messages
        </Pill>
    </DisplayDemo>
  )
};

<NotificationBadgeExample notifications={100}/>
```

### Mastering the hooks

#### ✅ When to use
 
- When you need to get/save data from and to the local storage

#### 🛑 When not to use

- Do not use this hook as a state manager, the localStorage is meant to be used for small pieces of data
