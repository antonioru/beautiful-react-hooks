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
import { useState } from 'react';
import { useGeolocationEvents } from 'beautiful-react-hooks'; 

const GeoReporter = () => {
  const [ position, setGeoPosition] = useState();
  const [ error, setError] = useState();
  const { isSupported, onChange, onError } = useGeolocationEvents({ enableHighAccuracy: true });
  
  onChange((geoPosition) => setGeoPosition(geoPosition));
  
  onError((err) => setError(err));
  
  return (
   <div style={compStyle}>
     <p>Geolocation supported: {isSupported ? 'yes' : 'no'}</p>
     {!error && position && (
       <p>lat: {position.coords.latitude}, lng: {position.coords.longitude}</p>
     )}
   </div>
  );
};

<GeoReporter />
```
