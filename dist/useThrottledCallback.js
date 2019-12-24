"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _throttle = _interopRequireDefault(require("./utils/throttle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useThrottledCallback = function useThrottledCallback(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var dependencies = arguments.length > 2 ? arguments[2] : undefined;
  return (0, _react.useCallback)((0, _throttle["default"])(fn, wait), dependencies);
};

var _default = useThrottledCallback;
exports["default"] = _default;
//# sourceMappingURL=useThrottledCallback.js.map
