import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
export var Navbar = function Navbar(props) {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: clsx('Navbar', className),
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "Navbar-left"
  }, leftContent && /*#__PURE__*/React.createElement(IconButton, _extends({
    size: "lg"
  }, leftContent))), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-main"
  }, logo && /*#__PURE__*/React.createElement("img", {
    className: "Navbar-logo",
    src: logo,
    alt: title
  }), /*#__PURE__*/React.createElement("h2", {
    className: "Navbar-title",
    style: {
      color: textColor,
      fontWeight: 'bold'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "Navbar-subtitle",
    style: {
      color: textColor
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-right"
  }, rightContent.map(function (item) {
    return /*#__PURE__*/React.createElement(IconButton, _extends({
      size: "lg"
    }, item, {
      key: item.icon
    }));
  }))), placeholder && /*#__PURE__*/React.createElement("div", {
    className: "Navbar-placeholder",
    style: {
      backgroundColor: placeholderBgColor
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: placeholderTextColor
    }
  }, placeholder)));
};