<a name="useMouseHandler"></a>

## useMouseHandler()
Returns a series of callback setter to possibly handle the most used mouse events.<br/>
It accepts a DOM ref representing the events target. <br/>
If a target is not provided the events will be globally attached to the document object.
<br/>
### Shall `useMouseHandler` replace mouse handler props?

**It shall not!**<br />
**useMouseHandler is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
a drag n drop hook.<br />
Using useMouseHandler handlers instead of the classic props approach it's just as bad as it sounds since you'll
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
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseHandler();

  // demo purposes only, in real-life scenario use onMouseMove prop instead
  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <div style={style}>
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
  const { onMouseMove } = useMouseHandler();

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
