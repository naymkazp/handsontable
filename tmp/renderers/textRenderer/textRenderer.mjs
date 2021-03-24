import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.regexp.exec.js";
import { baseRenderer } from "../baseRenderer/index.mjs";
import { empty, fastInnerText } from "../../helpers/dom/element.mjs";
import { stringify } from "../../helpers/mixed.mjs";
export var RENDERER_TYPE = 'text';
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

export function textRenderer(instance, TD, row, col, prop, value, cellProperties) {
  baseRenderer.apply(this, [instance, TD, row, col, prop, value, cellProperties]);
  var escaped = value;

  if (!escaped && cellProperties.placeholder) {
    escaped = cellProperties.placeholder;
  }

  escaped = stringify(escaped);

  if (!instance.getSettings().trimWhitespace && !instance.getSettings().wordWrap) {
    // 160 is &nbsp; which won't wrap and preserves sequences of whitespace
    escaped = escaped.replace(/ /g, String.fromCharCode(160));
  }

  if (cellProperties.rendererTemplate) {
    empty(TD);
    var TEMPLATE = instance.rootDocument.createElement('TEMPLATE');
    TEMPLATE.setAttribute('bind', '{{}}');
    TEMPLATE.innerHTML = cellProperties.rendererTemplate;
    HTMLTemplateElement.decorate(TEMPLATE);
    TEMPLATE.model = instance.getSourceDataAtRow(row);
    TD.appendChild(TEMPLATE);
  } else {
    // this is faster than innerHTML. See: https://github.com/handsontable/handsontable/wiki/JavaScript-&-DOM-performance-tips
    fastInnerText(TD, escaped);
  }
}
textRenderer.RENDERER_TYPE = RENDERER_TYPE;