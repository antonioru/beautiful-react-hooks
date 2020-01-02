"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useDidMount = _interopRequireDefault(require("./useDidMount"));

var _useWillUnmount = _interopRequireDefault(require("./useWillUnmount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLifecycle = function useLifecycle() {
  var onDidMount = (0, _useDidMount["default"])();
  var onWillUnmount = (0, _useWillUnmount["default"])();
  return {
    onDidMount: onDidMount,
    onWillUnmount: onWillUnmount
  };
};

var _default = useLifecycle;
exports["default"] = _default;
//# sourceMappingURL=useLifecycle.js.map
