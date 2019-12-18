"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useOnMount = _interopRequireDefault(require("./useOnMount"));

var _useWillUnmount = _interopRequireDefault(require("./useWillUnmount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLifecycle = function useLifecycle() {
  var onMount = (0, _useOnMount["default"])();
  var onUnmount = (0, _useWillUnmount["default"])();
  return {
    onMount: onMount,
    onUnmount: onUnmount
  };
};

var _default = useLifecycle;
exports["default"] = _default;
//# sourceMappingURL=useLifecycle.js.map
