<a name="useMouseState"></a>

## useMouseState()
Returns the current state (position) of the mouse pointer.<br/>
It possibly accepts a DOM ref representing the mouse target.<br/>
If a target is not provided the state will be caught globally.

### Target ref usage:

```jsx harmony
const MouseReporter = () => {
   const ref = useRef();
   const mouseState = useMouseState(ref);

   return (
     <div ref={ref} style={style}>
       Mouse over me to get the mouse position:
       {mouseState.pageX}, {mouseState.pageY}
     </div>
   );
}
```
<br />

### Global events usage:

```jsx harmony
const MouseReporter = () => {
   const mouseState = useMouseState();

   return (
     <div ref={ref} style={style}>
       Current mouse position:
       {mouseState.pageX}, {mouseState.pageY}
     </div>
   );
}
```
```

**Kind**: global function  
