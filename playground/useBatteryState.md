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
import { useBatteryState } from 'beautiful-react-hooks'; 

const BatteryReporter = () => {
  const { charging, chargingTime, level, dischargingTime } = useBatteryState(); 
    
  return (
   <div style={compStyle}>
      Battery state:
      <p>Is charging: {charging ? 'yes' : 'no'}</p>
      <p>Battery level: {level * 100}%</p>
      <p>Charging time: {chargingTime}</p>
      <p>Discharging time: {dischargingTime}</p>
   </div>
  );
};

<BatteryReporter />
```
