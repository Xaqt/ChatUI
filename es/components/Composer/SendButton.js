import React from 'react';
import { Button } from '../Button';
import { useLocale } from '../LocaleProvider';
export var SendButton = function SendButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      buttonColor = _ref.buttonColor;

  var _useLocale = useLocale('Composer'),
      trans = _useLocale.trans;

  return /*#__PURE__*/React.createElement("div", {
    className: "Composer-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "Composer-sendBtn",
    disabled: disabled,
    onMouseDown: onClick,
    backgroundColor: buttonColor,
    color: "white"
  }, trans('send')));
};