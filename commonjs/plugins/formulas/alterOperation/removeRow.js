"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

exports.__esModule = true;
exports.operate = operate;
exports.OPERATION_NAME = void 0;

var _array = require("../../../helpers/array");

var _utils = require("../utils");

var _value = _interopRequireDefault(require("../cell/value"));

var _expressionModifier = _interopRequireDefault(require("../expressionModifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * When "remove_row" is triggered the following operations must be performed:
 *
 * - All formulas which contain cell coordinates must be updated and saved into source data - Row must be decreased
 *   by "amount" of times (eq: D4 to D3, $F$5 to $F$4);
 * - Mark all formulas which need update with "STATE_OUT_OFF_DATE" flag, so they can be recalculated after the operation.
 */
var OPERATION_NAME = 'remove_row';
/**
 * Execute changes.
 *
 * @param {Number} start Index row from which the operation starts.
 * @param {Number} amount Count of rows to be removed.
 * @param {Boolean} [modifyFormula=true] If `true` all formula expressions will be modified according to the changes.
 *                                       `false` value is used by UndoRedo plugin which saves snapshoots before alter
 *                                       operation so it doesn't modify formulas if undo action is triggered.
 */

exports.OPERATION_NAME = OPERATION_NAME;

function operate(start, amount) {
  var modifyFormula = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var rowsAmount = -amount;
  var matrix = this.matrix,
      dataProvider = this.dataProvider,
      sheet = this.sheet;
  var translate = [rowsAmount, 0];
  var indexOffset = Math.abs(rowsAmount) - 1;
  var removedCellRef = matrix.removeCellRefsAtRange({
    row: start
  }, {
    row: start + indexOffset
  });
  var toRemove = [];
  (0, _array.arrayEach)(matrix.data, function (cell) {
    (0, _array.arrayEach)(removedCellRef, function (cellRef) {
      if (!cell.hasPrecedent(cellRef)) {
        return;
      }

      cell.removePrecedent(cellRef);
      cell.setState(_value.default.STATE_OUT_OFF_DATE);
      (0, _array.arrayEach)(sheet.getCellDependencies(cell.row, cell.column), function (cellValue) {
        cellValue.setState(_value.default.STATE_OUT_OFF_DATE);
      });
    });

    if (cell.row >= start && cell.row <= start + indexOffset) {
      toRemove.push(cell);
    }
  });
  matrix.remove(toRemove);
  (0, _array.arrayEach)(matrix.cellReferences, function (cell) {
    if (cell.row >= start) {
      cell.translateTo.apply(cell, translate);
    }
  });
  (0, _array.arrayEach)(matrix.data, function (cell) {
    var origRow = cell.row,
        origColumn = cell.column;

    if (cell.row >= start) {
      cell.translateTo.apply(cell, translate);
      cell.setState(_value.default.STATE_OUT_OFF_DATE);
    }

    if (modifyFormula) {
      var row = cell.row,
          column = cell.column;
      var value = dataProvider.getSourceDataAtCell(row, column);

      if ((0, _utils.isFormulaExpression)(value)) {
        var startCoord = (0, _utils.cellCoordFactory)('row', start);
        var expModifier = new _expressionModifier.default(value);
        expModifier.useCustomModifier(customTranslateModifier);
        expModifier.translate({
          row: rowsAmount
        }, startCoord({
          row: origRow,
          column: origColumn
        }));
        dataProvider.updateSourceData(row, column, expModifier.toString());
      }
    }
  });
}

function customTranslateModifier(cell, axis, delta, startFromIndex) {
  var start = cell.start,
      end = cell.end,
      type = cell.type;
  var startIndex = start[axis].index;
  var endIndex = end[axis].index;
  var indexOffset = Math.abs(delta) - 1;
  var deltaStart = delta;
  var deltaEnd = delta;
  var refError = false; // Mark all cells as #REF! which refer to removed cells between startFromIndex and startFromIndex + delta

  if (startIndex >= startFromIndex && endIndex <= startFromIndex + indexOffset) {
    refError = true;
  } // Decrement all cells below startFromIndex


  if (!refError && type === 'cell') {
    if (startFromIndex >= startIndex) {
      deltaStart = 0;
      deltaEnd = 0;
    }
  }

  if (!refError && type === 'range') {
    if (startFromIndex >= startIndex) {
      deltaStart = 0;
    }

    if (startFromIndex > endIndex) {
      deltaEnd = 0;
    } else if (endIndex <= startFromIndex + indexOffset) {
      deltaEnd -= Math.min(endIndex - (startFromIndex + indexOffset), 0);
    }
  }

  if (startIndex + deltaStart < 0) {
    deltaStart -= startIndex + deltaStart;
  }

  return [deltaStart, deltaEnd, refError];
}