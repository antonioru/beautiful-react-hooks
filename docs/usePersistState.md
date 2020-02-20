# usePersistState

Your classic state hook with persisting. Uses the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store state values. 

### 💡 Why?

- Quick and alternative way to Redux-redux-persist workflow for persisting values.

### Basic Usage:

```jsx harmony
import { usePersistState } from 'beautiful-react-hooks'; 


const YourExample = () => {
  const [value, setValue] = usePersistState('StorageKey', 'defaultValue')

   const changeValueAndStoreIt = (v) => {
     // Sets the new value
       setValue('New Value is here')
  }
  
  return (
    <YourComponent>
      {value}
    </YourComponent>
  );
};

<YourExample />
```

### Use cases

description of the use case

```jsx harmony
import React, { useEffect } from 'beautiful-react-hooks'; 
import { usePersistState } from 'beautiful-react-hooks'; 


const NotificationBadge = () => {
   const [notificationCount, setNotificationCount] = usePersistState('notificationCount', 0)

   // Your updating logic here
   const getNotificationCount = (count) => {
      setNotificationCount(count)
  }

   const clearNotificationCount = () => {
      setNotificationCount(0)
  }
  
    useEffect(() => {
      getNotificationCount(34)
  }, [])


  return (
    <Badge onClick={() => clearNotificationCount()}>
      {notificationCount}
    </Badge>
  )
};

<NotificationBadge />
```

### Mastering the hooks

#### ✅ When to use
 
- Important state values you may want to save

#### 🛑 When not to use

- For storing large data
