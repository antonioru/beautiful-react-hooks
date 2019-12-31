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
import { useGeolocationState } from 'beautiful-react-hooks'; 

const PositionReporter = () => {
  const {isSupported, isRetrieving, position } = useGeolocationState(); 
  
  return (
   <div style={compStyle}>
     The current position is:
     {isRetrieving && (<p>Retrieving position...</p>)}
     {isSupported && position && [
       <p key={0}>Lat: {position.coords.latitude}</p>,
       <p key={1}>Lng: {position.coords.longitude}</p>
     ]}
   </div>
  );
};

<PositionReporter />
```

### Options:

```jsx harmony
import { useGeolocationState } from 'beautiful-react-hooks'; 

const PositionReporter = () => {
  const {isSupported, isRetrieving, position } = useGeolocationState({ 
    enableHighAccuracy: true, 
    timeout: 0xFFFFFFFF,
    maximumAge: 0,
  }); 
  
  return (
   <div style={compStyle}>
     The current high accuracy position is:
     {isRetrieving && (<p>Retrieving position...</p>)}
     {isSupported && position && [
       <p key={0}>Lat: {position.coords.latitude}</p>,
       <p key={1}>Lng: {position.coords.longitude}</p>
     ]}
   </div>
  );
};

<PositionReporter />
```
