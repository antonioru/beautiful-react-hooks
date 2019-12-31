import { useState, useCallback } from 'react';
import useBatteryEvents from './useBatteryEvents';
import useLifecycle from './useLifecycle';
import getNavigator from './utils/getNavigator';

/**
 * Returns the current state of the the battery, when supported.<br/>
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const BatteryReporter = () => {
 *   const { charging, chargingTime, level, dischargingTime } = useBatteryState();
 *
 *   return (
 *     <div style={compStyle}>
 *        Battery state:
 *        <p>Is charging: {charging ? 'yes' : 'no'}</p>
 *        <p>Battery level: {level * 100}%</p>
 *        <p>Charging time: {chargingTime}</p>
 *        <p>Discharging time: {dischargingTime}</p>
 *     </div>
 *    );
 * };
 * ```
 */
const useBatteryState = () => {
  const [state, setState] = useState({});
  const { onMount } = useLifecycle();
  const { onChargingChange, onChangingTimeChange, onDischargingTimeChange, onLevelChange } = useBatteryEvents();

  // retrieve the battery state to save it into a local state
  const handleBatteryChange = useCallback(() => {
    const nav = getNavigator();

    if (nav && nav.getBattery && typeof nav.getBattery === 'function') {
      nav.getBattery().then((batteryManager) => {
        const nextState = {
          charging: batteryManager.charging,
          chargingTime: batteryManager.chargingTime,
          dischargingTime: batteryManager.dischargingTime,
          level: batteryManager.level,
        };

        if (nextState.charging !== state.charging || nextState.chargingTime !== state.chargingTime
          || nextState.dischargingTime !== state.dischargingTime || nextState.level !== state.level) {
          setState(nextState);
        }
      });
    }
  }, [state]);

  // when battery changes save the state again
  onChangingTimeChange(handleBatteryChange);
  onChargingChange(handleBatteryChange);
  onDischargingTimeChange(handleBatteryChange);
  onLevelChange(handleBatteryChange);
  // when component mount, get the battery state and save it to a local state
  onMount(handleBatteryChange);

  return state;
};

export default useBatteryState;
