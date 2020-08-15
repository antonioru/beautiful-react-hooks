# useDefaultedState

Works as `useState` except it accepts a `defaultValue` and possibly an `initialState`, then makes sure the returned state 
is always `defaultValue` when `null` or `undefined`.
 
### Why? 💡

- Avoid side-effects by ensuring a safe state

### Basic Usage:

```jsx harmony
import { Button } from 'beautiful-react-ui';
import useDefaultedState from 'beautiful-react-hooks/useDefaultedState'; 

/**
* useDefaultedState example component
*/
const DefaultedStateExample = () => {   
   const placeholder = { name: 'John Doe' };
   const data = { name: 'Antonio Rù' };
   const [user, setUser] = useDefaultedState(placeholder, data);
         
   return (
     <DisplayDemo>
       <p>The user name is: {user.name}</p>
       <Button onClick={() => setUser()}>Change to undefined</Button>
     </DisplayDemo>
   );
};

<DefaultedStateExample />
```

### Mastering the hook

#### ✅ When to use
 
- When in need of a safe state that should never be null or undefined
