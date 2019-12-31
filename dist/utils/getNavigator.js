"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getNavigator = function getNavigator() {
  return 'navigator' in window && _typeof(window.navigator) === 'object' ? navigator : null;
};

var _default = getNavigator;
exports["default"] = _default;
//# sourceMappingURL=getNavigator.js.map
