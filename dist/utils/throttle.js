"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _this = void 0;

var throttle = function throttle(func) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var shouldWait = false;
  return function () {
    if (!shouldWait) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      func.apply(_this, args);
      shouldWait = true;
      setTimeout(function () {
        shouldWait = false;
      }, duration);
    }
  };
};

var _default = throttle;
exports["default"] = _default;
//# sourceMappingURL=throttle.js.map
