import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.every";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.array.sort";
import "core-js/modules/es.map";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.is-integer";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import { addClass, removeClass } from '../../helpers/dom/element';
import { isUndefined, isDefined } from '../../helpers/mixed';
import { isObject } from '../../helpers/object';
import { isFunction } from '../../helpers/function';
import { arrayMap } from '../../helpers/array';
import BasePlugin from '../_base';
import { registerPlugin } from './../../plugins';
import { VisualIndexToPhysicalIndexMap as IndexToIndexMap, PhysicalIndexToValueMap as IndexToValueMap } from '../../translations';
import Hooks from '../../pluginHooks';
import { isPressedCtrlKey } from '../../utils/keyStateObserver';
import { ColumnStatesManager } from './columnStatesManager';
import { getNextSortOrder, areValidSortStates, getHeaderSpanElement, isFirstLevelColumnHeader, wasHeaderClickedProperly } from './utils';
import { getClassedToRemove, getClassesToAdd } from './domHelpers';
import { rootComparator } from './rootComparator';
import { registerRootComparator, sort } from './sortService';
var APPEND_COLUMN_CONFIG_STRATEGY = 'append';
var REPLACE_COLUMN_CONFIG_STRATEGY = 'replace';
var PLUGIN_KEY = 'columnSorting';
registerRootComparator(PLUGIN_KEY, rootComparator);
Hooks.getSingleton().register('beforeColumnSort');
Hooks.getSingleton().register('afterColumnSort'); // DIFF - MultiColumnSorting & ColumnSorting: changed configuration documentation.

/**
 * @plugin ColumnSorting
 *
 * @description
 * This plugin sorts the view by columns (but does not sort the data source!). To enable the plugin, set the
 * {@link Options#columnSorting} property to the correct value (see the examples below).
 *
 * @example
 * ```js
 * // as boolean
 * columnSorting: true
 *
 * // as an object with initial sort config (sort ascending for column at index 1)
 * columnSorting: {
 *   initialConfig: {
 *     column: 1,
 *     sortOrder: 'asc'
 *   }
 * }
 *
 * // as an object which define specific sorting options for all columns
 * columnSorting: {
 *   sortEmptyCells: true, // true = the table sorts empty cells, false = the table moves all empty cells to the end of the table (by default)
 *   indicator: true, // true = shows indicator for all columns (by default), false = don't show indicator for columns
 *   headerAction: true, // true = allow to click on the headers to sort (by default), false = turn off possibility to click on the headers to sort
 *   compareFunctionFactory: function(sortOrder, columnMeta) {
 *     return function(value, nextValue) {
 *       // Some value comparisons which will return -1, 0 or 1...
 *     }
 *   }
 * }
 *
 * // as an object passed to the `column` property, allows specifying a custom options for the desired column.
 * // please take a look at documentation of `column` property: https://handsontable.com/docs/Options.html#columns
 * columns: [{
 *   columnSorting: {
 *     indicator: false, // disable indicator for the first column,
 *     sortEmptyCells: true,
 *     headerAction: false, // clicks on the first column won't sort
 *     compareFunctionFactory: function(sortOrder, columnMeta) {
 *       return function(value, nextValue) {
 *         return 0; // Custom compare function for the first column (don't sort)
 *       }
 *     }
 *   }
 * }]```
 */

var ColumnSorting =
/*#__PURE__*/
function (_BasePlugin) {
  _inherits(ColumnSorting, _BasePlugin);

  function ColumnSorting(hotInstance) {
    var _this;

    _classCallCheck(this, ColumnSorting);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnSorting).call(this, hotInstance));
    /**
     * Instance of column state manager.
     *
     * @private
     * @type {ColumnStatesManager}
     */

    _this.columnStatesManager = new ColumnStatesManager();
    /**
     * Cached column properties from plugin like i.e. `indicator`, `headerAction`.
     *
     * @private
     * @type {null|PhysicalIndexToValueMap}
     */

    _this.columnMetaCache = null;
    /**
     * Main settings key designed for the plugin.
     *
     * @private
     * @type {String}
     */

    _this.pluginKey = PLUGIN_KEY;
    /**
     * Plugin indexes cache.
     *
     * @private
     * @type {null|VisualIndexToPhysicalIndexMap}
     */

    _this.indexesSequenceCache = null;
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the Handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link ColumnSorting#enablePlugin} method is called.
   *
   * @returns {Boolean}
   */


  _createClass(ColumnSorting, [{
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.hot.getSettings()[this.pluginKey];
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

      this.columnMetaCache = this.hot.columnIndexMapper.registerMap("".concat(this.pluginKey, ".columnMeta"), new IndexToValueMap(function (physicalIndex) {
        var visualIndex = _this2.hot.toVisualColumn(physicalIndex);

        if (visualIndex === null) {
          visualIndex = physicalIndex;
        }

        return _this2.getMergedPluginSettings(visualIndex);
      }));
      this.addHook('afterGetColHeader', function (column, TH) {
        return _this2.onAfterGetColHeader(column, TH);
      });
      this.addHook('beforeOnCellMouseDown', function (event, coords, TD, controller) {
        return _this2.onBeforeOnCellMouseDown(event, coords, TD, controller);
      });
      this.addHook('afterOnCellMouseDown', function (event, target) {
        return _this2.onAfterOnCellMouseDown(event, target);
      });
      this.addHook('afterInit', function () {
        return _this2.loadOrSortBySettings();
      });
      this.addHook('afterLoadData', function (sourceData, initialLoad) {
        return _this2.onAfterLoadData(initialLoad);
      }); // TODO: Workaround? It should be refactored / described.

      if (this.hot.view) {
        this.loadOrSortBySettings();
      }

      _get(_getPrototypeOf(ColumnSorting.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      var _this3 = this;

      var clearColHeader = function clearColHeader(column, TH) {
        var headerSpanElement = getHeaderSpanElement(TH);

        if (isFirstLevelColumnHeader(column, TH) === false || headerSpanElement === null) {
          return;
        }

        _this3.updateHeaderClasses(headerSpanElement);
      }; // Changing header width and removing indicator.


      this.hot.addHook('afterGetColHeader', clearColHeader);
      this.hot.addHookOnce('afterRender', function () {
        _this3.hot.removeHook('afterGetColHeader', clearColHeader);
      });
      this.hot.executeBatchOperations(function () {
        if (_this3.indexesSequenceCache !== null) {
          _this3.hot.rowIndexMapper.setIndexesSequence(_this3.indexesSequenceCache.getValues());

          _this3.hot.rowIndexMapper.unregisterMap(_this3.pluginKey);
        }

        _this3.hot.columnIndexMapper.unregisterMap("".concat(_this3.pluginKey, ".columnMeta"));
      });

      _get(_getPrototypeOf(ColumnSorting.prototype), "disablePlugin", this).call(this);
    } // DIFF - MultiColumnSorting & ColumnSorting: changed function documentation.

    /**
     * Sorts the table by chosen columns and orders.
     *
     * @param {undefined|Object} sortConfig Single column sort configuration. The configuration object contains `column` and `sortOrder` properties.
     * First of them contains visual column index, the second one contains sort order (`asc` for ascending, `desc` for descending).
     *
     * **Note**: Please keep in mind that every call of `sort` function set an entirely new sort order. Previous sort configs aren't preserved.
     *
     * @example
     * ```js
     * // sort ascending first visual column
     * hot.getPlugin('columnSorting').sort({ column: 0, sortOrder: 'asc' });
     * ```
     *
     * @fires Hooks#beforeColumnSort
     * @fires Hooks#afterColumnSort
     */

  }, {
    key: "sort",
    value: function sort(sortConfig) {
      var _this4 = this;

      var currentSortConfig = this.getSortConfig(); // We always pass configs defined as an array to `beforeColumnSort` and `afterColumnSort` hooks.

      var destinationSortConfigs = this.getNormalizedSortConfigs(sortConfig);
      var sortPossible = this.areValidSortConfigs(destinationSortConfigs);
      var allowSort = this.hot.runHooks('beforeColumnSort', currentSortConfig, destinationSortConfigs, sortPossible);

      if (allowSort === false) {
        return;
      }

      if (currentSortConfig.length === 0 && this.indexesSequenceCache === null) {
        this.indexesSequenceCache = this.hot.rowIndexMapper.registerMap(this.pluginKey, new IndexToIndexMap());
        this.indexesSequenceCache.setValues(this.hot.rowIndexMapper.getIndexesSequence());
      }

      if (sortPossible) {
        var translateColumnToPhysical = function translateColumnToPhysical(_ref) {
          var visualColumn = _ref.column,
              restOfProperties = _objectWithoutProperties(_ref, ["column"]);

          return _objectSpread({
            column: _this4.hot.toPhysicalColumn(visualColumn)
          }, restOfProperties);
        };

        var internalSortStates = arrayMap(destinationSortConfigs, function (columnSortConfig) {
          return translateColumnToPhysical(columnSortConfig);
        });
        this.columnStatesManager.setSortStates(internalSortStates);
        this.sortByPresetSortStates();
        this.saveAllSortSettings();
      }

      this.hot.runHooks('afterColumnSort', currentSortConfig, this.getSortConfig(), sortPossible);

      if (sortPossible) {
        this.hot.render();
        this.hot.view.wt.draw(true); // TODO: Workaround? One test won't pass after removal. It should be refactored / described.
      }
    }
    /**
     * Clear the sort performed on the table.
     */

  }, {
    key: "clearSort",
    value: function clearSort() {
      this.sort([]);
    }
    /**
     * Checks if the table is sorted (any column have to be sorted).
     *
     * @returns {Boolean}
     */

  }, {
    key: "isSorted",
    value: function isSorted() {
      return this.enabled && !this.columnStatesManager.isListOfSortedColumnsEmpty();
    }
    /**
     * Get sort configuration for particular column or for all sorted columns. Objects contain `column` and `sortOrder` properties.
     *
     * **Note**: Please keep in mind that returned objects expose **visual** column index under the `column` key. They are handled by the `sort` function.
     *
     * @param {Number} [column] Visual column index.
     * @returns {undefined|Object|Array}
     */

  }, {
    key: "getSortConfig",
    value: function getSortConfig(column) {
      var _this5 = this;

      var translateColumnToVisual = function translateColumnToVisual(_ref2) {
        var physicalColumn = _ref2.column,
            restOfProperties = _objectWithoutProperties(_ref2, ["column"]);

        return _objectSpread({
          column: _this5.hot.toVisualColumn(physicalColumn)
        }, restOfProperties);
      };

      if (isDefined(column)) {
        var physicalColumn = this.hot.toPhysicalColumn(column);
        var columnSortState = this.columnStatesManager.getColumnSortState(physicalColumn);

        if (isDefined(columnSortState)) {
          return translateColumnToVisual(columnSortState);
        }

        return;
      }

      var sortStates = this.columnStatesManager.getSortStates();
      return arrayMap(sortStates, function (columnState) {
        return translateColumnToVisual(columnState);
      });
    }
    /**
     * @description
     * Warn: Useful mainly for providing server side sort implementation (see in the example below). It doesn't sort the data set. It just sets sort configuration for all sorted columns.
     * Note: Please keep in mind that this method doesn't re-render the table.
     *
     * @example
     * ```js
     * beforeColumnSort: function(currentSortConfig, destinationSortConfigs) {
     *   const columnSortPlugin = this.getPlugin('columnSorting');
     *
     *   columnSortPlugin.setSortConfig(destinationSortConfigs);
     *
     *   // const newData = ... // Calculated data set, ie. from an AJAX call.
     *
     *   this.loadData(newData); // Load new data set and re-render the table.
     *
     *   return false; // The blockade for the default sort action.
     * }```
     *
     * @param {undefined|Object|Array} sortConfig Single column sort configuration or full sort configuration (for all sorted columns).
     * The configuration object contains `column` and `sortOrder` properties. First of them contains visual column index, the second one contains
     * sort order (`asc` for ascending, `desc` for descending).
     */

  }, {
    key: "setSortConfig",
    value: function setSortConfig(sortConfig) {
      var _this6 = this;

      // We always set configs defined as an array.
      var destinationSortConfigs = this.getNormalizedSortConfigs(sortConfig);

      if (this.areValidSortConfigs(destinationSortConfigs)) {
        var translateColumnToPhysical = function translateColumnToPhysical(_ref3) {
          var visualColumn = _ref3.column,
              restOfProperties = _objectWithoutProperties(_ref3, ["column"]);

          return _objectSpread({
            column: _this6.hot.toPhysicalColumn(visualColumn)
          }, restOfProperties);
        };

        var internalSortStates = arrayMap(destinationSortConfigs, function (columnSortConfig) {
          return translateColumnToPhysical(columnSortConfig);
        });
        this.columnStatesManager.setSortStates(internalSortStates);
      }
    }
    /**
     * Get normalized sort configs.
     *
     * @private
     * @param {Object|Array} [sortConfig=[]] Single column sort configuration or full sort configuration (for all sorted columns).
     * The configuration object contains `column` and `sortOrder` properties. First of them contains visual column index, the second one contains
     * sort order (`asc` for ascending, `desc` for descending).
     * @returns {Array}
     */

  }, {
    key: "getNormalizedSortConfigs",
    value: function getNormalizedSortConfigs() {
      var sortConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (Array.isArray(sortConfig)) {
        return sortConfig.slice(0, 1);
      }

      return [sortConfig].slice(0, 1);
    }
    /**
     * Get if sort configs are valid.
     *
     * @private
     * @param {Array} sortConfigs Sort configuration for all sorted columns. Objects contain `column` and `sortOrder` properties.
     * @returns {Boolean}
     */

  }, {
    key: "areValidSortConfigs",
    value: function areValidSortConfigs(sortConfigs) {
      if (Array.isArray(sortConfigs) === false) {
        return false;
      }

      var sortedColumns = sortConfigs.map(function (_ref4) {
        var column = _ref4.column;
        return column;
      });
      var numberOfColumns = this.hot.countCols();
      var onlyExistingVisualIndexes = sortedColumns.every(function (visualColumn) {
        return visualColumn <= numberOfColumns && visualColumn >= 0;
      });
      return areValidSortStates(sortConfigs) && onlyExistingVisualIndexes; // We don't translate visual indexes to physical indexes.
    }
    /**
     * Saves all sorting settings. Saving works only when {@link Options#persistentState} option is enabled.
     *
     * @private
     * @fires Hooks#persistentStateSave
     */

  }, {
    key: "saveAllSortSettings",
    value: function saveAllSortSettings() {
      var allSortSettings = this.columnStatesManager.getAllColumnsProperties();
      allSortSettings.initialConfig = this.columnStatesManager.getSortStates();
      this.hot.runHooks('persistentStateSave', 'columnSorting', allSortSettings);
    }
    /**
     * Get all saved sorting settings. Loading works only when {@link Options#persistentState} option is enabled.
     *
     * @private
     * @returns {Object} Previously saved sort settings.
     *
     * @fires Hooks#persistentStateLoad
     */

  }, {
    key: "getAllSavedSortSettings",
    value: function getAllSavedSortSettings() {
      var _this7 = this;

      var storedAllSortSettings = {};
      this.hot.runHooks('persistentStateLoad', 'columnSorting', storedAllSortSettings);
      var allSortSettings = storedAllSortSettings.value;

      var translateColumnToVisual = function translateColumnToVisual(_ref5) {
        var physicalColumn = _ref5.column,
            restOfProperties = _objectWithoutProperties(_ref5, ["column"]);

        return _objectSpread({
          column: _this7.hot.toVisualColumn(physicalColumn)
        }, restOfProperties);
      };

      if (isDefined(allSortSettings) && Array.isArray(allSortSettings.initialConfig)) {
        allSortSettings.initialConfig = arrayMap(allSortSettings.initialConfig, translateColumnToVisual);
      }

      return allSortSettings;
    }
    /**
     * Get next sort configuration for particular column. Object contain `column` and `sortOrder` properties.
     *
     * **Note**: Please keep in mind that returned object expose **visual** column index under the `column` key.
     *
     * @private
     * @param {Number} column Visual column index.
     * @returns {undefined|Object}
     */

  }, {
    key: "getColumnNextConfig",
    value: function getColumnNextConfig(column) {
      var physicalColumn = this.hot.toPhysicalColumn(column);

      if (this.columnStatesManager.isColumnSorted(physicalColumn)) {
        var columnSortConfig = this.getSortConfig(column);
        var sortOrder = getNextSortOrder(columnSortConfig.sortOrder);

        if (isDefined(sortOrder)) {
          columnSortConfig.sortOrder = sortOrder;
          return columnSortConfig;
        }

        return;
      }

      var nrOfColumns = this.hot.countCols();

      if (Number.isInteger(column) && column >= 0 && column < nrOfColumns) {
        return {
          column: column,
          sortOrder: getNextSortOrder()
        };
      }
    }
    /**
     * Get sort configuration with "next order" for particular column.
     *
     * @private
     * @param {Number} columnToChange Visual column index of column which order will be changed.
     * @param {String} strategyId ID of strategy. Possible values: 'append' and 'replace'. The first one
     * change order of particular column and change it's position in the sort queue to the last one. The second one
     * just change order of particular column.
     *
     * **Note**: Please keep in mind that returned objects expose **visual** column index under the `column` key.
     *
     * @returns {Array}
     */

  }, {
    key: "getNextSortConfig",
    value: function getNextSortConfig(columnToChange) {
      var strategyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APPEND_COLUMN_CONFIG_STRATEGY;
      var physicalColumn = this.hot.toPhysicalColumn(columnToChange);
      var indexOfColumnToChange = this.columnStatesManager.getIndexOfColumnInSortQueue(physicalColumn);
      var isColumnSorted = this.columnStatesManager.isColumnSorted(physicalColumn);
      var currentSortConfig = this.getSortConfig();
      var nextColumnConfig = this.getColumnNextConfig(columnToChange);

      if (isColumnSorted) {
        if (isUndefined(nextColumnConfig)) {
          return [].concat(_toConsumableArray(currentSortConfig.slice(0, indexOfColumnToChange)), _toConsumableArray(currentSortConfig.slice(indexOfColumnToChange + 1)));
        }

        if (strategyId === APPEND_COLUMN_CONFIG_STRATEGY) {
          return [].concat(_toConsumableArray(currentSortConfig.slice(0, indexOfColumnToChange)), _toConsumableArray(currentSortConfig.slice(indexOfColumnToChange + 1)), [nextColumnConfig]);
        } else if (strategyId === REPLACE_COLUMN_CONFIG_STRATEGY) {
          return [].concat(_toConsumableArray(currentSortConfig.slice(0, indexOfColumnToChange)), [nextColumnConfig], _toConsumableArray(currentSortConfig.slice(indexOfColumnToChange + 1)));
        }
      }

      if (isDefined(nextColumnConfig)) {
        return currentSortConfig.concat(nextColumnConfig);
      }

      return currentSortConfig;
    }
    /**
     * Get plugin's column config for the specified column index.
     *
     * @private
     * @param {Object} columnConfig Configuration inside `columns` property for the specified column index.
     * @returns {Object}
     */

  }, {
    key: "getPluginColumnConfig",
    value: function getPluginColumnConfig(columnConfig) {
      if (isObject(columnConfig)) {
        var pluginColumnConfig = columnConfig[this.pluginKey];

        if (isObject(pluginColumnConfig)) {
          return pluginColumnConfig;
        }
      }

      return {};
    }
    /**
     * Get plugin settings related properties, properly merged from cascade settings.
     *
     * @private
     * @param {Number} column Visual column index.
     * @returns {Object}
     */

  }, {
    key: "getMergedPluginSettings",
    value: function getMergedPluginSettings(column) {
      var pluginMainSettings = this.hot.getSettings()[this.pluginKey];
      var storedColumnProperties = this.columnStatesManager.getAllColumnsProperties();
      var cellMeta = this.hot.getCellMeta(0, column);
      var columnMeta = Object.getPrototypeOf(cellMeta);

      if (Array.isArray(columnMeta.columns)) {
        return Object.assign(storedColumnProperties, pluginMainSettings, this.getPluginColumnConfig(columnMeta.columns[column]));
      } else if (isFunction(columnMeta.columns)) {
        return Object.assign(storedColumnProperties, pluginMainSettings, this.getPluginColumnConfig(columnMeta.columns(column)));
      }

      return Object.assign(storedColumnProperties, pluginMainSettings);
    }
    /**
     * Get copy of settings for first cell in the column.
     *
     * @private
     * @param {Number} column Visual column index.
     * @returns {Object}
     */
    // TODO: Workaround. Inheriting of non-primitive cell meta values doesn't work. Instead of getting properties from column meta we call this function.
    // TODO: Remove test named: "should not break the dataset when inserted new row" (#5431).

  }, {
    key: "getFirstCellSettings",
    value: function getFirstCellSettings(column) {
      var cellMeta = this.hot.getCellMeta(0, column);
      var cellMetaCopy = Object.create(cellMeta);
      cellMetaCopy[this.pluginKey] = this.columnMetaCache.getValueAtIndex(this.hot.toPhysicalColumn(column));
      return cellMetaCopy;
    }
    /**
     * Get number of rows which should be sorted.
     *
     * @private
     * @param {Number} numberOfRows Total number of displayed rows.
     * @returns {Number}
     */

  }, {
    key: "getNumberOfRowsToSort",
    value: function getNumberOfRowsToSort(numberOfRows) {
      var settings = this.hot.getSettings(); // `maxRows` option doesn't take into account `minSpareRows` option in this case.

      if (settings.maxRows <= numberOfRows) {
        return settings.maxRows;
      }

      return numberOfRows - settings.minSpareRows;
    }
    /**
     * Performs the sorting using a stable sort function basing on internal state of sorting.
     *
     * @private
     */

  }, {
    key: "sortByPresetSortStates",
    value: function sortByPresetSortStates() {
      var _this8 = this;

      if (this.columnStatesManager.isListOfSortedColumnsEmpty()) {
        this.hot.rowIndexMapper.setIndexesSequence(this.indexesSequenceCache.getValues());
        return;
      }

      var indexesWithData = [];
      var sortedColumnsList = this.columnStatesManager.getSortedColumns();
      var numberOfRows = this.hot.countRows();

      var getDataForSortedColumns = function getDataForSortedColumns(visualRowIndex) {
        return arrayMap(sortedColumnsList, function (physicalColumn) {
          return _this8.hot.getDataAtCell(visualRowIndex, _this8.hot.toVisualColumn(physicalColumn));
        });
      };

      for (var visualRowIndex = 0; visualRowIndex < this.getNumberOfRowsToSort(numberOfRows); visualRowIndex += 1) {
        indexesWithData.push([this.hot.toPhysicalRow(visualRowIndex)].concat(getDataForSortedColumns(visualRowIndex)));
      }

      var indexesBefore = arrayMap(indexesWithData, function (indexWithData) {
        return indexWithData[0];
      });
      sort(indexesWithData, this.pluginKey, arrayMap(sortedColumnsList, function (physicalColumn) {
        return _this8.columnStatesManager.getSortOrderOfColumn(physicalColumn);
      }), arrayMap(sortedColumnsList, function (physicalColumn) {
        return _this8.getFirstCellSettings(_this8.hot.toVisualColumn(physicalColumn));
      })); // Append spareRows

      for (var _visualRowIndex = indexesWithData.length; _visualRowIndex < numberOfRows; _visualRowIndex += 1) {
        indexesWithData.push([_visualRowIndex].concat(getDataForSortedColumns(_visualRowIndex)));
      }

      var indexesAfter = arrayMap(indexesWithData, function (indexWithData) {
        return indexWithData[0];
      });
      var indexMapping = new Map(arrayMap(indexesBefore, function (indexBefore, indexInsideArray) {
        return [indexBefore, indexesAfter[indexInsideArray]];
      }));
      this.hot.rowIndexMapper.setIndexesSequence(arrayMap(this.hot.rowIndexMapper.getIndexesSequence(), function (physicalIndex) {
        if (indexMapping.has(physicalIndex)) {
          return indexMapping.get(physicalIndex);
        }

        return physicalIndex;
      }));
    }
    /**
     * Load saved settings or sort by predefined plugin configuration.
     *
     * @private
     */

  }, {
    key: "loadOrSortBySettings",
    value: function loadOrSortBySettings() {
      var storedAllSortSettings = this.getAllSavedSortSettings();

      if (isObject(storedAllSortSettings)) {
        this.sortBySettings(storedAllSortSettings);
      } else {
        var allSortSettings = this.hot.getSettings()[this.pluginKey];
        this.sortBySettings(allSortSettings);
      }
    }
    /**
     * Sort the table by provided configuration.
     *
     * @private
     * @param {Object} allSortSettings All sort config settings. Object may contain `initialConfig`, `indicator`,
     * `sortEmptyCells`, `headerAction` and `compareFunctionFactory` properties.
     */

  }, {
    key: "sortBySettings",
    value: function sortBySettings(allSortSettings) {
      if (isObject(allSortSettings)) {
        this.columnStatesManager.updateAllColumnsProperties(allSortSettings);
        var initialConfig = allSortSettings.initialConfig;

        if (Array.isArray(initialConfig) || isObject(initialConfig)) {
          this.sort(initialConfig);
        }
      } else {
        // Extra render for headers. Their width may change.
        this.hot.render();
      }
    }
    /**
     * Callback for the `onAfterGetColHeader` hook. Adds column sorting CSS classes.
     *
     * @private
     * @param {Number} column Visual column index.
     * @param {Element} TH TH HTML element.
     */

  }, {
    key: "onAfterGetColHeader",
    value: function onAfterGetColHeader(column, TH) {
      var headerSpanElement = getHeaderSpanElement(TH);

      if (isFirstLevelColumnHeader(column, TH) === false || headerSpanElement === null) {
        return;
      }

      var physicalColumn = this.hot.toPhysicalColumn(column);
      var pluginSettingsForColumn = this.getFirstCellSettings(column)[this.pluginKey];
      var showSortIndicator = pluginSettingsForColumn.indicator;
      var headerActionEnabled = pluginSettingsForColumn.headerAction;
      this.updateHeaderClasses(headerSpanElement, this.columnStatesManager, physicalColumn, showSortIndicator, headerActionEnabled);
    }
    /**
     * Update header classes.
     *
     * @private
     * @param {HTMLElement} headerSpanElement Header span element.
     * @param {...*} args Extra arguments for helpers.
     */

  }, {
    key: "updateHeaderClasses",
    value: function updateHeaderClasses(headerSpanElement) {
      removeClass(headerSpanElement, getClassedToRemove(headerSpanElement));

      if (this.enabled !== false) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        addClass(headerSpanElement, getClassesToAdd.apply(void 0, args));
      }
    }
    /**
     * Overwriting base plugin's `onUpdateSettings` method. Please keep in mind that `onAfterUpdateSettings` isn't called
     * for `updateSettings` in specific situations.
     *
     * @private
     * @param {Object} newSettings New settings object.
     */

  }, {
    key: "onUpdateSettings",
    value: function onUpdateSettings(newSettings) {
      _get(_getPrototypeOf(ColumnSorting.prototype), "onUpdateSettings", this).call(this);

      if (this.columnMetaCache !== null) {
        this.columnMetaCache.init(this.hot.countSourceCols());
      }

      if (isDefined(newSettings[this.pluginKey])) {
        this.sortBySettings(newSettings[this.pluginKey]);
      }
    }
    /**
     * Callback for the `afterLoadData` hook.
     *
     * @private
     * @param {Boolean} initialLoad flag that determines whether the data has been loaded during the initialization.
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData(initialLoad) {
      if (initialLoad === true) {
        // TODO: Workaround? It should be refactored / described.
        if (this.hot.view) {
          this.loadOrSortBySettings();
        }
      }
    }
    /**
     * Indicates if clickable header was clicked.
     *
     * @private
     * @param {MouseEvent} event The `mousedown` event.
     * @param {Number} column Visual column index.
     * @returns {Boolean}
     */

  }, {
    key: "wasClickableHeaderClicked",
    value: function wasClickableHeaderClicked(event, column) {
      var pluginSettingsForColumn = this.getFirstCellSettings(column)[this.pluginKey];
      var headerActionEnabled = pluginSettingsForColumn.headerAction;
      return headerActionEnabled && event.realTarget.nodeName === 'SPAN';
    }
    /**
     * Changes the behavior of selection / dragging.
     *
     * @private
     * @param {MouseEvent} event The `mousedown` event.
     * @param {CellCoords} coords Visual coordinates.
     * @param {HTMLElement} TD
     * @param {Object} blockCalculations
     */

  }, {
    key: "onBeforeOnCellMouseDown",
    value: function onBeforeOnCellMouseDown(event, coords, TD, blockCalculations) {
      if (wasHeaderClickedProperly(coords.row, coords.col, event) === false) {
        return;
      }

      if (this.wasClickableHeaderClicked(event, coords.col) && isPressedCtrlKey()) {
        blockCalculations.column = true;
      }
    }
    /**
     * Callback for the `onAfterOnCellMouseDown` hook.
     *
     * @private
     * @param {Event} event Event which are provided by hook.
     * @param {CellCoords} coords Visual coords of the selected cell.
     */

  }, {
    key: "onAfterOnCellMouseDown",
    value: function onAfterOnCellMouseDown(event, coords) {
      if (wasHeaderClickedProperly(coords.row, coords.col, event) === false) {
        return;
      }

      if (this.wasClickableHeaderClicked(event, coords.col)) {
        if (isPressedCtrlKey()) {
          this.hot.deselectCell();
          this.hot.selectColumns(coords.col);
        }

        this.sort(this.getColumnNextConfig(coords.col));
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.columnStatesManager.destroy();
      this.hot.rowIndexMapper.unregisterMap(this.pluginKey);
      this.hot.columnIndexMapper.unregisterMap("".concat(this.pluginKey, ".columnMeta"));

      _get(_getPrototypeOf(ColumnSorting.prototype), "destroy", this).call(this);
    }
  }]);

  return ColumnSorting;
}(BasePlugin);

registerPlugin(PLUGIN_KEY, ColumnSorting);
export default ColumnSorting;