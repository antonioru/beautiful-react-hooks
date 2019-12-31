"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useGeolocationState = _interopRequireDefault(require("./useGeolocationState"));

var _useGeolocationEvents = _interopRequireDefault(require("./useGeolocationEvents"));

var _geolocationStandardOptions = _interopRequireDefault(require("./utils/geolocationStandardOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGeolocation = function useGeolocation() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _geolocationStandardOptions["default"];
  var state = (0, _useGeolocationState["default"])(options);
  var events = (0, _useGeolocationEvents["default"])(options);
  return [state, events];
};

var _default = useGeolocation;
exports["default"] = _default;
//# sourceMappingURL=useGeolocation.js.map
