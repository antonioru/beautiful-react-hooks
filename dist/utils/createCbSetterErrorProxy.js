"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var createCbSetterErrorProxy = function createCbSetterErrorProxy(errorMessage) {
  return new Proxy(Object.create(null), {
    get: function get(target, property) {
      if (property && typeof property === 'string' && property.slice(0, 2) === 'on') {
        return function () {
          throw new Error(errorMessage);
        };
      }

      return {
        error: errorMessage
      };
    }
  });
};

var _default = createCbSetterErrorProxy;
exports["default"] = _default;
//# sourceMappingURL=createCbSetterErrorProxy.js.map
