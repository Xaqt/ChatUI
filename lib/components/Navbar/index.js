"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _IconButton = require("../IconButton");

var Navbar = function Navbar(props) {
  var className = props.className,
      title = props.title,
      subtitle = props.subtitle,
      logo = props.logo,
      leftContent = props.leftContent,
      bgColor = props.bgColor,
      textColor = props.textColor,
      placeholderBgColor = props.placeholderBgColor,
      placeholderTextColor = props.placeholderTextColor,
      placeholder = props.placeholder,
      _props$rightContent = props.rightContent,
      rightContent = _props$rightContent === void 0 ? [] : _props$rightContent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: (0, _clsx.default)('Navbar', className),
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Navbar-left"
  }, leftContent && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, (0, _extends2.default)({
    size: "lg"
  }, leftContent))), /*#__PURE__*/_react.default.createElement("div", {
    className: "Navbar-main"
  }, logo && /*#__PURE__*/_react.default.createElement("img", {
    className: "Navbar-logo",
    src: logo,
    alt: title
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "Navbar-title",
    style: {
      color: textColor,
      fontWeight: 'bold'
    }
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "Navbar-subtitle",
    style: {
      color: textColor
    }
  }, subtitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "Navbar-right"
  }, rightContent.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, (0, _extends2.default)({
      size: "lg"
    }, item, {
      key: item.icon
    }));
  }))), placeholder && /*#__PURE__*/_react.default.createElement("div", {
    className: "Navbar-placeholder",
    style: {
      backgroundColor: placeholderBgColor
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: placeholderTextColor
    }
  }, placeholder)));
};

exports.Navbar = Navbar;