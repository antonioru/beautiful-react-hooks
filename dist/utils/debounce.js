"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _this = void 0;

var debounce = function debounce(func) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var effect = function effect() {
      timeout = undefined;
      return func.apply(_this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
};

var _default = debounce;
exports["default"] = _default;
//# sourceMappingURL=debounce.js.map
