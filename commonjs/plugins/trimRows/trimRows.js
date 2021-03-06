"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.every");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-integer");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.set");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.default = void 0;

var _base = _interopRequireDefault(require("../_base"));

var _plugins = require("../../plugins");

var _translations = require("../../translations");

var _array = require("../../helpers/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @plugin TrimRows
 *
 * @description
 * The plugin allows to trim certain rows. The trimming is achieved by applying the transformation algorithm to the data
 * transformation. In this case, when the row is trimmed it is not accessible using `getData*` methods thus the trimmed
 * data is not visible to other plugins.
 *
 * @example
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   date: getData(),
 *   // hide selected rows on table initialization
 *   trimRows: [1, 2, 5]
 * });
 *
 * // access the trimRows plugin instance
 * const trimRowsPlugin = hot.getPlugin('trimRows');
 *
 * // hide single row
 * trimRowsPlugin.trimRow(1);
 *
 * // hide multiple rows
 * trimRowsPlugin.trimRow(1, 2, 9);
 *
 * // or as an array
 * trimRowsPlugin.trimRows([1, 2, 9]);
 *
 * // show single row
 * trimRowsPlugin.untrimRow(1);
 *
 * // show multiple rows
 * trimRowsPlugin.untrimRow(1, 2, 9);
 *
 * // or as an array
 * trimRowsPlugin.untrimRows([1, 2, 9]);
 *
 * // rerender table to see the changes
 * hot.render();
 * ```
 */
var TrimRows =
/*#__PURE__*/
function (_BasePlugin) {
  _inherits(TrimRows, _BasePlugin);

  function TrimRows(hotInstance) {
    var _this;

    _classCallCheck(this, TrimRows);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrimRows).call(this, hotInstance));
    /**
     * Map of skipped rows by plugin.
     *
     * @private
     * @type {null|SkipMap}
     */

    _this.trimmedRowsMap = null;
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link AutoRowSize#enablePlugin} method is called.
   *
   * @returns {Boolean}
   */


  _createClass(TrimRows, [{
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.hot.getSettings().trimRows;
    }
    /**
     * Enables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "enablePlugin",
    value: function enablePlugin() {
      var _this2 = this;

      if (this.enabled) {
        return;
      }

      this.trimmedRowsMap = this.hot.rowIndexMapper.registerMap('trimRows', new _translations.SkipMap());
      this.trimmedRowsMap.addLocalHook('init', function () {
        return _this2.onMapInit();
      });

      _get(_getPrototypeOf(TrimRows.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      var _this3 = this;

      var trimmedRows = this.hot.getSettings().trimRows;

      if (Array.isArray(trimmedRows)) {
        this.hot.executeBatchOperations(function () {
          _this3.trimmedRowsMap.clear();

          (0, _array.arrayEach)(trimmedRows, function (physicalRow) {
            _this3.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }

      _get(_getPrototypeOf(TrimRows.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      this.hot.rowIndexMapper.unregisterMap('trimRows');

      _get(_getPrototypeOf(TrimRows.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Get list of trimmed rows.
     *
     * @returns {Array} Physical rows.
     */

  }, {
    key: "getTrimmedRows",
    value: function getTrimmedRows() {
      return (0, _array.arrayReduce)(this.trimmedRowsMap.getValues(), function (indexesList, isTrimmed, physicalIndex) {
        if (isTrimmed) {
          return indexesList.concat(physicalIndex);
        }

        return indexesList;
      }, []);
    }
    /**
     * Trims the rows provided in the array.
     *
     * @param {Number[]} rows Array of physical row indexes.
     * @fires Hooks#beforeTrimRow
     * @fires Hooks#afterTrimRow
     */

  }, {
    key: "trimRows",
    value: function trimRows(rows) {
      var _this4 = this;

      var currentTrimConfig = this.getTrimmedRows();
      var isValidConfig = this.isValidConfig(rows);
      var destinationTrimConfig = currentTrimConfig;

      if (isValidConfig) {
        destinationTrimConfig = Array.from(new Set(currentTrimConfig.concat(rows)));
      }

      var allowTrimRow = this.hot.runHooks('beforeTrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig);

      if (allowTrimRow === false) {
        return;
      }

      if (isValidConfig) {
        this.hot.executeBatchOperations(function () {
          (0, _array.arrayEach)(rows, function (physicalRow) {
            _this4.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }

      this.hot.runHooks('afterTrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig, isValidConfig && destinationTrimConfig.length > currentTrimConfig.length);
    }
    /**
     * Trims the row provided as physical row index (counting from 0).
     *
     * @param {...Number} row Physical row index.
     */

  }, {
    key: "trimRow",
    value: function trimRow() {
      for (var _len = arguments.length, row = new Array(_len), _key = 0; _key < _len; _key++) {
        row[_key] = arguments[_key];
      }

      this.trimRows(row);
    }
    /**
     * Untrims the rows provided in the array.
     *
     * @param {Number[]} rows Array of physical row indexes.
     * @fires Hooks#beforeUntrimRow
     * @fires Hooks#afterUntrimRow
     */

  }, {
    key: "untrimRows",
    value: function untrimRows(rows) {
      var _this5 = this;

      var currentTrimConfig = this.getTrimmedRows();
      var isValidConfig = this.isValidConfig(rows);
      var destinationTrimConfig = currentTrimConfig;

      if (isValidConfig) {
        destinationTrimConfig = currentTrimConfig.filter(function (trimmedRow) {
          return rows.includes(trimmedRow) === false;
        });
      }

      var allowUntrimRow = this.hot.runHooks('beforeUntrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig);

      if (allowUntrimRow === false) {
        return;
      }

      if (isValidConfig) {
        this.hot.executeBatchOperations(function () {
          (0, _array.arrayEach)(rows, function (physicalRow) {
            _this5.trimmedRowsMap.setValueAtIndex(physicalRow, false);
          });
        });
      }

      this.hot.runHooks('afterUntrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig, isValidConfig && destinationTrimConfig.length < currentTrimConfig.length);
    }
    /**
     * Untrims the row provided as row index (counting from 0).
     *
     * @param {...Number} row Physical row index.
     */

  }, {
    key: "untrimRow",
    value: function untrimRow() {
      for (var _len2 = arguments.length, row = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        row[_key2] = arguments[_key2];
      }

      this.untrimRows(row);
    }
    /**
     * Checks if given row is hidden.
     *
     * @param physicalRow Physical row index.
     * @returns {Boolean}
     */

  }, {
    key: "isTrimmed",
    value: function isTrimmed(physicalRow) {
      return this.trimmedRowsMap.getValueAtIndex(physicalRow);
    }
    /**
     * Untrims all trimmed rows.
     */

  }, {
    key: "untrimAll",
    value: function untrimAll() {
      this.untrimRows(this.getTrimmedRows());
    }
    /**
     * Get if trim config is valid.
     *
     * @param {Array} trimmedRows List of physical row indexes.
     * @returns {Boolean}
     */

  }, {
    key: "isValidConfig",
    value: function isValidConfig(trimmedRows) {
      var sourceRows = this.hot.countSourceRows();
      return trimmedRows.every(function (trimmedRow) {
        return Number.isInteger(trimmedRow) && trimmedRow >= 0 && trimmedRow < sourceRows;
      });
    }
    /**
     * On map initialized hook callback.
     *
     * @private
     */

  }, {
    key: "onMapInit",
    value: function onMapInit() {
      var _this6 = this;

      var trimmedRows = this.hot.getSettings().trimRows;

      if (Array.isArray(trimmedRows)) {
        this.hot.executeBatchOperations(function () {
          (0, _array.arrayEach)(trimmedRows, function (physicalRow) {
            _this6.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot.rowIndexMapper.unregisterMap('trimRows');

      _get(_getPrototypeOf(TrimRows.prototype), "destroy", this).call(this);
    }
  }]);

  return TrimRows;
}(_base.default);

(0, _plugins.registerPlugin)('trimRows', TrimRows);
var _default = TrimRows;
exports.default = _default;