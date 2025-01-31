import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["inputRef", "invisible", "onImageSend", "isDisabled"];
import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import { SendConfirm } from '../SendConfirm';
import riseInput from './riseInput';
import parseDataTransfer from '../../utils/parseDataTransfer';
import canUse from '../../utils/canUse';
var canTouch = canUse('touch');
export var ComposerInput = function ComposerInput(_ref) {
  var inputRef = _ref.inputRef,
      invisible = _ref.invisible,
      onImageSend = _ref.onImageSend,
      isDisabled = _ref.isDisabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      pastedImage = _useState2[0],
      setPastedImage = _useState2[1];

  var wrapRef = useRef(null);
  var handlePaste = useCallback(function (e) {
    parseDataTransfer(e, setPastedImage);
  }, []);
  var handleImageCancel = useCallback(function () {
    setPastedImage(null);
  }, []);
  var handleImageSend = useCallback(function () {
    if (onImageSend && pastedImage) {
      Promise.resolve(onImageSend(pastedImage)).then(function () {
        setPastedImage(null);
      });
    }
  }, [onImageSend, pastedImage]);
  useEffect(function () {
    if (canTouch && inputRef.current && wrapRef.current) {
      riseInput(inputRef.current, wrapRef.current);
    }
  }, [inputRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: clsx({
      'S--invisible': invisible
    }),
    ref: wrapRef
  }, !isDisabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, _extends({
    className: "Composer-input",
    rows: 1,
    autoSize: true,
    enterKeyHint: "send",
    onPaste: onImageSend ? handlePaste : undefined,
    ref: inputRef
  }, rest)), pastedImage && /*#__PURE__*/React.createElement(SendConfirm, {
    file: pastedImage,
    onCancel: handleImageCancel,
    onSend: handleImageSend
  })));
};