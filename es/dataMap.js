import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.array.sort";
import "core-js/modules/es.array.splice";
import "core-js/modules/es.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import SheetClip from "./../lib/SheetClip/SheetClip";
import { cellMethodLookupFactory } from "./helpers/data";
import { columnFactory } from "./helpers/setting";
import { createObjectPropListener, deepClone, deepExtend, deepObjectSize, duckSchema, hasOwnProperty, isObject, objectEach } from "./helpers/object";
import { extendArray, to2dArray } from "./helpers/array";
import { rangeEach } from "./helpers/number";
import { isDefined } from "./helpers/mixed";
var copyableLookup = cellMethodLookupFactory("copyable", false);
/**
 * Utility class that gets and saves data from/to the data source using mapping of columns numbers to object property names
 * @todo refactor arguments of methods getRange, getText to be numbers (not objects)
 * @todo remove priv, GridSettings from object constructor
 *
 * @util
 * @class DataMap
 * @private
 */

var DataMap =
/*#__PURE__*/
function () {
  _createClass(DataMap, null, [{
    key: "DESTINATION_RENDERER",

    /**
     * @type {Number}
     */
    get: function get() {
      return 1;
    }
    /**
     * @type {Number}
     */

  }, {
    key: "DESTINATION_CLIPBOARD_GENERATOR",
    get: function get() {
      return 2;
    }
    /**
     * @param {Object} instance Instance of Handsontable
     * @param {Array} data Array of arrays or array of objects containing data.
     * @param {*} priv
     * @param {GridSettings} GridSettings Grid settings
     */

  }]);

  function DataMap(instance, data, priv, GridSettings) {
    _classCallCheck(this, DataMap);

    /**
     * Instance of {@link Handsontable}
     *
     * @private
     * @type {Handsontable}
     */
    this.instance = instance;
    /**
     * Private settings object.
     *
     * @private
     * @type {Object}
     */

    this.priv = priv;
    /**
     * Instance of {@link GridSettings}
     *
     * @private
     * @type {GridSettings}
     */

    this.GridSettings = GridSettings;
    /**
     * Reference to the original dataset.
     *
     * @type {*}
     */

    this.dataSource = data;
    /**
     * Cached sourceData rows number.
     *
     * @type {Number}
     */

    this.latestSourceRowsCount = 0;
    /**
     * Generated schema based on the first row from the source data.
     *
     * @type {Object}
     */

    this.duckSchema = this.dataSource && this.dataSource[0] ? duckSchema(this.dataSource[0]) : {};
    /**
     * Cached array of properties to columns.
     *
     * @type {Array}
     */

    this.colToPropCache = void 0;
    /**
     * Cached map of properties to columns.
     *
     * @type {Map}
     */

    this.propToColCache = void 0;
    this.createMap();
  }
  /**
   * Generates cache for property to and from column addressation.
   */


  _createClass(DataMap, [{
    key: "createMap",
    value: function createMap() {
      var schema = this.getSchema();
      var i;

      if (typeof schema === "undefined") {
        throw new Error("trying to create `columns` definition but you didn't provide `schema` nor `data`");
      }

      this.colToPropCache = [];
      this.propToColCache = new Map();
      var columns = this.instance.getSettings().columns;

      if (columns) {
        var maxCols = this.instance.getSettings().maxCols;
        var columnsLen = Math.min(maxCols, columns.length);
        var filteredIndex = 0;
        var columnsAsFunc = false;
        var schemaLen = deepObjectSize(schema);

        if (typeof columns === "function") {
          columnsLen = schemaLen > 0 ? schemaLen : this.instance.countSourceCols();
          columnsAsFunc = true;
        }

        for (i = 0; i < columnsLen; i++) {
          var column = columnsAsFunc ? columns(i) : columns[i];

          if (isObject(column)) {
            if (typeof column.data !== "undefined") {
              var index = columnsAsFunc ? filteredIndex : i;
              this.colToPropCache[index] = column.data;
              this.propToColCache.set(column.data, index);
            }

            filteredIndex += 1;
          }
        }
      } else {
        this.recursiveDuckColumns(schema);
      }
    }
    /**
     * Generates columns' translation cache.
     *
     * @param {Object} schema
     * @param {Number} lastCol
     * @param {Number} parent
     * @returns {Number}
     */

  }, {
    key: "recursiveDuckColumns",
    value: function recursiveDuckColumns(schema, lastCol, parent) {
      var _this = this;

      var lastColumn = lastCol;
      var propertyParent = parent;
      var prop;

      if (typeof lastColumn === "undefined") {
        lastColumn = 0;
        propertyParent = "";
      }

      if (_typeof(schema) === "object" && !Array.isArray(schema)) {
        objectEach(schema, function (value, key) {
          if (value === null) {
            prop = propertyParent + key;

            _this.colToPropCache.push(prop);

            _this.propToColCache.set(prop, lastColumn);

            lastColumn += 1;
          } else {
            lastColumn = _this.recursiveDuckColumns(value, lastColumn, "".concat(key, "."));
          }
        });
      }

      return lastColumn;
    }
    /**
     * Returns property name that corresponds with the given column index.
     *
     * @param {Number} column Visual column index.
     * @returns {String|Number} Column property, physical column index or passed argument.
     */

  }, {
    key: "colToProp",
    value: function colToProp(column) {
      var physicalColumn = this.instance.toPhysicalColumn(column); // Out of range, not visible column index.

      if (physicalColumn === null) {
        return column;
      } // Cached property.


      if (this.colToPropCache && isDefined(this.colToPropCache[physicalColumn])) {
        return this.colToPropCache[physicalColumn];
      }

      return physicalColumn;
    }
    /**
     * Translates property into visual column index.
     *
     * @param {String|Number} prop Column property which may be also a physical column index.
     * @returns {String|Number} Visual column index or passed argument.
     */

  }, {
    key: "propToCol",
    value: function propToCol(prop) {
      var cachedPhysicalIndex = this.propToColCache.get(prop);

      if (isDefined(cachedPhysicalIndex)) {
        return this.instance.toVisualColumn(cachedPhysicalIndex);
      } // Property may be a physical column index.


      var visualColumn = this.instance.toVisualColumn(prop);

      if (visualColumn === null) {
        return prop;
      }

      return visualColumn;
    }
    /**
     * Returns data's schema.
     *
     * @returns {Object}
     */

  }, {
    key: "getSchema",
    value: function getSchema() {
      var schema = this.instance.getSettings().dataSchema;

      if (schema) {
        if (typeof schema === "function") {
          return schema();
        }

        return schema;
      }

      return this.duckSchema;
    }
    /**
     * Creates row at the bottom of the data array.
     *
     * @param {Number} [index] Physical index of the row before which the new row will be inserted.
     * @param {Number} [amount=1] An amount of rows to add.
     * @param {String} [source] Source of method call.
     * @fires Hooks#afterCreateRow
     * @returns {Number} Returns number of created rows.
     */

  }, {
    key: "createRow",
    value: function createRow(index) {
      var _this2 = this;

      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var source = arguments.length > 2 ? arguments[2] : undefined;
      var numberOfCreatedRows = 0;
      var rowIndex = index;

      if (typeof rowIndex !== "number" || rowIndex >= this.instance.countSourceRows()) {
        rowIndex = this.instance.countSourceRows();
      }

      var continueProcess = this.instance.runHooks("beforeCreateRow", rowIndex, amount, source);

      if (continueProcess === false) {
        return 0;
      }

      var physicalRowIndex = this.instance.countSourceRows();

      if (rowIndex < this.instance.countRows()) {
        physicalRowIndex = this.instance.toPhysicalRow(rowIndex);
      }

      var maxRows = this.instance.getSettings().maxRows;
      var columnCount = this.instance.countCols();

      var _loop = function _loop() {
        var row = null;

        if (_this2.instance.dataType === "array") {
          if (_this2.instance.getSettings().dataSchema) {
            // Clone template array
            row = deepClone(_this2.getSchema());
          } else {
            row = [];
            /* eslint-disable no-loop-func */

            rangeEach(columnCount - 1, function () {
              return row.push(null);
            });
          }
        } else if (_this2.instance.dataType === "function") {
          row = _this2.instance.getSettings().dataSchema(rowIndex);
        } else {
          row = {};
          deepExtend(row, _this2.getSchema());
        }

        if (rowIndex === _this2.instance.countSourceRows()) {
          _this2.dataSource.push(row);
        } else {
          _this2.spliceData(physicalRowIndex, 0, row);
        }

        numberOfCreatedRows += 1;
      };

      while (numberOfCreatedRows < amount && this.instance.countSourceRows() < maxRows) {
        _loop();
      }

      this.instance.rowIndexMapper.insertIndexes(rowIndex, numberOfCreatedRows);
      this.instance.runHooks("afterCreateRow", rowIndex, numberOfCreatedRows, source);
      this.instance.forceFullRender = true; // used when data was changed

      return numberOfCreatedRows;
    }
    /**
     * Creates column at the right of the data array.
     *
     * @param {Number} [index] Visual index of the column before which the new column will be inserted
     * @param {Number} [amount=1] An amount of columns to add.
     * @param {String} [source] Source of method call.
     * @fires Hooks#afterCreateCol
     * @returns {Number} Returns number of created columns
     */

  }, {
    key: "createCol",
    value: function createCol(index) {
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var source = arguments.length > 2 ? arguments[2] : undefined;

      if (!this.instance.isColumnModificationAllowed()) {
        throw new Error("Cannot create new column. When data source in an object, " + "you can only have as much columns as defined in first data row, data schema or in the 'columns' setting." + "If you want to be able to add new columns, you have to use array datasource.");
      }

      var dataSource = this.dataSource;
      var maxCols = this.instance.getSettings().maxCols;
      var columnIndex = index;

      if (typeof columnIndex !== "number" || columnIndex >= this.instance.countSourceCols()) {
        columnIndex = this.instance.countSourceCols();
      }

      var continueProcess = this.instance.runHooks("beforeCreateCol", columnIndex, amount, source);

      if (continueProcess === false) {
        return 0;
      }

      var physicalColumnIndex = this.instance.countSourceCols();

      if (columnIndex < this.instance.countCols()) {
        physicalColumnIndex = this.instance.toPhysicalColumn(columnIndex);
      }

      var numberOfSourceRows = this.instance.countSourceRows();
      var nrOfColumns = this.instance.countCols();
      var numberOfCreatedCols = 0;
      var currentIndex = physicalColumnIndex;

      while (numberOfCreatedCols < amount && nrOfColumns < maxCols) {
        var _constructor = columnFactory(this.GridSettings, this.priv.columnsSettingConflicts);

        if (typeof columnIndex !== "number" || columnIndex >= nrOfColumns) {
          if (numberOfSourceRows > 0) {
            for (var row = 0; row < numberOfSourceRows; row += 1) {
              if (typeof dataSource[row] === "undefined") {
                dataSource[row] = [];
              }

              dataSource[row].push(null);
            }
          } else {
            dataSource.push([null]);
          } // Add new column constructor


          this.priv.columnSettings.push(_constructor);
        } else {
          for (var _row = 0; _row < numberOfSourceRows; _row++) {
            dataSource[_row].splice(currentIndex, 0, null);
          } // Add new column constructor at given index


          this.priv.columnSettings.splice(currentIndex, 0, _constructor);
        }

        numberOfCreatedCols += 1;
        currentIndex += 1;
        nrOfColumns += 1;
      }

      this.instance.columnIndexMapper.insertIndexes(columnIndex, numberOfCreatedCols);
      this.instance.runHooks("afterCreateCol", columnIndex, numberOfCreatedCols, source);
      this.instance.forceFullRender = true; // used when data was changed

      return numberOfCreatedCols;
    }
    /**
     * Removes row from the data array.
     *
     * @param {Number} [index] Visual index of the row to be removed. If not provided, the last row will be removed
     * @param {Number} [amount=1] Amount of the rows to be removed. If not provided, one row will be removed
     * @param {String} [source] Source of method call.
     * @fires Hooks#beforeRemoveRow
     * @fires Hooks#afterRemoveRow
     */

  }, {
    key: "removeRow",
    value: function removeRow(index) {
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var source = arguments.length > 2 ? arguments[2] : undefined;
      var rowIndex = typeof index !== "number" ? -amount : index;
      var rowsAmount = this.instance.runHooks("modifyRemovedAmount", amount, rowIndex);
      var sourceRowsLength = this.instance.countSourceRows();
      rowIndex = (sourceRowsLength + rowIndex) % sourceRowsLength;
      var logicRows = this.visualRowsToPhysical(rowIndex, rowsAmount);
      var actionWasNotCancelled = this.instance.runHooks("beforeRemoveRow", rowIndex, rowsAmount, logicRows, source);

      if (actionWasNotCancelled === false) {
        return;
      }

      var data = this.dataSource;
      var newData = this.filterData(rowIndex, rowsAmount);

      if (newData) {
        data.length = 0;
        Array.prototype.push.apply(data, newData);
      } // TODO: Function `removeRow` should validate fully, probably above.


      if (rowIndex < this.instance.countRows()) {
        this.instance.rowIndexMapper.removeIndexes(logicRows);
        var customDefinedColumns = isDefined(this.instance.getSettings().columns) || isDefined(this.instance.getSettings().dataSchema); // All rows have been removed. There shouldn't be any columns.

        if (this.instance.rowIndexMapper.getNotSkippedIndexesLength() === 0 && customDefinedColumns === false) {
          this.instance.columnIndexMapper.setIndexesSequence([]);
        }
      }

      this.instance.runHooks("afterRemoveRow", rowIndex, rowsAmount, logicRows, source);
      this.instance.forceFullRender = true; // used when data was changed
    }
    /**
     * Removes column from the data array.
     *
     * @param {Number} [index] Visual index of the column to be removed. If not provided, the last column will be removed
     * @param {Number} [amount=1] Amount of the columns to be removed. If not provided, one column will be removed
     * @param {String} [source] Source of method call.
     * @fires Hooks#beforeRemoveCol
     * @fires Hooks#afterRemoveCol
     */

  }, {
    key: "removeCol",
    value: function removeCol(index) {
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var source = arguments.length > 2 ? arguments[2] : undefined;

      if (this.instance.dataType === "object" || this.instance.getSettings().columns) {
        throw new Error("cannot remove column with object data source or columns option specified");
      }

      var columnIndex = typeof index !== "number" ? -amount : index;
      columnIndex = (this.instance.countCols() + columnIndex) % this.instance.countCols();
      var logicColumns = this.visualColumnsToPhysical(columnIndex, amount);
      var descendingLogicColumns = logicColumns.slice(0).sort(function (a, b) {
        return b - a;
      });
      var actionWasNotCancelled = this.instance.runHooks("beforeRemoveCol", columnIndex, amount, logicColumns, source);

      if (actionWasNotCancelled === false) {
        return;
      }

      var isTableUniform = true;
      var removedColumnsCount = descendingLogicColumns.length;
      var data = this.dataSource;

      for (var c = 0; c < removedColumnsCount; c++) {
        if (isTableUniform && logicColumns[0] !== logicColumns[c] - c) {
          isTableUniform = false;
        }
      }

      if (isTableUniform) {
        for (var r = 0, rlen = this.instance.countSourceRows(); r < rlen; r++) {
          data[r].splice(logicColumns[0], amount);
        }
      } else {
        for (var _r = 0, _rlen = this.instance.countSourceRows(); _r < _rlen; _r++) {
          for (var _c = 0; _c < removedColumnsCount; _c++) {
            data[_r].splice(descendingLogicColumns[_c], 1);
          }
        }

        for (var _c2 = 0; _c2 < removedColumnsCount; _c2++) {
          this.priv.columnSettings.splice(logicColumns[_c2], 1);
        }
      } // TODO: Function `removeCol` should validate fully, probably above.


      if (columnIndex < this.instance.countCols()) {
        this.instance.columnIndexMapper.removeIndexes(logicColumns); // All columns have been removed. There shouldn't be any rows.

        if (this.instance.columnIndexMapper.getNotSkippedIndexesLength() === 0) {
          this.instance.rowIndexMapper.setIndexesSequence([]);
        }
      }

      this.instance.runHooks("afterRemoveCol", columnIndex, amount, logicColumns, source);
      this.instance.forceFullRender = true; // used when data was changed
    }
    /**
     * Add/Removes data from the column.
     *
     * @param {Number} col Physical index of column in which do you want to do splice
     * @param {Number} index Index at which to start changing the array. If negative, will begin that many elements from the end
     * @param {Number} amount An integer indicating the number of old array elements to remove. If amount is 0, no elements are removed
     * @param {Array} [elements]
     * @returns {Array} Returns removed portion of columns
     */

  }, {
    key: "spliceCol",
    value: function spliceCol(col, index, amount) {
      var colData = this.instance.getDataAtCol(col);
      var removed = colData.slice(index, index + amount);
      var after = colData.slice(index + amount);

      for (var _len = arguments.length, elements = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        elements[_key - 3] = arguments[_key];
      }

      extendArray(elements, after);
      var i = 0;

      while (i < amount) {
        elements.push(null); // add null in place of removed elements

        i += 1;
      }

      to2dArray(elements);
      this.instance.populateFromArray(index, col, elements, null, null, "spliceCol");
      return removed;
    }
    /**
     * Add/Removes data from the row.
     *
     * @param {Number} row Physical index of row in which do you want to do splice
     * @param {Number} index Index at which to start changing the array. If negative, will begin that many elements from the end.
     * @param {Number} amount An integer indicating the number of old array elements to remove. If amount is 0, no elements are removed.
     * @param {Array} [elements]
     * @returns {Array} Returns removed portion of rows
     */

  }, {
    key: "spliceRow",
    value: function spliceRow(row, index, amount) {
      var rowData = this.instance.getSourceDataAtRow(row);
      var removed = rowData.slice(index, index + amount);
      var after = rowData.slice(index + amount);

      for (var _len2 = arguments.length, elements = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        elements[_key2 - 3] = arguments[_key2];
      }

      extendArray(elements, after);
      var i = 0;

      while (i < amount) {
        elements.push(null); // add null in place of removed elements

        i += 1;
      }

      this.instance.populateFromArray(row, index, [elements], null, null, "spliceRow");
      return removed;
    }
    /**
     * Add/remove row(s) to/from the data source.
     *
     * @param {Number} index Physical index of the element to remove.
     * @param {Number} amount Number of rows to add/remove.
     * @param {Object} element Row to add.
     */

  }, {
    key: "spliceData",
    value: function spliceData(index, amount, element) {
      var continueSplicing = this.instance.runHooks("beforeDataSplice", index, amount, element);

      if (continueSplicing !== false) {
        this.dataSource.splice(index, amount, element);
      }
    }
    /**
     * Filter unwanted data elements from the data source.
     *
     * @param {Number} index Visual index of the element to remove.
     * @param {Number} amount Number of rows to add/remove.
     * @returns {Array}
     */

  }, {
    key: "filterData",
    value: function filterData(index, amount) {
      var physicalRows = this.visualRowsToPhysical(index, amount);
      var continueSplicing = this.instance.runHooks("beforeDataFilter", index, amount, physicalRows);

      if (continueSplicing !== false) {
        var newData = this.dataSource.filter(function (row, rowIndex) {
          return physicalRows.indexOf(rowIndex) === -1;
        });
        return newData;
      }
    }
    /**
     * Returns single value from the data array.
     *
     * @param {Number} row Visual row index.
     * @param {Number} prop
     * @returns {*}
     */

  }, {
    key: "get",
    value: function get(row, prop) {
      var physicalRow = this.instance.toPhysicalRow(row);
      var dataRow = this.dataSource[physicalRow]; // TODO: To remove, use 'modifyData' hook instead (see below)

      var modifiedRowData = this.instance.runHooks("modifyRowData", physicalRow);
      dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow; //

      var value = null; // try to get value under property `prop` (includes dot)

      if (dataRow && dataRow.hasOwnProperty && hasOwnProperty(dataRow, prop)) {
        value = dataRow[prop];
      } else if (typeof prop === "string" && prop.indexOf(".") > -1) {
        var sliced = prop.split(".");
        var out = dataRow;

        if (!out) {
          return null;
        }

        for (var i = 0, ilen = sliced.length; i < ilen; i++) {
          out = out[sliced[i]];

          if (typeof out === "undefined") {
            return null;
          }
        }

        value = out;
      } else if (typeof prop === "function") {
        /**
         *  allows for interacting with complex structures, for example
         *  d3/jQuery getter/setter properties:
         *
         *    {columns: [{
         *      data: function(row, value){
         *        if(arguments.length === 1){
         *          return row.property();
         *        }
         *        row.property(value);
         *      }
         *    }]}
         */
        value = prop(this.dataSource.slice(physicalRow, physicalRow + 1)[0]);
      }

      if (this.instance.hasHook("modifyData")) {
        var valueHolder = createObjectPropListener(value);
        this.instance.runHooks("modifyData", physicalRow, this.propToCol(prop), valueHolder, "get");

        if (valueHolder.isTouched()) {
          value = valueHolder.value;
        }
      }

      return value;
    }
    /**
     * Returns single value from the data array (intended for clipboard copy to an external application).
     *
     * @param {Number} row Physical row index.
     * @param {Number} prop
     * @returns {String}
     */

  }, {
    key: "getCopyable",
    value: function getCopyable(row, prop) {
      if (copyableLookup.call(this.instance, row, this.propToCol(prop))) {
        return this.get(row, prop);
      }

      return "";
    }
    /**
     * Saves single value to the data array.
     *
     * @param {Number} row Visual row index.
     * @param {Number} prop
     * @param {String} value
     */

  }, {
    key: "set",
    value: function set(row, prop, value) {
      var physicalRow = this.instance.toPhysicalRow(row);
      var newValue = value;
      var dataRow = this.dataSource[physicalRow]; // TODO: To remove, use 'modifyData' hook instead (see below)

      var modifiedRowData = this.instance.runHooks("modifyRowData", physicalRow);
      dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow; //

      if (this.instance.hasHook("modifyData")) {
        var valueHolder = createObjectPropListener(newValue);
        this.instance.runHooks("modifyData", physicalRow, this.propToCol(prop), valueHolder, "set");

        if (valueHolder.isTouched()) {
          newValue = valueHolder.value;
        }
      } // try to set value under property `prop` (includes dot)


      if (dataRow && dataRow.hasOwnProperty && hasOwnProperty(dataRow, prop)) {
        dataRow[prop] = newValue;
      } else if (typeof prop === "string" && prop.indexOf(".") > -1) {
        var sliced = prop.split(".");
        var out = dataRow;
        var i = 0;
        var ilen;

        for (i = 0, ilen = sliced.length - 1; i < ilen; i++) {
          if (typeof out[sliced[i]] === "undefined") {
            out[sliced[i]] = {};
          }

          out = out[sliced[i]];
        }

        out[sliced[i]] = newValue;
      } else if (typeof prop === "function") {
        /* see the `function` handler in `get` */
        prop(this.dataSource.slice(physicalRow, physicalRow + 1)[0], newValue);
      } else {
        dataRow[prop] = newValue;
      }
    }
    /**
     * This ridiculous piece of code maps rows Id that are present in table data to those displayed for user.
     * The trick is, the physical row id (stored in settings.data) is not necessary the same
     * as the visual (displayed) row id (e.g. when sorting is applied).
     *
     * @param {Number} index Visual row index.
     * @param {Number} amount
     * @returns {Number}
     */

  }, {
    key: "visualRowsToPhysical",
    value: function visualRowsToPhysical(index, amount) {
      var totalRows = this.instance.countSourceRows();
      var logicRows = [];
      var physicRow = (totalRows + index) % totalRows;
      var rowsToRemove = amount;
      var row;

      while (physicRow < totalRows && rowsToRemove) {
        row = this.instance.toPhysicalRow(physicRow);
        logicRows.push(row);
        rowsToRemove -= 1;
        physicRow += 1;
      }

      return logicRows;
    }
    /**
     *
     * @param index Visual column index.
     * @param amount
     * @returns {Array}
     */

  }, {
    key: "visualColumnsToPhysical",
    value: function visualColumnsToPhysical(index, amount) {
      var totalCols = this.instance.countCols();
      var visualCols = [];
      var physicalCol = (totalCols + index) % totalCols;
      var colsToRemove = amount;

      while (physicalCol < totalCols && colsToRemove) {
        var col = this.instance.toPhysicalColumn(physicalCol);
        visualCols.push(col);
        colsToRemove -= 1;
        physicalCol += 1;
      }

      return visualCols;
    }
    /**
     * Clears the data array.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var r = 0; r < this.instance.countSourceRows(); r++) {
        for (var c = 0; c < this.instance.countCols(); c++) {
          this.set(r, this.colToProp(c), "");
        }
      }
    }
    /**
     * Get data length.
     *
     * @returns {Number}
     */

  }, {
    key: "getLength",
    value: function getLength() {
      var maxRowsFromSettings = this.instance.getSettings().maxRows;
      var maxRows;

      if (maxRowsFromSettings < 0 || maxRowsFromSettings === 0) {
        maxRows = 0;
      } else {
        maxRows = maxRowsFromSettings || Infinity;
      }

      var length = this.instance.rowIndexMapper.getNotSkippedIndexesLength();
      return Math.min(length, maxRows);
    }
    /**
     * Returns the data array.
     *
     * @returns {Array}
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var start = {
        row: 0,
        col: 0
      };
      var end = {
        row: Math.max(this.instance.countPhysicalRows() - 1, 0),
        col: Math.max(this.instance.countPhysicalCols() - 1, 0)
      };

      if (start.row - end.row === 0 && !this.instance.countSourceRows()) {
        return [];
      }

      return this.getRange(start, end, DataMap.DESTINATION_RENDERER);
    }
    /**
     * Returns data range as array.
     *
     * @param {Object} [start] Start selection position. Visual indexes.
     * @param {Object} [end] End selection position. Visual indexes.
     * @param {Number} destination Destination of datamap.get
     * @returns {Array}
     */

  }, {
    key: "getRange",
    value: function getRange(start, end, destination) {
      var output = [];
      var r;
      var c;
      var row;
      var maxRows = this.instance.countPhysicalRows();
      var maxCols = this.instance.countPhysicalCols();

      if (maxRows === 0 || maxCols === 0) {
        return [];
      }

      var getFn = destination === DataMap.DESTINATION_CLIPBOARD_GENERATOR ? this.getCopyable : this.get;
      var rlen = Math.min(Math.max(maxRows - 1, 0), Math.max(start.row, end.row));
      var clen = Math.min(Math.max(maxCols - 1, 0), Math.max(start.col, end.col));

      for (r = Math.min(start.row, end.row); r <= rlen; r++) {
        row = [];
        var physicalRow = this.instance.toPhysicalRow(r);

        for (c = Math.min(start.col, end.col); c <= clen; c++) {
          if (physicalRow === null) {
            break;
          }

          row.push(getFn.call(this, r, this.colToProp(c)));
        }

        if (physicalRow !== null) {
          output.push(row);
        }
      }

      return output;
    }
    /**
     * Return data as text (tab separated columns).
     *
     * @param {Object} [start] Start selection position. Visual indexes.
     * @param {Object} [end] End selection position. Visual indexes.
     * @returns {String}
     */

  }, {
    key: "getText",
    value: function getText(start, end) {
      return SheetClip.stringify(this.getRange(start, end, DataMap.DESTINATION_RENDERER));
    }
    /**
     * Return data as copyable text (tab separated columns intended for clipboard copy to an external application).
     *
     * @param {Object} [start] Start selection position. Visual indexes.
     * @param {Object} [end] End selection position. Visual indexes.
     * @returns {String}
     */

  }, {
    key: "getCopyableText",
    value: function getCopyableText(start, end) {
      return SheetClip.stringify(this.getRange(start, end, DataMap.DESTINATION_CLIPBOARD_GENERATOR));
    }
    /**
     * Destroy instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.instance = null;
      this.priv = null;
      this.GridSettings = null;
      this.dataSource = null;
      this.cachedLength = null;
      this.duckSchema = null;
      this.colToPropCache.length = 0;
      this.propToColCache.clear();
      this.propToColCache = void 0;
    }
  }]);

  return DataMap;
}();

export default DataMap;