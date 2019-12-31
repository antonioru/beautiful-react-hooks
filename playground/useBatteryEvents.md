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
import { useCallback, useState } from 'react';
import { useBatteryEvents, useLifecycle } from 'beautiful-react-hooks'; 

const BatteryReport = () => {
  const [ state, setState ] = useState({});
  const { onMount } = useLifecycle();
  const { onChargingChange, onChangingTimeChange, onDischargingTimeChange, onLevelChange } = useBatteryEvents();
  
  const handleBatteryChange = useCallback(async () => {
    if(window.navigator.getBattery) {
      const battery = await window.navigator.getBattery();
      
      setState(battery);
    }  
  }, [state]);
  
  onChargingChange(handleBatteryChange);
  onChangingTimeChange(handleBatteryChange);
  onDischargingTimeChange(handleBatteryChange);
  onLevelChange(handleBatteryChange);
  onMount(handleBatteryChange);
  
  return (
    <div style={compStyle}>
      Battery level: {state.level ? state.level*100 : 0}%
    </div>
  );
}

<BatteryReport />
```
