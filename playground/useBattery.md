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
import { useBattery } from 'beautiful-react-hooks';

const BatteryReport = () => {
  const [batteryState, { onLevelChange }] = useBattery();

  onLevelChange(() => {
     if(batteryState < 15) {
       console.log('Send notification...');
     }
  });

  return (
    <div style={compStyle}>
      Battery level: {batteryState.level ? batteryState.level*100 : 0}%
    </div>
  );
};

<BatteryReport/> 
```
