import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.weak-map";
import "core-js/modules/web.dom-collections.iterator";
import { arrayEach } from '../../../helpers/array';
import { isFormulaExpression } from '../utils';
import CellValue from '../cell/value';
import ExpressionModifier from '../expressionModifier';
/**
 * When "column_sorting" is triggered the following operations must be performed:
 *
 * - All formulas which contain cell coordinates must be updated and saved into source data - Column must be changed
 *   (decreased or increased) depends on new target position - previous position.
 * - Mark all formulas which need update with "STATE_OUT_OFF_DATE" flag, so they can be recalculated after the operation.
 */

export var OPERATION_NAME = 'column_sorting';
var visualRows;
/**
 * Collect all previous visual rows from CellValues.
 */

export function prepare() {
  var matrix = this.matrix,
      hot = this.hot;
  visualRows = new WeakMap();
  arrayEach(matrix.data, function (cell) {
    visualRows.set(cell, hot.toVisualRow(cell.row));
  });
}
/**
 * Translate all CellValues depends on previous position.
 */

export function operate() {
  var matrix = this.matrix,
      dataProvider = this.dataProvider,
      hot = this.hot;
  matrix.cellReferences.length = 0;
  arrayEach(matrix.data, function (cell) {
    cell.setState(CellValue.STATE_OUT_OFF_DATE);
    cell.clearPrecedents();
    var row = cell.row,
        column = cell.column;
    var value = dataProvider.getSourceDataAtCell(row, column);

    if (isFormulaExpression(value)) {
      var prevRow = visualRows.get(cell);
      var expModifier = new ExpressionModifier(value);
      expModifier.translate({
        row: hot.toVisualRow(row) - prevRow
      });
      dataProvider.updateSourceData(row, column, expModifier.toString());
    }
  });
  visualRows = null;
}