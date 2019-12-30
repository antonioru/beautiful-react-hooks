<a name="useBatteryState"></a>

## useBatteryState()
Returns the current state of the the battery, when supported.<br/>

### Usage:

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

**Kind**: global function  
