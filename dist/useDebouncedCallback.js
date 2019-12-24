"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _debounce = _interopRequireDefault(require("./utils/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useDebouncedCallback = function useDebouncedCallback(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var dependencies = arguments.length > 2 ? arguments[2] : undefined;
  return (0, _react.useCallback)((0, _debounce["default"])(fn, wait), dependencies);
};

var _default = useDebouncedCallback;
exports["default"] = _default;
//# sourceMappingURL=useDebouncedCallback.js.map
