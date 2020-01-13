"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _hasOwnProperty = _interopRequireDefault(require("./utils/hasOwnProperty"));

var _createCbSetterErrorProxy = _interopRequireDefault(require("./utils/createCbSetterErrorProxy"));

var _createHandlerSetter17 = _interopRequireDefault(require("./utils/createHandlerSetter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assignDragEventOnMount = function assignDragEventOnMount(targetRef, handlerRef, eventName) {
  (0, _react.useEffect)(function () {
    var cb = function cb(dragEvent) {
      if (handlerRef.current) {
        handlerRef.current(dragEvent);
      }
    };

    if (targetRef.current) {
      targetRef.current.addEventListener(eventName, cb);
    }

    return function () {
      if (targetRef.current) {
        targetRef.current.removeEventListener(eventName, cb);
      }
    };
  }, []);
};

var useDragEvents = function useDragEvents(targetRef) {
  var setDraggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _createHandlerSetter = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter2 = _slicedToArray(_createHandlerSetter, 2),
      onDrag = _createHandlerSetter2[0],
      setOnDrag = _createHandlerSetter2[1];

  var _createHandlerSetter3 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter4 = _slicedToArray(_createHandlerSetter3, 2),
      onDrop = _createHandlerSetter4[0],
      setOnDrop = _createHandlerSetter4[1];

  var _createHandlerSetter5 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter6 = _slicedToArray(_createHandlerSetter5, 2),
      onDragEnter = _createHandlerSetter6[0],
      setOnDragEnter = _createHandlerSetter6[1];

  var _createHandlerSetter7 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter8 = _slicedToArray(_createHandlerSetter7, 2),
      onDragEnd = _createHandlerSetter8[0],
      setOnDragEnd = _createHandlerSetter8[1];

  var _createHandlerSetter9 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter10 = _slicedToArray(_createHandlerSetter9, 2),
      onDragExit = _createHandlerSetter10[0],
      setOnDragExit = _createHandlerSetter10[1];

  var _createHandlerSetter11 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter12 = _slicedToArray(_createHandlerSetter11, 2),
      onDragLeave = _createHandlerSetter12[0],
      setOnDragLeave = _createHandlerSetter12[1];

  var _createHandlerSetter13 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter14 = _slicedToArray(_createHandlerSetter13, 2),
      onDragOver = _createHandlerSetter14[0],
      setOnDragOver = _createHandlerSetter14[1];

  var _createHandlerSetter15 = (0, _createHandlerSetter17["default"])(),
      _createHandlerSetter16 = _slicedToArray(_createHandlerSetter15, 2),
      onDragStart = _createHandlerSetter16[0],
      setOnDragStart = _createHandlerSetter16[1];

  if (targetRef !== null && !(0, _hasOwnProperty["default"])(targetRef, 'current')) {
    return (0, _createCbSetterErrorProxy["default"])('Unable to assign any drag event to the given ref');
  }

  (0, _react.useEffect)(function () {
    if (setDraggable && targetRef.current && !targetRef.current.hasAttribute('draggable')) {
      targetRef.current.setAttribute('draggable', true);
    }
  }, []);
  assignDragEventOnMount(targetRef, onDrag, 'drag');
  assignDragEventOnMount(targetRef, onDrop, 'drop');
  assignDragEventOnMount(targetRef, onDragEnter, 'dragenter');
  assignDragEventOnMount(targetRef, onDragEnd, 'dragend');
  assignDragEventOnMount(targetRef, onDragExit, 'dragexit');
  assignDragEventOnMount(targetRef, onDragLeave, 'dragleave');
  assignDragEventOnMount(targetRef, onDragOver, 'dragover');
  assignDragEventOnMount(targetRef, onDragStart, 'dragstart');
  return Object.freeze({
    onDrag: setOnDrag,
    onDrop: setOnDrop,
    onDragEnter: setOnDragEnter,
    onDragEnd: setOnDragEnd,
    onDragExit: setOnDragExit,
    onDragLeave: setOnDragLeave,
    onDragOver: setOnDragOver,
    onDragStart: setOnDragStart
  });
};

var _default = useDragEvents;
exports["default"] = _default;
//# sourceMappingURL=useDragEvents.js.map
