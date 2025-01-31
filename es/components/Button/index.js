import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "label", "backgroundColor", "color", "variant", "size", "icon", "loading", "block", "disabled", "children", "onClick"];
import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

function composeClass(type) {
  return type && "Btn--".concat(type);
}

export var Button = function Button(props) {
  var className = props.className,
      label = props.label,
      backgroundColor = props.backgroundColor,
      color = props.color,
      variant = props.variant,
      oSize = props.size,
      oIcon = props.icon,
      loading = props.loading,
      block = props.block,
      disabled = props.disabled,
      children = props.children,
      onClick = props.onClick,
      other = _objectWithoutProperties(props, _excluded);

  var icon = oIcon || loading && 'spinner';
  var size = oSize || (block ? 'lg' : '');

  function handleClick(e) {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    className: clsx('Btn', composeClass(color), composeClass(variant), composeClass(size), {
      'Btn--block': block
    }, className),
    type: "button",
    disabled: disabled,
    onClick: handleClick
  }, other, {
    style: {
      backgroundColor: backgroundColor,
      color: color
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "Btn-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    type: icon,
    spin: loading
  })), label || children);
};