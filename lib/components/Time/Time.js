"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = void 0;

var _react = _interopRequireDefault(require("react"));

var Time = function Time(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/_react.default.createElement("time", {
    className: "Time",
    dateTime: new Date(date).toJSON()
  }, new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  }));
};

exports.Time = Time;