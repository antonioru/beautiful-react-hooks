<a name="useGlobalEvent"></a>

## useGlobalEvent()
Accepts an event name then returns a callback setter for a function to be performed when the event triggers.

### Usage:

```jsx harmony
const MyComponent = () => {
   const [widowWidth, setWindowWidth] = useState(window.innerWidth);
   const onWindowResize = useGlobalEvent('resize');

   onWindowResize(() => {
       setWindowWidth(window.innerWidth);
   });

   return (
     <div>
       Current window width: {widowWidth}
     </div>
   );
}
```

**Kind**: global function  
