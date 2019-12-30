"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useBatteryEvents2 = _interopRequireDefault(require("./useBatteryEvents"));

var _useLifecycle2 = _interopRequireDefault(require("./useLifecycle"));

var _getNavigator = _interopRequireDefault(require("./utils/getNavigator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useBatteryState = function useBatteryState() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useLifecycle = (0, _useLifecycle2["default"])(),
      onMount = _useLifecycle.onMount;

  var _useBatteryEvents = (0, _useBatteryEvents2["default"])(),
      onChargingChange = _useBatteryEvents.onChargingChange,
      onChangingTimeChange = _useBatteryEvents.onChangingTimeChange,
      onDischargingTimeChange = _useBatteryEvents.onDischargingTimeChange,
      onLevelChange = _useBatteryEvents.onLevelChange;

  var handleBatteryChange = (0, _react.useCallback)(function () {
    var nav = (0, _getNavigator["default"])();

    if (nav && nav.getBattery && typeof nav.getBattery === 'function') {
      nav.getBattery().then(function (batteryManager) {
        var nextState = {
          charging: batteryManager.charging,
          chargingTime: batteryManager.chargingTime,
          dischargingTime: batteryManager.dischargingTime,
          level: batteryManager.level
        };

        if (nextState.charging !== state.charging || nextState.chargingTime !== state.chargingTime || nextState.dischargingTime !== state.dischargingTime || nextState.level !== state.level) {
          setState(nextState);
        }
      });
    }
  }, [state]);
  onChangingTimeChange(handleBatteryChange);
  onChargingChange(handleBatteryChange);
  onDischargingTimeChange(handleBatteryChange);
  onLevelChange(handleBatteryChange);
  onMount(handleBatteryChange);
  return state;
};

var _default = useBatteryState;
exports["default"] = _default;
//# sourceMappingURL=useBatteryState.js.map
