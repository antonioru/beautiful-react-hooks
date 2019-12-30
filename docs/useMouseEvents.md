<a name="useMouseEvents"></a>

## useMouseEvents()
Returns a frozen object of callback setters to handle the mouse events.<br/>
It accepts a DOM ref representing the events target. <br/>
If a target is not provided the events will be globally attached to the document object.
<br/>
### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?

**They shall not!**<br />
**useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
a drag n drop hook.<br />
Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
lose the React SyntheticEvent performance boost.<br />
If you were doing something like the following:

```jsx harmony
const MyComponent = (props) => {
 const { myCallback } = props;

 return <div onMouseDown={myCallback} />
}
```

**Please keep doing it**!

### Target ref usage:

```jsx harmony
const MyComponent = () => {
  const ref = useRef();
  const { onMouseMove } = useMouseEvents(ref);
  const [coordinates, setCoordinates] = useState([0, 0]);

  // demo purposes only, in real-life scenario use onMouseMove prop instead
  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <div ref={ref}>
      The current mouse coordinates within this div are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </div>
  );
}
```
<br />

### Global events usage:

```jsx harmony
const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseEvents();

  // demo purposes only, in real-life scenario use onMouseMove prop instead
  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <div style={style}>
      The current mouse coordinates within the document are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </div>
  );
};
```

**Kind**: global function  
