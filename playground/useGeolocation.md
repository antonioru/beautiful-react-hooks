```jsx noeditor
// for demo purposes only
const style = window.compStyle = {
  background: '#FDFEFD',
  width: '250px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(20, 20, 20, .1)',
  margin: '10px auto',
};
```

```jsx harmony
import { useGeolocation } from 'beautiful-react-hooks'; 

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation(); 
  
  onChange(() => {
    console.log('Position changed...');
  });
  
  return (
   <div style={compStyle}>
     The current position is:
     {geoState.isRetrieving && (<p>Retrieving position...</p>)}
     {geoState.isSupported && geoState.position && [
       <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
       <p key={1}>Lng: {geoState.position.coords.longitude}</p>
     ]}
   </div>
  );
};

<PositionReporter />
```
