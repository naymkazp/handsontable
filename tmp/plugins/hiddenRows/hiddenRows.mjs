function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.set.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.number.is-integer.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.string.split.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.array.splice.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.reflect.get.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

import { BasePlugin } from "../base/index.mjs";
import { addClass } from "../../helpers/dom/element.mjs";
import { rangeEach } from "../../helpers/number.mjs";
import { arrayEach, arrayMap, arrayReduce } from "../../helpers/array.mjs";
import { isObject } from "../../helpers/object.mjs";
import { isUndefined } from "../../helpers/mixed.mjs";
import { SEPARATOR } from "../contextMenu/predefinedItems.mjs";
import Hooks from "../../pluginHooks.mjs";
import hideRowItem from "./contextMenuItem/hideRow.mjs";
import showRowItem from "./contextMenuItem/showRow.mjs";
import { HidingMap } from "../../translations/index.mjs";
Hooks.getSingleton().register('beforeHideRows');
Hooks.getSingleton().register('afterHideRows');
Hooks.getSingleton().register('beforeUnhideRows');
Hooks.getSingleton().register('afterUnhideRows');
export var PLUGIN_KEY = 'hiddenRows';
export var PLUGIN_PRIORITY = 320;
/**
 * @plugin HiddenRows
 *
 * @description
 * Plugin allows to hide certain rows. The hiding is achieved by rendering the rows with height set as 0px.
 * The plugin not modifies the source data and do not participate in data transformation (the shape of data returned
 * by `getData*` methods stays intact).
 *
 * Possible plugin settings:
 *  * `copyPasteEnabled` as `Boolean` (default `true`)
 *  * `rows` as `Array`
 *  * `indicators` as `Boolean` (default `false`).
 *
 * @example
 *
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: getData(),
 *   hiddenRows: {
 *     copyPasteEnabled: true,
 *     indicators: true,
 *     rows: [1, 2, 5]
 *   }
 * });
 *
 * // access to hiddenRows plugin instance
 * const hiddenRowsPlugin = hot.getPlugin('hiddenRows');
 *
 * // show single row
 * hiddenRowsPlugin.showRow(1);
 *
 * // show multiple rows
 * hiddenRowsPlugin.showRow(1, 2, 9);
 *
 * // or as an array
 * hiddenRowsPlugin.showRows([1, 2, 9]);
 *
 * // hide single row
 * hiddenRowsPlugin.hideRow(1);
 *
 * // hide multiple rows
 * hiddenRowsPlugin.hideRow(1, 2, 9);
 *
 * // or as an array
 * hiddenRowsPlugin.hideRows([1, 2, 9]);
 *
 * // rerender the table to see all changes
 * hot.render();
 * ```
 */

var _settings = new WeakMap();

var _hiddenRowsMap = new WeakMap();

export var HiddenRows = /*#__PURE__*/function (_BasePlugin) {
  _inherits(HiddenRows, _BasePlugin);

  var _super = _createSuper(HiddenRows);

  function HiddenRows() {
    var _this;

    _classCallCheck(this, HiddenRows);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _settings.set(_assertThisInitialized(_this), {
      writable: true,
      value: {}
    });

    _hiddenRowsMap.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    return _this;
  }

  _createClass(HiddenRows, [{
    key: "isEnabled",
    value:
    /**
     * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
     * hook and if it returns `true` than the {@link HiddenRows#enablePlugin} method is called.
     *
     * @returns {boolean}
     */
    function isEnabled() {
      return !!this.hot.getSettings()[PLUGIN_KEY];
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

      var pluginSettings = this.hot.getSettings()[PLUGIN_KEY];

      if (isObject(pluginSettings)) {
        _classPrivateFieldSet(this, _settings, pluginSettings);

        if (isUndefined(pluginSettings.copyPasteEnabled)) {
          pluginSettings.copyPasteEnabled = true;
        }
      }

      _classPrivateFieldSet(this, _hiddenRowsMap, new HidingMap());

      _classPrivateFieldGet(this, _hiddenRowsMap).addLocalHook('init', function () {
        return _this2.onMapInit();
      });

      this.hot.rowIndexMapper.registerMap(this.pluginName, _classPrivateFieldGet(this, _hiddenRowsMap));
      this.addHook('afterContextMenuDefaultOptions', function () {
        return _this2.onAfterContextMenuDefaultOptions.apply(_this2, arguments);
      });
      this.addHook('afterGetCellMeta', function (row, col, cellProperties) {
        return _this2.onAfterGetCellMeta(row, col, cellProperties);
      });
      this.addHook('modifyRowHeight', function (height, row) {
        return _this2.onModifyRowHeight(height, row);
      });
      this.addHook('afterGetRowHeader', function () {
        return _this2.onAfterGetRowHeader.apply(_this2, arguments);
      });
      this.addHook('modifyCopyableRange', function (ranges) {
        return _this2.onModifyCopyableRange(ranges);
      });

      _get(_getPrototypeOf(HiddenRows.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      this.disablePlugin();
      this.enablePlugin();

      _get(_getPrototypeOf(HiddenRows.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      this.hot.rowIndexMapper.unregisterMap(this.pluginName);

      _classPrivateFieldSet(this, _settings, {});

      _get(_getPrototypeOf(HiddenRows.prototype), "disablePlugin", this).call(this);

      this.resetCellsMeta();
    }
    /**
     * Shows the rows provided in the array.
     *
     * @param {number[]} rows Array of visual row indexes.
     */

  }, {
    key: "showRows",
    value: function showRows(rows) {
      var _this3 = this;

      var currentHideConfig = this.getHiddenRows();
      var isValidConfig = this.isValidConfig(rows);
      var destinationHideConfig = currentHideConfig;

      var hidingMapValues = _classPrivateFieldGet(this, _hiddenRowsMap).getValues().slice();

      var isAnyRowShowed = rows.length > 0;

      if (isValidConfig && isAnyRowShowed) {
        var physicalRows = rows.map(function (visualRow) {
          return _this3.hot.toPhysicalRow(visualRow);
        }); // Preparing new values for hiding map.

        arrayEach(physicalRows, function (physicalRow) {
          hidingMapValues[physicalRow] = false;
        }); // Preparing new hiding config.

        destinationHideConfig = arrayReduce(hidingMapValues, function (hiddenIndexes, isHidden, physicalIndex) {
          if (isHidden) {
            hiddenIndexes.push(_this3.hot.toVisualRow(physicalIndex));
          }

          return hiddenIndexes;
        }, []);
      }

      var continueHiding = this.hot.runHooks('beforeUnhideRows', currentHideConfig, destinationHideConfig, isValidConfig && isAnyRowShowed);

      if (continueHiding === false) {
        return;
      }

      if (isValidConfig && isAnyRowShowed) {
        _classPrivateFieldGet(this, _hiddenRowsMap).setValues(hidingMapValues);
      }

      this.hot.runHooks('afterUnhideRows', currentHideConfig, destinationHideConfig, isValidConfig && isAnyRowShowed, isValidConfig && destinationHideConfig.length < currentHideConfig.length);
    }
    /**
     * Shows the row provided as row index (counting from 0).
     *
     * @param {...number} row Visual row index.
     */

  }, {
    key: "showRow",
    value: function showRow() {
      for (var _len2 = arguments.length, row = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        row[_key2] = arguments[_key2];
      }

      this.showRows(row);
    }
    /**
     * Hides the rows provided in the array.
     *
     * @param {number[]} rows Array of visual row indexes.
     */

  }, {
    key: "hideRows",
    value: function hideRows(rows) {
      var _this4 = this;

      var currentHideConfig = this.getHiddenRows();
      var isConfigValid = this.isValidConfig(rows);
      var destinationHideConfig = currentHideConfig;

      if (isConfigValid) {
        destinationHideConfig = Array.from(new Set(currentHideConfig.concat(rows)));
      }

      var continueHiding = this.hot.runHooks('beforeHideRows', currentHideConfig, destinationHideConfig, isConfigValid);

      if (continueHiding === false) {
        return;
      }

      if (isConfigValid) {
        this.hot.batchExecution(function () {
          arrayEach(rows, function (visualRow) {
            _classPrivateFieldGet(_this4, _hiddenRowsMap).setValueAtIndex(_this4.hot.toPhysicalRow(visualRow), true);
          });
        }, true);
      }

      this.hot.runHooks('afterHideRows', currentHideConfig, destinationHideConfig, isConfigValid, isConfigValid && destinationHideConfig.length > currentHideConfig.length);
    }
    /**
     * Hides the row provided as row index (counting from 0).
     *
     * @param {...number} row Visual row index.
     */

  }, {
    key: "hideRow",
    value: function hideRow() {
      for (var _len3 = arguments.length, row = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        row[_key3] = arguments[_key3];
      }

      this.hideRows(row);
    }
    /**
     * Returns an array of visual indexes of hidden rows.
     *
     * @returns {number[]}
     */

  }, {
    key: "getHiddenRows",
    value: function getHiddenRows() {
      var _this5 = this;

      return arrayMap(_classPrivateFieldGet(this, _hiddenRowsMap).getHiddenIndexes(), function (physicalRowIndex) {
        return _this5.hot.toVisualRow(physicalRowIndex);
      });
    }
    /**
     * Checks if the provided row is hidden.
     *
     * @param {number} row Visual row index.
     * @returns {boolean}
     */

  }, {
    key: "isHidden",
    value: function isHidden(row) {
      return _classPrivateFieldGet(this, _hiddenRowsMap).getValueAtIndex(this.hot.toPhysicalRow(row)) || false;
    }
    /**
     * Checks whether all of the provided row indexes are within the bounds of the table.
     *
     * @param {Array} hiddenRows List of hidden visual row indexes.
     * @returns {boolean}
     */

  }, {
    key: "isValidConfig",
    value: function isValidConfig(hiddenRows) {
      var nrOfRows = this.hot.countRows();

      if (Array.isArray(hiddenRows) && hiddenRows.length > 0) {
        return hiddenRows.every(function (visualRow) {
          return Number.isInteger(visualRow) && visualRow >= 0 && visualRow < nrOfRows;
        });
      }

      return false;
    }
    /**
     * Resets all rendered cells meta.
     *
     * @private
     */

  }, {
    key: "resetCellsMeta",
    value: function resetCellsMeta() {
      arrayEach(this.hot.getCellsMeta(), function (meta) {
        if (meta) {
          meta.skipRowOnPaste = false;
        }
      });
    }
    /**
     * Adds the additional row height for the hidden row indicators.
     *
     * @private
     * @param {number|undefined} height Row height.
     * @param {number} row Visual row index.
     * @returns {number}
     */

  }, {
    key: "onModifyRowHeight",
    value: function onModifyRowHeight(height, row) {
      // Hook is triggered internally only for the visible rows. Conditional will be handled for the API
      // calls of the `getRowHeight` function on not visible indexes.
      if (this.isHidden(row)) {
        return 0;
      }

      return height;
    }
    /**
     * Sets the copy-related cell meta.
     *
     * @private
     * @param {number} row Visual row index.
     * @param {number} column Visual column index.
     * @param {object} cellProperties Object containing the cell properties.
     */

  }, {
    key: "onAfterGetCellMeta",
    value: function onAfterGetCellMeta(row, column, cellProperties) {
      if (_classPrivateFieldGet(this, _settings).copyPasteEnabled === false && this.isHidden(row)) {
        // Cell property handled by the `Autofill` and the `CopyPaste` plugins.
        cellProperties.skipRowOnPaste = true;
      }

      if (this.isHidden(row - 1)) {
        cellProperties.className = cellProperties.className || '';

        if (cellProperties.className.indexOf('afterHiddenRow') === -1) {
          cellProperties.className += ' afterHiddenRow';
        }
      } else if (cellProperties.className) {
        var classArr = cellProperties.className.split(' ');

        if (classArr.length > 0) {
          var containAfterHiddenRow = classArr.indexOf('afterHiddenRow');

          if (containAfterHiddenRow > -1) {
            classArr.splice(containAfterHiddenRow, 1);
          }

          cellProperties.className = classArr.join(' ');
        }
      }
    }
    /**
     * Modifies the copyable range, accordingly to the provided config.
     *
     * @private
     * @param {Array} ranges An array of objects defining copyable cells.
     * @returns {Array}
     */

  }, {
    key: "onModifyCopyableRange",
    value: function onModifyCopyableRange(ranges) {
      var _this6 = this;

      // Ranges shouldn't be modified when `copyPasteEnabled` option is set to `true` (by default).
      if (_classPrivateFieldGet(this, _settings).copyPasteEnabled) {
        return ranges;
      }

      var newRanges = [];

      var pushRange = function pushRange(startRow, endRow, startCol, endCol) {
        newRanges.push({
          startRow: startRow,
          endRow: endRow,
          startCol: startCol,
          endCol: endCol
        });
      };

      arrayEach(ranges, function (range) {
        var isHidden = true;
        var rangeStart = 0;
        rangeEach(range.startRow, range.endRow, function (visualRow) {
          if (_this6.isHidden(visualRow)) {
            if (!isHidden) {
              pushRange(rangeStart, visualRow - 1, range.startCol, range.endCol);
            }

            isHidden = true;
          } else {
            if (isHidden) {
              rangeStart = visualRow;
            }

            if (visualRow === range.endRow) {
              pushRange(rangeStart, visualRow, range.startCol, range.endCol);
            }

            isHidden = false;
          }
        });
      });
      return newRanges;
    }
    /**
     * Adds the needed classes to the headers.
     *
     * @private
     * @param {number} row Visual row index.
     * @param {HTMLElement} TH Header's TH element.
     */

  }, {
    key: "onAfterGetRowHeader",
    value: function onAfterGetRowHeader(row, TH) {
      if (!_classPrivateFieldGet(this, _settings).indicators || row < 0) {
        return;
      }

      var classList = [];

      if (row >= 1 && this.isHidden(row - 1)) {
        classList.push('afterHiddenRow');
      }

      if (row < this.hot.countRows() - 1 && this.isHidden(row + 1)) {
        classList.push('beforeHiddenRow');
      }

      addClass(TH, classList);
    }
    /**
     * Add Show-hide rows to context menu.
     *
     * @private
     * @param {object} options An array of objects containing information about the pre-defined Context Menu items.
     */

  }, {
    key: "onAfterContextMenuDefaultOptions",
    value: function onAfterContextMenuDefaultOptions(options) {
      options.items.push({
        name: SEPARATOR
      }, hideRowItem(this), showRowItem(this));
    }
    /**
     * On map initialized hook callback.
     *
     * @private
     */

  }, {
    key: "onMapInit",
    value: function onMapInit() {
      if (Array.isArray(_classPrivateFieldGet(this, _settings).rows)) {
        this.hideRows(_classPrivateFieldGet(this, _settings).rows);
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot.rowIndexMapper.unregisterMap(this.pluginName);

      _classPrivateFieldSet(this, _settings, null);

      _classPrivateFieldSet(this, _hiddenRowsMap, null);

      _get(_getPrototypeOf(HiddenRows.prototype), "destroy", this).call(this);
    }
  }], [{
    key: "PLUGIN_KEY",
    get: function get() {
      return PLUGIN_KEY;
    }
  }, {
    key: "PLUGIN_PRIORITY",
    get: function get() {
      return PLUGIN_PRIORITY;
    }
    /**
     * Cached settings from Handsontable settings.
     *
     * @private
     * @type {object}
     */

  }]);

  return HiddenRows;
}(BasePlugin);