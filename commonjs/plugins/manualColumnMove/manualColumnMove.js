"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

exports.__esModule = true;
exports.default = void 0;

var _base = _interopRequireDefault(require("./../_base"));

var _pluginHooks = _interopRequireDefault(require("./../../pluginHooks"));

var _array = require("./../../helpers/array");

var _element = require("./../../helpers/dom/element");

var _number = require("./../../helpers/number");

var _eventManager = _interopRequireDefault(require("./../../eventManager"));

var _plugins = require("./../../plugins");

var _backlight = _interopRequireDefault(require("./ui/backlight"));

var _guideline = _interopRequireDefault(require("./ui/guideline"));

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

_pluginHooks.default.getSingleton().register('beforeColumnMove');

_pluginHooks.default.getSingleton().register('afterColumnMove');

var privatePool = new WeakMap();
var CSS_PLUGIN = 'ht__manualColumnMove';
var CSS_SHOW_UI = 'show-ui';
var CSS_ON_MOVING = 'on-moving--columns';
var CSS_AFTER_SELECTION = 'after-selection--columns';
/**
 * @plugin ManualColumnMove
 *
 * @description
 * This plugin allows to change columns order. To make columns order persistent the {@link Options#persistentState}
 * plugin should be enabled.
 *
 * API:
 * - `moveColumn` - move single column to the new position.
 * - `moveColumns` - move many columns (as an array of indexes) to the new position.
 * - `dragColumn` - drag single column to the new position.
 * - `dragColumns` - drag many columns (as an array of indexes) to the new position.
 *
 * [Documentation](/demo-moving.html#manualColumnMove) explain differences between drag and move actions. Please keep in mind that if you want apply visual changes,
 * you have to call manually the `render` method on the instance of Handsontable.
 *
 * The plugin creates additional components to make moving possibly using user interface:
 * - backlight - highlight of selected columns.
 * - guideline - line which shows where columns has been moved.
 *
 * @class ManualColumnMove
 * @plugin ManualColumnMove
 */

var ManualColumnMove =
/*#__PURE__*/
function (_BasePlugin) {
  _inherits(ManualColumnMove, _BasePlugin);

  function ManualColumnMove(hotInstance) {
    var _this;

    _classCallCheck(this, ManualColumnMove);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ManualColumnMove).call(this, hotInstance));
    /**
     * Set up WeakMap of plugin to sharing private parameters;
     */

    privatePool.set(_assertThisInitialized(_this), {
      columnsToMove: [],
      countCols: 0,
      fixedColumns: 0,
      pressed: void 0,
      target: {
        eventPageX: void 0,
        coords: void 0,
        TD: void 0,
        col: void 0
      },
      cachedDropIndex: void 0
    });
    /**
     * Event Manager object.
     *
     * @private
     * @type {Object}
     */

    _this.eventManager = new _eventManager.default(_assertThisInitialized(_this));
    /**
     * Backlight UI object.
     *
     * @private
     * @type {Object}
     */

    _this.backlight = new _backlight.default(hotInstance);
    /**
     * Guideline UI object.
     *
     * @private
     * @type {Object}
     */

    _this.guideline = new _guideline.default(hotInstance);
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link ManualColumnMove#enablePlugin} method is called.
   *
   * @returns {Boolean}
   */


  _createClass(ManualColumnMove, [{
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.hot.getSettings().manualColumnMove;
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

      this.addHook('beforeOnCellMouseDown', function (event, coords, TD, blockCalculations) {
        return _this2.onBeforeOnCellMouseDown(event, coords, TD, blockCalculations);
      });
      this.addHook('beforeOnCellMouseOver', function (event, coords, TD, blockCalculations) {
        return _this2.onBeforeOnCellMouseOver(event, coords, TD, blockCalculations);
      });
      this.addHook('afterScrollVertically', function () {
        return _this2.onAfterScrollVertically();
      });
      this.addHook('afterLoadData', function () {
        return _this2.onAfterLoadData();
      });
      this.buildPluginUI();
      this.registerEvents(); // TODO: move adding plugin classname to BasePlugin.

      (0, _element.addClass)(this.hot.rootElement, CSS_PLUGIN);

      _get(_getPrototypeOf(ManualColumnMove.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      this.disablePlugin();
      this.enablePlugin();
      this.moveBySettingsOrLoad();

      _get(_getPrototypeOf(ManualColumnMove.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      (0, _element.removeClass)(this.hot.rootElement, CSS_PLUGIN);
      this.unregisterEvents();
      this.backlight.destroy();
      this.guideline.destroy();

      _get(_getPrototypeOf(ManualColumnMove.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Moves a single column.
     *
     * @param {Number} column Visual column index to be moved.
     * @param {Number} finalIndex Visual column index, being a start index for the moved columns. Points to where the elements will be placed after the moving action.
     * To check the visualization of the final index, please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @fires Hooks#beforeColumnMove
     * @fires Hooks#afterColumnMove
     * @returns {Boolean}
     */

  }, {
    key: "moveColumn",
    value: function moveColumn(column, finalIndex) {
      return this.moveColumns([column], finalIndex);
    }
    /**
     * Moves a multiple columns.
     *
     * @param {Array} columns Array of visual column indexes to be moved.
     * @param {Number} finalIndex Visual column index, being a start index for the moved columns. Points to where the elements will be placed after the moving action.
     * To check the visualization of the final index, please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @fires Hooks#beforeColumnMove
     * @fires Hooks#afterColumnMove
     * @returns {Boolean}
     */

  }, {
    key: "moveColumns",
    value: function moveColumns(columns, finalIndex) {
      var priv = privatePool.get(this);
      var dropIndex = priv.cachedDropIndex;
      var movePossible = this.isMovePossible(columns, finalIndex);
      var beforeMoveHook = this.hot.runHooks('beforeColumnMove', columns, finalIndex, dropIndex, movePossible);
      priv.cachedDropIndex = void 0;

      if (beforeMoveHook === false) {
        return;
      }

      if (movePossible) {
        this.hot.columnIndexMapper.moveIndexes(columns, finalIndex);
      }

      var movePerformed = movePossible && this.isColumnOrderChanged(columns, finalIndex);
      this.hot.runHooks('afterColumnMove', columns, finalIndex, dropIndex, movePossible, movePerformed);
      return movePerformed;
    }
    /**
     * Drag a single column to drop index position.
     *
     * @param {Number} column Visual column index to be dragged.
     * @param {Number} dropIndex Visual column index, being a drop index for the moved columns. Points to where we are going to drop the moved elements.
     * To check visualization of drop index please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @fires Hooks#beforeColumnMove
     * @fires Hooks#afterColumnMove
     * @returns {Boolean}
     */

  }, {
    key: "dragColumn",
    value: function dragColumn(column, dropIndex) {
      return this.dragColumns([column], dropIndex);
    }
    /**
     * Drag multiple columns to drop index position.
     *
     * @param {Array} columns Array of visual column indexes to be dragged.
     * @param {Number} dropIndex Visual column index, being a drop index for the moved columns. Points to where we are going to drop the moved elements.
     * To check visualization of drop index please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @fires Hooks#beforeColumnMove
     * @fires Hooks#afterColumnMove
     * @returns {Boolean}
     */

  }, {
    key: "dragColumns",
    value: function dragColumns(columns, dropIndex) {
      var finalIndex = this.countFinalIndex(columns, dropIndex);
      var priv = privatePool.get(this);
      priv.cachedDropIndex = dropIndex;
      return this.moveColumns(columns, finalIndex);
    }
    /**
     * Indicates if it's possible to move columns to the desired position. Some of the actions aren't possible, i.e. you can’t move more than one element to the last position.
     *
     * @param {Array} movedColumns Array of visual column indexes to be moved.
     * @param {Number} finalIndex Visual column index, being a start index for the moved columns. Points to where the elements will be placed after the moving action.
     * To check the visualization of the final index, please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @returns {Boolean}
     */

  }, {
    key: "isMovePossible",
    value: function isMovePossible(movedColumns, finalIndex) {
      var length = this.hot.columnIndexMapper.getNotSkippedIndexesLength(); // An attempt to transfer more columns to start destination than is possible (only when moving from the top to the bottom).

      var tooHighDestinationIndex = movedColumns.length + finalIndex > length;
      var tooLowDestinationIndex = finalIndex < 0;
      var tooLowMovedColumnIndex = movedColumns.some(function (movedColumn) {
        return movedColumn < 0;
      });
      var tooHighMovedColumnIndex = movedColumns.some(function (movedColumn) {
        return movedColumn >= length;
      });

      if (tooHighDestinationIndex || tooLowDestinationIndex || tooLowMovedColumnIndex || tooHighMovedColumnIndex) {
        return false;
      }

      return true;
    }
    /**
     * Indicates if order of columns was changed.
     *
     * @private
     * @param {Array} movedColumns Array of visual column indexes to be moved.
     * @param {Number} finalIndex Visual column index, being a start index for the moved columns. Points to where the elements will be placed after the moving action.
     * To check the visualization of the final index, please take a look at [documentation](/demo-moving.html#manualColumnMove).
     * @returns {Boolean}
     */

  }, {
    key: "isColumnOrderChanged",
    value: function isColumnOrderChanged(movedColumns, finalIndex) {
      return movedColumns.some(function (column, nrOfMovedElement) {
        return column - nrOfMovedElement !== finalIndex;
      });
    }
    /**
     * Count the final column index from the drop index.
     *
     * @private
     * @param {Array} movedColumns Array of visual column indexes to be moved.
     * @param {Number} dropIndex Visual column index, being a drop index for the moved columns.
     * @returns {Number} Visual column index, being a start index for the moved columns.
     */

  }, {
    key: "countFinalIndex",
    value: function countFinalIndex(movedColumns, dropIndex) {
      var numberOfColumnsLowerThanDropIndex = (0, _array.arrayReduce)(movedColumns, function (numberOfColumns, currentColumnIndex) {
        if (currentColumnIndex < dropIndex) {
          numberOfColumns += 1;
        }

        return numberOfColumns;
      }, 0);
      return dropIndex - numberOfColumnsLowerThanDropIndex;
    }
    /**
     * Correct the cell selection after the move action. Fired only when action was made with a mouse.
     * That means that changing the column order using the API won't correct the selection.
     *
     * @private
     * @param {Number} startColumn Visual column index for the start of the selection.
     * @param {Number} endColumn Visual column index for the end of the selection.
     */

  }, {
    key: "changeSelection",
    value: function changeSelection(startColumn, endColumn) {
      this.hot.selectColumns(startColumn, endColumn);
    }
    /**
     * Gets the sum of the heights of columns in the provided range.
     *
     * @private
     * @param {Number} from Visual column index.
     * @param {Number} to Visual column index.
     * @returns {Number}
     */

  }, {
    key: "getColumnsWidth",
    value: function getColumnsWidth(from, to) {
      var width = 0;

      for (var i = from; i < to; i++) {
        var columnWidth = 0;

        if (i < 0) {
          columnWidth = this.hot.view.wt.wtViewport.getRowHeaderWidth() || 0;
        } else {
          columnWidth = this.hot.view.wt.wtTable.getStretchedColumnWidth(i) || 0;
        }

        width += columnWidth;
      }

      return width;
    }
    /**
     * Loads initial settings when persistent state is saved or when plugin was initialized as an array.
     *
     * @private
     */

  }, {
    key: "moveBySettingsOrLoad",
    value: function moveBySettingsOrLoad() {
      var pluginSettings = this.hot.getSettings().manualColumnMove;

      if (Array.isArray(pluginSettings)) {
        this.moveColumns(pluginSettings, 0);
      } else if (pluginSettings !== void 0) {
        var persistentState = this.persistentStateLoad();

        if (persistentState.length) {
          this.moveColumns(persistentState, 0);
        }
      }
    }
    /**
     * Checks if the provided column is in the fixedColumnsTop section.
     *
     * @private
     * @param {Number} column Visual column index to check.
     * @returns {Boolean}
     */

  }, {
    key: "isFixedColumnsLeft",
    value: function isFixedColumnsLeft(column) {
      return column < this.hot.getSettings().fixedColumnsLeft;
    }
    /**
     * Saves the manual column positions to the persistent state (the {@link Options#persistentState} option has to be enabled).
     *
     * @private
     * @fires Hooks#persistentStateSave
     */

  }, {
    key: "persistentStateSave",
    value: function persistentStateSave() {
      this.hot.runHooks('persistentStateSave', 'manualColumnMove', this.hot.columnIndexMapper.getIndexesSequence()); // The `PersistentState` plugin should be refactored.
    }
    /**
     * Loads the manual column positions from the persistent state (the {@link Options#persistentState} option has to be enabled).
     *
     * @private
     * @fires Hooks#persistentStateLoad
     * @returns {Array} Stored state.
     */

  }, {
    key: "persistentStateLoad",
    value: function persistentStateLoad() {
      var storedState = {};
      this.hot.runHooks('persistentStateLoad', 'manualColumnMove', storedState);
      return storedState.value ? storedState.value : [];
    }
    /**
     * Prepares an array of indexes based on actual selection.
     *
     * @private
     * @returns {Array}
     */

  }, {
    key: "prepareColumnsToMoving",
    value: function prepareColumnsToMoving(start, end) {
      var selectedColumns = [];
      (0, _number.rangeEach)(start, end, function (i) {
        selectedColumns.push(i);
      });
      return selectedColumns;
    }
    /**
     * Update the UI visual position.
     *
     * @private
     */

  }, {
    key: "refreshPositions",
    value: function refreshPositions() {
      var priv = privatePool.get(this);
      var firstVisible = this.hot.view.wt.wtTable.getFirstVisibleColumn();
      var lastVisible = this.hot.view.wt.wtTable.getLastVisibleColumn();
      var wtTable = this.hot.view.wt.wtTable;
      var scrollableElement = this.hot.view.wt.wtOverlays.scrollableElement;
      var scrollLeft = typeof scrollableElement.scrollX === 'number' ? scrollableElement.scrollX : scrollableElement.scrollLeft;
      var tdOffsetLeft = this.hot.view.THEAD.offsetLeft + this.getColumnsWidth(0, priv.coords);
      var mouseOffsetLeft = priv.target.eventPageX - (priv.rootElementOffset - (scrollableElement.scrollX === void 0 ? scrollLeft : 0));
      var hiderWidth = wtTable.hider.offsetWidth;
      var tbodyOffsetLeft = wtTable.TBODY.offsetLeft;
      var backlightElemMarginLeft = this.backlight.getOffset().left;
      var backlightElemWidth = this.backlight.getSize().width;
      var rowHeaderWidth = 0;

      if (priv.rootElementOffset + wtTable.holder.offsetWidth + scrollLeft < priv.target.eventPageX) {
        if (priv.coords < priv.countCols) {
          priv.coords += 1;
        }
      }

      if (priv.hasRowHeaders) {
        rowHeaderWidth = this.hot.view.wt.wtOverlays.leftOverlay.clone.wtTable.getColumnHeader(-1).offsetWidth;
      }

      if (this.isFixedColumnsLeft(priv.coords)) {
        tdOffsetLeft += scrollLeft;
      }

      tdOffsetLeft += rowHeaderWidth;

      if (priv.coords < 0) {
        // if hover on rowHeader
        if (priv.fixedColumns > 0) {
          priv.target.col = 0;
        } else {
          priv.target.col = firstVisible > 0 ? firstVisible - 1 : firstVisible;
        }
      } else if (priv.target.TD.offsetWidth / 2 + tdOffsetLeft <= mouseOffsetLeft) {
        var newCoordsCol = priv.coords >= priv.countCols ? priv.countCols - 1 : priv.coords; // if hover on right part of TD

        priv.target.col = newCoordsCol + 1; // unfortunately first column is bigger than rest

        tdOffsetLeft += priv.target.TD.offsetWidth;

        if (priv.target.col > lastVisible && lastVisible < priv.countCols) {
          this.hot.scrollViewportTo(void 0, lastVisible + 1, void 0, true);
        }
      } else {
        // elsewhere on table
        priv.target.col = priv.coords;

        if (priv.target.col <= firstVisible && priv.target.col >= priv.fixedColumns && firstVisible > 0) {
          this.hot.scrollViewportTo(void 0, firstVisible - 1);
        }
      }

      if (priv.target.col <= firstVisible && priv.target.col >= priv.fixedColumns && firstVisible > 0) {
        this.hot.scrollViewportTo(void 0, firstVisible - 1);
      }

      var backlightLeft = mouseOffsetLeft;
      var guidelineLeft = tdOffsetLeft;

      if (mouseOffsetLeft + backlightElemWidth + backlightElemMarginLeft >= hiderWidth) {
        // prevent display backlight on the right side of the table
        backlightLeft = hiderWidth - backlightElemWidth - backlightElemMarginLeft;
      } else if (mouseOffsetLeft + backlightElemMarginLeft < tbodyOffsetLeft + rowHeaderWidth) {
        // prevent display backlight on the left side of the table
        backlightLeft = tbodyOffsetLeft + rowHeaderWidth + Math.abs(backlightElemMarginLeft);
      }

      if (tdOffsetLeft >= hiderWidth - 1) {
        // prevent display guideline outside the table
        guidelineLeft = hiderWidth - 1;
      } else if (guidelineLeft === 0) {
        // guideline has got `margin-left: -1px` as default
        guidelineLeft = 1;
      } else if (scrollableElement.scrollX !== void 0 && priv.coords < priv.fixedColumns) {
        guidelineLeft -= priv.rootElementOffset <= scrollableElement.scrollX ? priv.rootElementOffset : 0;
      }

      this.backlight.setPosition(null, backlightLeft);
      this.guideline.setPosition(null, guidelineLeft);
    }
    /**
     * Binds the events used by the plugin.
     *
     * @private
     */

  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this3 = this;

      var documentElement = this.hot.rootDocument.documentElement;
      this.eventManager.addEventListener(documentElement, 'mousemove', function (event) {
        return _this3.onMouseMove(event);
      });
      this.eventManager.addEventListener(documentElement, 'mouseup', function () {
        return _this3.onMouseUp();
      });
    }
    /**
     * Unbinds the events used by the plugin.
     *
     * @private
     */

  }, {
    key: "unregisterEvents",
    value: function unregisterEvents() {
      this.eventManager.clear();
    }
    /**
     * Change the behavior of selection / dragging.
     *
     * @private
     * @param {MouseEvent} event `mousedown` event properties.
     * @param {CellCoords} coords Visual cell coordinates where was fired event.
     * @param {HTMLElement} TD Cell represented as HTMLElement.
     * @param {Object} blockCalculations Object which contains information about blockCalculation for row, column or cells.
     */

  }, {
    key: "onBeforeOnCellMouseDown",
    value: function onBeforeOnCellMouseDown(event, coords, TD, blockCalculations) {
      var wtTable = this.hot.view.wt.wtTable;
      var isHeaderSelection = this.hot.selection.isSelectedByColumnHeader();
      var selection = this.hot.getSelectedRangeLast();
      var priv = privatePool.get(this); // This block action shouldn't be handled below.

      var isSortingElement = (0, _element.hasClass)(event.realTarget, 'sortAction');

      if (!selection || !isHeaderSelection || priv.pressed || event.button !== 0 || isSortingElement) {
        priv.pressed = false;
        priv.columnsToMove.length = 0;
        (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI]);
        return;
      }

      var guidelineIsNotReady = this.guideline.isBuilt() && !this.guideline.isAppended();
      var backlightIsNotReady = this.backlight.isBuilt() && !this.backlight.isAppended();

      if (guidelineIsNotReady && backlightIsNotReady) {
        this.guideline.appendTo(wtTable.hider);
        this.backlight.appendTo(wtTable.hider);
      }

      var from = selection.from,
          to = selection.to;
      var start = Math.min(from.col, to.col);
      var end = Math.max(from.col, to.col);

      if (coords.row < 0 && coords.col >= start && coords.col <= end) {
        blockCalculations.column = true;
        priv.pressed = true;
        priv.target.eventPageX = event.pageX;
        priv.coords = coords.col;
        priv.target.TD = TD;
        priv.target.col = coords.col;
        priv.columnsToMove = this.prepareColumnsToMoving(start, end);
        priv.hasRowHeaders = !!this.hot.getSettings().rowHeaders;
        priv.countCols = this.hot.countCols();
        priv.fixedColumns = this.hot.getSettings().fixedColumnsLeft;
        priv.rootElementOffset = (0, _element.offset)(this.hot.rootElement).left;
        var countColumnsFrom = priv.hasRowHeaders ? -1 : 0;
        var topPos = wtTable.holder.scrollTop + wtTable.getColumnHeaderHeight(0) + 1;
        var fixedColumns = coords.col < priv.fixedColumns;
        var scrollableElement = this.hot.view.wt.wtOverlays.scrollableElement;
        var wrapperIsWindow = scrollableElement.scrollX ? scrollableElement.scrollX - priv.rootElementOffset : 0;
        var mouseOffset = event.layerX - (fixedColumns ? wrapperIsWindow : 0);
        var leftOffset = Math.abs(this.getColumnsWidth(start, coords.col) + mouseOffset);
        this.backlight.setPosition(topPos, this.getColumnsWidth(countColumnsFrom, start) + leftOffset);
        this.backlight.setSize(this.getColumnsWidth(start, end + 1), wtTable.hider.offsetHeight - topPos);
        this.backlight.setOffset(null, leftOffset * -1);
        (0, _element.addClass)(this.hot.rootElement, CSS_ON_MOVING);
      } else {
        (0, _element.removeClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
        priv.pressed = false;
        priv.columnsToMove.length = 0;
      }
    }
    /**
     * 'mouseMove' event callback. Fired when pointer move on document.documentElement.
     *
     * @private
     * @param {MouseEvent} event `mousemove` event properties.
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var priv = privatePool.get(this);

      if (!priv.pressed) {
        return;
      } // callback for browser which doesn't supports CSS pointer-event: none


      if (event.realTarget === this.backlight.element) {
        var width = this.backlight.getSize().width;
        this.backlight.setSize(0);
        setTimeout(function () {
          this.backlight.setPosition(width);
        });
      }

      priv.target.eventPageX = event.pageX;
      this.refreshPositions();
    }
    /**
     * 'beforeOnCellMouseOver' hook callback. Fired when pointer was over cell.
     *
     * @private
     * @param {MouseEvent} event `mouseover` event properties.
     * @param {CellCoords} coords Visual cell coordinates where was fired event.
     * @param {HTMLElement} TD Cell represented as HTMLElement.
     * @param {Object} blockCalculations Object which contains information about blockCalculation for column, column or cells.
     */

  }, {
    key: "onBeforeOnCellMouseOver",
    value: function onBeforeOnCellMouseOver(event, coords, TD, blockCalculations) {
      var selectedRange = this.hot.getSelectedRangeLast();
      var priv = privatePool.get(this);

      if (!selectedRange || !priv.pressed) {
        return;
      }

      if (priv.columnsToMove.indexOf(coords.col) > -1) {
        (0, _element.removeClass)(this.hot.rootElement, CSS_SHOW_UI);
      } else {
        (0, _element.addClass)(this.hot.rootElement, CSS_SHOW_UI);
      }

      blockCalculations.row = true;
      blockCalculations.column = true;
      blockCalculations.cell = true;
      priv.coords = coords.col;
      priv.target.TD = TD;
    }
    /**
     * `onMouseUp` hook callback.
     *
     * @private
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var priv = privatePool.get(this);
      var target = priv.target.col;
      var columnsLen = priv.columnsToMove.length;
      priv.coords = void 0;
      priv.pressed = false;
      priv.backlightWidth = 0;
      (0, _element.removeClass)(this.hot.rootElement, [CSS_ON_MOVING, CSS_SHOW_UI, CSS_AFTER_SELECTION]);

      if (this.hot.selection.isSelectedByColumnHeader()) {
        (0, _element.addClass)(this.hot.rootElement, CSS_AFTER_SELECTION);
      }

      if (columnsLen < 1 || target === void 0) {
        return;
      }

      var firstMovedVisualColumn = priv.columnsToMove[0];
      var firstMovedPhysicalColumn = this.hot.toPhysicalColumn(firstMovedVisualColumn);
      var movePerformed = this.dragColumns(priv.columnsToMove, target);
      priv.columnsToMove.length = 0;

      if (movePerformed === true) {
        this.persistentStateSave();
        this.hot.render();
        this.hot.view.wt.wtOverlays.adjustElementsSize(true);
        var selectionStart = this.hot.toVisualColumn(firstMovedPhysicalColumn);
        var selectionEnd = selectionStart + columnsLen - 1;
        this.hot.selectColumns(selectionStart, selectionEnd);
      }
    }
    /**
     * `afterScrollHorizontally` hook callback. Fired the table was scrolled horizontally.
     *
     * @private
     */

  }, {
    key: "onAfterScrollVertically",
    value: function onAfterScrollVertically() {
      var wtTable = this.hot.view.wt.wtTable;
      var headerHeight = wtTable.getColumnHeaderHeight(0) + 1;
      var scrollTop = wtTable.holder.scrollTop;
      var posTop = headerHeight + scrollTop;
      this.backlight.setPosition(posTop);
      this.backlight.setSize(null, wtTable.hider.offsetHeight - posTop);
    }
    /**
     * Builds the plugin's UI.
     *
     * @private
     */

  }, {
    key: "buildPluginUI",
    value: function buildPluginUI() {
      this.backlight.build();
      this.guideline.build();
    }
    /**
     * Callback for the `afterLoadData` hook.
     *
     * @private
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData() {
      this.moveBySettingsOrLoad();
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.backlight.destroy();
      this.guideline.destroy();

      _get(_getPrototypeOf(ManualColumnMove.prototype), "destroy", this).call(this);
    }
  }]);

  return ManualColumnMove;
}(_base.default);

(0, _plugins.registerPlugin)('ManualColumnMove', ManualColumnMove);
var _default = ManualColumnMove;
exports.default = _default;