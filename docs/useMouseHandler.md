<a name="useMouseHandler"></a>

## useMouseHandler()
Returns a series of callback setter to possibly handle the most used mouse events.<br/>
It accepts a DOM ref representing the events target. <br/>
If a target is not provided the events will be globally attached to the document object.

### Target ref usage:

```jsx harmony
const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseHandler();

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
