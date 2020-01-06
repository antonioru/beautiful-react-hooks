"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useCallbackRef15 = _interopRequireDefault(require("./useCallbackRef"));

var _createCbSetterErrorProxy = _interopRequireDefault(require("./utils/createCbSetterErrorProxy"));

var _hasOwnProperty = _interopRequireDefault(require("./utils/hasOwnProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assignMouseEventOnMount = function assignMouseEventOnMount(targetRef, handlerRef, eventName) {
  (0, _react.useEffect)(function () {
    var cb = function cb() {
      if (handlerRef.current) {
        handlerRef.current.apply(handlerRef, arguments);
      }
    };

    var target;

    if (targetRef !== null && !!targetRef.current) {
      target = targetRef.current;
    }

    if (targetRef === null) {
      target = document;
    }

    if (target && target.addEventListener) {
      target.addEventListener(eventName, cb);
    }

    return function () {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

var useMouseEvents = function useMouseEvents() {
  var targetRef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useCallbackRef = (0, _useCallbackRef15["default"])(),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      onMouseDownHandler = _useCallbackRef2[0],
      setOnMouseDown = _useCallbackRef2[1];

  var _useCallbackRef3 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef4 = _slicedToArray(_useCallbackRef3, 2),
      onMouseEnterHandler = _useCallbackRef4[0],
      setOnMouseEnter = _useCallbackRef4[1];

  var _useCallbackRef5 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef6 = _slicedToArray(_useCallbackRef5, 2),
      onMouseLeaveHandler = _useCallbackRef6[0],
      setOnMouseLeave = _useCallbackRef6[1];

  var _useCallbackRef7 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef8 = _slicedToArray(_useCallbackRef7, 2),
      onMouseMoveHandler = _useCallbackRef8[0],
      setOnMouseMove = _useCallbackRef8[1];

  var _useCallbackRef9 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef10 = _slicedToArray(_useCallbackRef9, 2),
      onMouseOutHandler = _useCallbackRef10[0],
      setOnMouseOut = _useCallbackRef10[1];

  var _useCallbackRef11 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef12 = _slicedToArray(_useCallbackRef11, 2),
      onMouseOverHandler = _useCallbackRef12[0],
      setOnMouseOver = _useCallbackRef12[1];

  var _useCallbackRef13 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef14 = _slicedToArray(_useCallbackRef13, 2),
      onMouseUpHandler = _useCallbackRef14[0],
      setOnMouseUp = _useCallbackRef14[1];

  if (targetRef !== null && !(0, _hasOwnProperty["default"])(targetRef, 'current')) {
    return (0, _createCbSetterErrorProxy["default"])('Unable to assign any mouse event to the given ref');
  }

  assignMouseEventOnMount(targetRef, onMouseDownHandler, 'mousedown');
  assignMouseEventOnMount(targetRef, onMouseEnterHandler, 'mouseenter');
  assignMouseEventOnMount(targetRef, onMouseLeaveHandler, 'mouseleave');
  assignMouseEventOnMount(targetRef, onMouseMoveHandler, 'mousemove');
  assignMouseEventOnMount(targetRef, onMouseOutHandler, 'mouseout');
  assignMouseEventOnMount(targetRef, onMouseOverHandler, 'mouseover');
  assignMouseEventOnMount(targetRef, onMouseUpHandler, 'mouseup');
  return Object.freeze({
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp
  });
};

var _default = useMouseEvents;
exports["default"] = _default;
//# sourceMappingURL=useMouseEvents.js.map
