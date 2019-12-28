"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useGlobalEvent = _interopRequireDefault(require("./useGlobalEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWindowScroll = function useWindowScroll() {
  return (0, _useGlobalEvent["default"])('scroll');
};

var _default = useWindowScroll;
exports["default"] = _default;
//# sourceMappingURL=useWindowScroll.js.map
