"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useBatteryState = _interopRequireDefault(require("./useBatteryState"));

var _useBatteryEvents = _interopRequireDefault(require("./useBatteryEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBattery = function useBattery() {
  var state = (0, _useBatteryState["default"])();
  var events = (0, _useBatteryEvents["default"])();
  return [state, events];
};

var _default = useBattery;
exports["default"] = _default;
//# sourceMappingURL=useBattery.js.map
