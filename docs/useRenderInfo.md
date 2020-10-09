# useRenderInfo

Takes a component name and prints information on how many time the component renders, at what time and how many seconds 
has passed since the last render.

### Why? 💡

- Easily display information on components render

### Basic Usage:

```jsx harmony
import useInterval  from 'beautiful-react-hooks/useInterval'; 
import useRenderInfo  from 'beautiful-react-hooks/useRenderInfo';


const RenderInfo = () => {
    const [seconds, setSeconds] = React.useState(0);
       
    // repeat the function each 1000ms
    useInterval(() => {
      setSeconds(1 + seconds);
    }, 1000);      


   useRenderInfo('Module'); 

   return (
     <DisplayDemo>
       <p>Check the console!</p>
     </DisplayDemo>
   );
};

<RenderInfo />
```

### Custom logs:

```jsx harmony
import useInterval  from 'beautiful-react-hooks/useInterval'; 
import useRenderInfo  from 'beautiful-react-hooks/useRenderInfo';


const RenderInfo = () => {
    const [seconds, setSeconds] = React.useState(0);
    const info = useRenderInfo(); 

    // repeat the function each 1000ms
    useInterval(() => {
      setSeconds(1 + seconds);
    }, 1000);
   
   return (
     <DisplayDemo>
       <p>I'm not using the console, {info.sinceLast} seconds passed from the last render!</p>
     </DisplayDemo>
   );
};

<RenderInfo />
```

### Mastering the hook

#### ✅ When to use
 
- When debugging a component

#### 🛑 What not to do

- In production build, you don't want useless logs in console :)
