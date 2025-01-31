"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dompurify = _interopRequireDefault(require("dompurify"));

_dompurify.default.addHook('beforeSanitizeAttributes', function (node) {
  if (node instanceof HTMLElement && node.hasAttribute('href')) {
    var href = node.getAttribute('href');

    if (href) {
      node.dataset.cuiHref = href;
    }

    if (node.getAttribute('target') === '_blank') {
      node.dataset.cuiTarget = '1';
    }
  }
});

_dompurify.default.addHook('afterSanitizeAttributes', function (node) {
  if (node instanceof HTMLElement) {
    if (node.dataset.cuiHref && node.hasAttribute('href')) {
      node.removeAttribute('data-cui-href');
    }

    if (node.dataset.cuiTarget) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
      node.removeAttribute('data-cui-target');
    }
  }
});