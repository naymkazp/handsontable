"use strict";

exports.__esModule = true;
exports.textRenderer = textRenderer;
exports.RENDERER_TYPE = void 0;

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

var _baseRenderer = require("../baseRenderer");

var _element = require("../../helpers/dom/element");

var _mixed = require("../../helpers/mixed");

var RENDERER_TYPE = 'text';
/**
 * Default text renderer.
 *
 * @private
 * @param {Core} instance The Handsontable instance.
 * @param {HTMLTableCellElement} TD The rendered cell element.
 * @param {number} row The visual row index.
 * @param {number} col The visual column index.
 * @param {number|string} prop The column property (passed when datasource is an array of objects).
 * @param {*} value The rendered value.
 * @param {object} cellProperties The cell meta object ({@see Core#getCellMeta}).
 */

exports.RENDERER_TYPE = RENDERER_TYPE;

function textRenderer(instance, TD, row, col, prop, value, cellProperties) {
  _baseRenderer.baseRenderer.apply(this, [instance, TD, row, col, prop, value, cellProperties]);

  var escaped = value;

  if (!escaped && cellProperties.placeholder) {
    escaped = cellProperties.placeholder;
  }

  escaped = (0, _mixed.stringify)(escaped);

  if (!instance.getSettings().trimWhitespace && !instance.getSettings().wordWrap) {
    // 160 is &nbsp; which won't wrap and preserves sequences of whitespace
    escaped = escaped.replace(/ /g, String.fromCharCode(160));
  }

  if (cellProperties.rendererTemplate) {
    (0, _element.empty)(TD);
    var TEMPLATE = instance.rootDocument.createElement('TEMPLATE');
    TEMPLATE.setAttribute('bind', '{{}}');
    TEMPLATE.innerHTML = cellProperties.rendererTemplate;
    HTMLTemplateElement.decorate(TEMPLATE);
    TEMPLATE.model = instance.getSourceDataAtRow(row);
    TD.appendChild(TEMPLATE);
  } else {
    // this is faster than innerHTML. See: https://github.com/handsontable/handsontable/wiki/JavaScript-&-DOM-performance-tips
    (0, _element.fastInnerText)(TD, escaped);
  }
}

textRenderer.RENDERER_TYPE = RENDERER_TYPE;