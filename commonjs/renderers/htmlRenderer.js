"use strict";

require("core-js/modules/es.array.concat");

exports.__esModule = true;
exports.default = void 0;

var _element = require("./../helpers/dom/element");

var _index = require("./index");

/**
 * @private
 * @renderer HtmlRenderer
 * @param instance
 * @param TD
 * @param row
 * @param col
 * @param prop
 * @param value
 * @param cellProperties
 */
function htmlRenderer(instance, TD, row, col, prop, value) {
  for (var _len = arguments.length, args = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
    args[_key - 6] = arguments[_key];
  }

  (0, _index.getRenderer)('base').apply(this, [instance, TD, row, col, prop, value].concat(args));
  (0, _element.fastInnerHTML)(TD, value === null || value === void 0 ? '' : value);
}

var _default = htmlRenderer;
exports.default = _default;