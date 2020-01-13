"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var createHandlerSetter = function createHandlerSetter(handlerValue) {
  var handlerRef = (0, _react.useRef)(handlerValue);
  handlerRef.current = handlerValue;
  var setHandler = (0, _react.useCallback)(function (nextCallback) {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
    }

    handlerRef.current = nextCallback;
  });
  return [handlerRef, setHandler];
};

var _default = createHandlerSetter;
exports["default"] = _default;
//# sourceMappingURL=createHandlerSetter.js.map
