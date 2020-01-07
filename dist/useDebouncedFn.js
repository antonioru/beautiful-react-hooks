"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultOptions = {
  leading: false,
  trailing: true
};

var useDebouncedFn = function useDebouncedFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;
  var dependencies = arguments.length > 3 ? arguments[3] : undefined;
  var debounced = (0, _lodash["default"])(fn, wait, options);
  return (0, _react.useCallback)(debounced, dependencies);
};

var _default = useDebouncedFn;
exports["default"] = _default;
//# sourceMappingURL=useDebouncedFn.js.map
