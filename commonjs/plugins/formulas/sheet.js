"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

exports.__esModule = true;
exports.default = void 0;

require("regenerator-runtime/runtime");

var _hotFormulaParser = require("hot-formula-parser");

var _number = require("hot-formula-parser/es/helper/number");

var _array = require("../../helpers/array");

var _localHooks = _interopRequireDefault(require("../../mixins/localHooks"));

var _object = require("../../helpers/object");

var _value = _interopRequireDefault(require("./cell/value"));

var _reference = _interopRequireDefault(require("./cell/reference"));

var _utils = require("./utils");

var _matrix = _interopRequireDefault(require("./matrix"));

var _alterManager = _interopRequireDefault(require("./alterManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var STATE_UP_TO_DATE = 1;
var STATE_NEED_REBUILD = 2;
var STATE_NEED_FULL_REBUILD = 3;
/**
 * Sheet component responsible for whole spreadsheet calculations.
 *
 * @class Sheet
 * @util
 */

var Sheet =
/*#__PURE__*/
function () {
  function Sheet(hot, dataProvider) {
    var _this = this;

    _classCallCheck(this, Sheet);

    /**
     * Handsontable instance.
     *
     * @type {Core}
     */
    this.hot = hot;
    /**
     * Data provider for sheet calculations.
     *
     * @type {DataProvider}
     */

    this.dataProvider = dataProvider;
    /**
     * Instance of {@link https://github.com/handsontable/formula-parser}.
     *
     * @type {Parser}
     */

    this.parser = new _hotFormulaParser.Parser();
    /**
     * Instance of {@link Matrix}.
     *
     * @type {Matrix}
     */

    this.matrix = new _matrix.default(this.hot);
    /**
     * Instance of {@link AlterManager}.
     *
     * @type {AlterManager}
     */

    this.alterManager = new _alterManager.default(this);
    /**
     * Cell object which indicates which cell is currently processing.
     *
     * @private
     * @type {null}
     */

    this._processingCell = null;
    /**
     *
     * @private
     * @type boolean
     */

    this.useCustomGetCellDependencies = this.hot && this.hot.getSettings().useCustomGetCellDependencies || false;
    /**
     *
     * @private
     * @type {null}
     */

    this._parsedCells = {};
    /**
     * State of the sheet.
     *
     * @type {Number}
     * @private
     */

    this._state = STATE_NEED_FULL_REBUILD;
    this.parser.on("callCellValue", function () {
      return _this._onCallCellValue.apply(_this, arguments);
    });
    this.parser.on("callRangeValue", function () {
      return _this._onCallRangeValue.apply(_this, arguments);
    });
    this.alterManager.addLocalHook("afterAlter", function () {
      return _this._onAfterAlter.apply(_this, arguments);
    });
  }
  /**
   * Recalculate sheet.
   */


  _createClass(Sheet, [{
    key: "recalculate",
    value: function recalculate() {
      switch (this._state) {
        case STATE_NEED_FULL_REBUILD:
          this.recalculateFull();
          break;

        case STATE_NEED_REBUILD:
          this.recalculateOptimized();
          break;

        default:
          break;
      }
    }
    /**
     * AsyncPromises.
     */

  }, {
    key: "allPromiseAsync",
    value: function allPromiseAsync() {
      for (var _len = arguments.length, PromisesList = new Array(_len), _key = 0; _key < _len; _key++) {
        PromisesList[_key] = arguments[_key];
      }

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(resolve) {
          var output, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, promise;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  output = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context2.prev = 4;
                  _iterator = PromisesList[Symbol.iterator]();

                case 6:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context2.next = 23;
                    break;
                  }

                  promise = _step.value;
                  _context2.prev = 8;
                  _context2.t0 = output;
                  _context2.next = 12;
                  return promise.then(
                  /*#__PURE__*/
                  function () {
                    var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(resolvedData) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return resolvedData;

                            case 2:
                              return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }());

                case 12:
                  _context2.t1 = _context2.sent;

                  _context2.t0.push.call(_context2.t0, _context2.t1);

                  _context2.next = 19;
                  break;

                case 16:
                  _context2.prev = 16;
                  _context2.t2 = _context2["catch"](8);
                  return _context2.abrupt("return", output);

                case 19:
                  if (output.length === PromisesList.length) resolve(output);

                case 20:
                  _iteratorNormalCompletion = true;
                  _context2.next = 6;
                  break;

                case 23:
                  _context2.next = 29;
                  break;

                case 25:
                  _context2.prev = 25;
                  _context2.t3 = _context2["catch"](4);
                  _didIteratorError = true;
                  _iteratorError = _context2.t3;

                case 29:
                  _context2.prev = 29;
                  _context2.prev = 30;

                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }

                case 32:
                  _context2.prev = 32;

                  if (!_didIteratorError) {
                    _context2.next = 35;
                    break;
                  }

                  throw _iteratorError;

                case 35:
                  return _context2.finish(32);

                case 36:
                  return _context2.finish(29);

                case 37:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[4, 25, 29, 37], [8, 16], [30,, 32, 36]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * sortCellsByUsed.
     */

  }, {
    key: "sortCellsByUsed",
    value: function sortCellsByUsed(cells) {
      var result = [];
      var used = "";
      cells.forEach(function (cell) {
        if (used.indexOf(cell.key) > -1) {
          var index = result.findIndex(function (resultCell) {
            return resultCell.precedentsListString.indexOf(cell.key) > -1;
          });
          result.splice(index, 0, cell);
        } else {
          result.push(cell);
        }

        used += "__" + cell.precedentsListString;
      });
      return result;
    }
    /**
     *
     * @param {Array} promisses
     */

  }, {
    key: "runPromiseAsync",
    value: function () {
      var _runPromiseAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(promisses) {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, pr;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 3;
                _iterator2 = promisses[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 12;
                  break;
                }

                pr = _step2.value;
                _context3.next = 9;
                return pr();

              case 9:
                _iteratorNormalCompletion2 = true;
                _context3.next = 5;
                break;

              case 12:
                _context3.next = 18;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](3);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 18:
                _context3.prev = 18;
                _context3.prev = 19;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 21:
                _context3.prev = 21;

                if (!_didIteratorError2) {
                  _context3.next = 24;
                  break;
                }

                throw _iteratorError2;

              case 24:
                return _context3.finish(21);

              case 25:
                return _context3.finish(18);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      function runPromiseAsync(_x3) {
        return _runPromiseAsync.apply(this, arguments);
      }

      return runPromiseAsync;
    }()
    /**
     * Recalculate sheet using optimized methods (fast recalculation).
     */

  }, {
    key: "recalculateOptimized",
    value: function recalculateOptimized() {
      var _this2 = this;

      var cells = this.matrix.getOutOfDateCells();
      cells = this.sortCellsByUsed(cells);
      var promisses = [];
      this._parsedCells = {};
      this.matrix.data.forEach(function (cell) {
        if (cell.state === 3 && Object.keys(cell.precedentsList).length > 0) {
          _this2._parsedCells[cell.key] = cell.value;
        }
      });
      (0, _array.arrayEach)(cells, function (cellValue, index) {
        var value = _this2.dataProvider.getSourceDataAtCell(cellValue.row, cellValue.column);

        if ((0, _utils.isFormulaExpression)(value)) {
          if (!_this2.useCustomGetCellDependencies) {
            _this2.parseExpression(cellValue, value.substr(1));
          } else {
            promisses.push(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", new Promise(function (resolve) {
                        _this2.parseExpression(cellValue, value.substr(1));

                        if (!(index % 10)) {
                          setTimeout(function () {
                            resolve();
                          }, 0);
                        } else {
                          resolve();
                        }
                      }));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            })));
          }
        }
      });

      if (this.useCustomGetCellDependencies) {
        promisses.push(
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", new Promise(function (resolve) {
                    setTimeout(function () {
                      _this2.hot.render();

                      _this2._state = STATE_UP_TO_DATE;
                      _this2._parsedCells = {};

                      _this2.runLocalHooks("afterRecalculate", cells, "optimized");

                      resolve();
                    }, 10);
                  }));

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        })));
        this.runPromiseAsync(promisses);
      } else {
        this._state = STATE_UP_TO_DATE;
        this._parsedCells = {};
        this.runLocalHooks("afterRecalculate", cells, "optimized");
      }
    }
    /**
     * Recalculate whole table by building dependencies from scratch (slow recalculation).
     */

  }, {
    key: "recalculateFull",
    value: function recalculateFull() {
      var _this3 = this;

      var cells = this.dataProvider.getSourceDataByRange();
      this.matrix.reset();
      this._parsedCells = {};
      var cellsWithFormula = [];
      (0, _array.arrayEach)(cells, function (rowData, row) {
        (0, _array.arrayEach)(rowData, function (value, column) {
          if ((0, _utils.isFormulaExpression)(value)) {
            var cell = new _value.default(row, column);
            cell.setPrecedents(value);
            cellsWithFormula.push(cell);
          }
        });
      });
      cellsWithFormula = this.sortCellsByUsed(cellsWithFormula);
      (0, _array.arrayEach)(cellsWithFormula, function (cellValue) {
        var value = _this3.dataProvider.getSourceDataAtCell(cellValue.row, cellValue.column);

        var result = _this3.parseExpression(cellValue, value.substr(1));
      });
      this._state = STATE_UP_TO_DATE;
      this._parsedCells = {};
      this.runLocalHooks("afterRecalculate", cells, "full");
    }
    /**
     * Set predefined variable name which can be visible while parsing formula expression.
     *
     * @param {String} name Variable name.
     * @param {*} value Variable value.
     */

  }, {
    key: "setVariable",
    value: function setVariable(name, value) {
      this.parser.setVariable(name, value);
    }
    /**
     * Get variable name.
     *
     * @param {String} name Variable name.
     * @returns {*}
     */

  }, {
    key: "getVariable",
    value: function getVariable(name) {
      return this.parser.getVariable(name);
    }
    /**
     * Apply changes to the sheet.
     *
     * @param {Number} row Physical row index.
     * @param {Number} column Physical column index.
     * @param {*} newValue Current cell value.
     */

  }, {
    key: "applyChanges",
    value: function applyChanges(row, column, newValue) {
      // Remove formula description for old expression
      // TODO: Move this to recalculate()
      this.matrix.remove({
        row: row,
        column: column
      }); // TODO: Move this to recalculate()

      if ((0, _utils.isFormulaExpression)(newValue)) {
        // ...and create new for new changed formula expression
        this.parseExpression(new _value.default(row, column), newValue.substr(1));
      }

      var deps = [];
      var maxDependenciesDeep = this.hot && this.hot.getSettings().maxDependenciesDeep > -1 ? this.hot.getSettings().maxDependenciesDeep : -1;

      if (maxDependenciesDeep !== 0) {
        deps = this.getCellDependencies(this.hot.toVisualRow(row), this.hot.toVisualColumn(column));
      }

      (0, _array.arrayEach)(deps, function (cellValue) {
        cellValue.setState(_value.default.STATE_OUT_OFF_DATE);
      });
      this._state = STATE_NEED_REBUILD;
    }
    /**
     * Parse and evaluate formula for provided cell.
     *
     * @param {CellValue|Object} cellValue Cell value object.
     * @param {String} formula Value to evaluate.
     */

  }, {
    key: "parseExpression",
    value: function parseExpression(cellValue, formula) {
      cellValue.setState(_value.default.STATE_COMPUTING);
      this._processingCell = cellValue;

      var _this$parser$parse = this.parser.parse((0, _utils.toUpperCaseFormula)(formula)),
          error = _this$parser$parse.error,
          result = _this$parser$parse.result;

      if (result && !this._parsedCells[cellValue.key]) {
        this._parsedCells[cellValue.key] = result;
      }

      if ((0, _utils.isFormulaExpression)(result)) {
        this.parseExpression(cellValue, result.substr(1));
      } else {
        cellValue.setValue(result);
        cellValue.setError(error);
        cellValue.setState(_value.default.STATE_UP_TO_DATE);
      }

      cellValue.setPrecedents("=" + (0, _utils.toUpperCaseFormula)(formula));
      this.matrix.add(cellValue);
      this._processingCell = null;
      return result;
    }
    /**
     * Get cell value object at specified physical coordinates.
     *
     * @param {Number} row Physical row index.
     * @param {Number} column Physical column index.
     * @returns {CellValue|undefined}
     */

  }, {
    key: "getCellAt",
    value: function getCellAt(row, column) {
      return this.matrix.getCellAt(row, column);
    }
    /**
     * Get cell dependencies at specified physical coordinates.
     *
     * @param {Number} row Physical row index.
     * @param {Number} column Physical column index.
     * @returns {Array}
     */

  }, {
    key: "getCellDependencies",
    value: function getCellDependencies(row, column) {
      return this.useCustomGetCellDependencies ? this.matrix.getDependenciesCustom({
        row: row,
        column: column
      }) : this.matrix.getDependencies({
        row: row,
        column: column
      });
    }
    /**
     * Listener for parser cell value.
     *
     * @private
     * @param {Object} cellCoords Cell coordinates.
     * @param {Function} done Function to call with valid cell value.
     */

  }, {
    key: "_onCallCellValue",
    value: function _onCallCellValue(_ref5, done) {
      var row = _ref5.row,
          column = _ref5.column;
      var cell = new _reference.default(row, column);

      if (!this.dataProvider.isInDataRange(cell.row, cell.column)) {
        throw Error(_hotFormulaParser.ERROR_REF);
      }

      this.matrix.registerCellRef(cell);

      this._processingCell.addPrecedent(cell);

      var cellValue = this.dataProvider.getRawDataAtCell(row.index, column.index);

      if ((0, _hotFormulaParser.error)(cellValue)) {
        var computedCell = this.matrix.getCellAt(row.index, column.index);

        if (computedCell && computedCell.hasError()) {
          throw Error(cellValue);
        }
      }

      if ((0, _utils.isFormulaExpression)(cellValue)) {
        if (this._parsedCells && this._parsedCells[arguments[0].label]) {
          return done(this._parsedCells[arguments[0].label]);
        }

        var _this$parser$parse2 = this.parser.parse(cellValue.substr(1)),
            error = _this$parser$parse2.error,
            result = _this$parser$parse2.result;

        if (error) {
          throw Error(error);
        }

        this._parsedCells[arguments[0].label] = result;
        done(result);
      } else {
        this._parsedCells[arguments[0].label] = (0, _number.toNumber)(cellValue);
        done((0, _number.toNumber)(cellValue));
      }
    }
    /**
     * Listener for parser cells (range) value.
     *
     * @private
     * @param {Object} startCell Cell coordinates (top-left corner coordinate).
     * @param {Object} endCell Cell coordinates (bottom-right corner coordinate).
     * @param {Function} done Function to call with valid cells values.
     */

  }, {
    key: "_onCallRangeValue",
    value: function _onCallRangeValue(_ref6, _ref7, done) {
      var _this4 = this;

      var startRow = _ref6.row,
          startColumn = _ref6.column;
      var endRow = _ref7.row,
          endColumn = _ref7.column;
      var cellValues = this.dataProvider.getRawDataByRange(startRow.index, startColumn.index, endRow.index, endColumn.index);

      var mapRowData = function mapRowData(rowData, rowIndex) {
        return (0, _array.arrayMap)(rowData, function (cellData, columnIndex) {
          var rowCellCoord = startRow.index + rowIndex;
          var columnCellCoord = startColumn.index + columnIndex;
          var cell = new _reference.default(rowCellCoord, columnCellCoord);
          var cellDataValue = new _value.default(rowCellCoord, columnCellCoord);

          if (!_this4.dataProvider.isInDataRange(cell.row, cell.column)) {
            throw Error(_hotFormulaParser.ERROR_REF);
          }

          if (_this4._parsedCells[cellDataValue.key]) {
            return _this4._parsedCells[cellDataValue.key];
          }

          _this4.matrix.registerCellRef(cell);

          _this4._processingCell.addPrecedent(cell);

          var newCellData = cellData;

          if ((0, _hotFormulaParser.error)(newCellData)) {
            var computedCell = _this4.matrix.getCellAt(cell.row, cell.column);

            if (computedCell && computedCell.hasError()) {
              throw Error(newCellData);
            }
          }

          if ((0, _utils.isFormulaExpression)(newCellData)) {
            var _this4$parser$parse = _this4.parser.parse(newCellData.substr(1)),
                error = _this4$parser$parse.error,
                result = _this4$parser$parse.result;

            if (error) {
              throw Error(error);
            }

            newCellData = result;
          }

          _this4._parsedCells[cellDataValue.key] = newCellData;
          return newCellData;
        });
      };

      var calculatedCellValues = (0, _array.arrayMap)(cellValues, function (rowData, rowIndex) {
        return mapRowData(rowData, rowIndex);
      });
      done(calculatedCellValues);
    }
    /**
     * On after alter sheet listener.
     *
     * @private
     */

  }, {
    key: "_onAfterAlter",
    value: function _onAfterAlter() {
      this.recalculateOptimized();
    }
    /**
     * Destroy class.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot = null;
      this.dataProvider.destroy();
      this.dataProvider = null;
      this.alterManager.destroy();
      this.alterManager = null;
      this.parser = null;
      this.matrix.reset();
      this.matrix = null;
    }
  }]);

  return Sheet;
}();

(0, _object.mixin)(Sheet, _localHooks.default);
var _default = Sheet;
exports.default = _default;