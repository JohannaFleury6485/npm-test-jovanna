"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./badge.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Badge() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "validation"
  }, "Congrats, your answers have been validated! "));
}
var _default = exports.default = Badge;