import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.some";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.weak-map";
import "core-js/modules/web.dom-collections.iterator";

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

import BasePlugin from './../_base';
import { registerPlugin } from './../../plugins';
import freezeColumnItem from './contextMenuItem/freezeColumn';
import unfreezeColumnItem from './contextMenuItem/unfreezeColumn';
var privatePool = new WeakMap();
/**
 * This plugin allows to manually "freeze" and "unfreeze" a column using an entry in the Context Menu or using API.
 * You can turn it on by setting a {@link Options#manualColumnFreeze} property to `true`.
 *
 * @example
 * ```js
 * // Enables the plugin
 * manualColumnFreeze: true,
 * ```
 *
 * @plugin ManualColumnFreeze
 */

var ManualColumnFreeze =
/*#__PURE__*/
function (_BasePlugin) {
  _inherits(ManualColumnFreeze, _BasePlugin);

  function ManualColumnFreeze(hotInstance) {
    var _this;

    _classCallCheck(this, ManualColumnFreeze);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ManualColumnFreeze).call(this, hotInstance));
    privatePool.set(_assertThisInitialized(_this), {
      afterFirstUse: false
    });
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link ManualColumnFreeze#enablePlugin} method is called.
   *
   * @returns {Boolean}
   */


  _createClass(ManualColumnFreeze, [{
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.hot.getSettings().manualColumnFreeze;
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

      this.addHook('afterContextMenuDefaultOptions', function (options) {
        return _this2.addContextMenuEntry(options);
      });
      this.addHook('beforeColumnMove', function (columns, finalIndex) {
        return _this2.onBeforeColumnMove(columns, finalIndex);
      });

      _get(_getPrototypeOf(ManualColumnFreeze.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      var priv = privatePool.get(this);
      priv.afterFirstUse = false;

      _get(_getPrototypeOf(ManualColumnFreeze.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      this.disablePlugin();
      this.enablePlugin();

      _get(_getPrototypeOf(ManualColumnFreeze.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Freezes the given column (add it to fixed columns).
     *
     * @param {Number} column Visual column index.
     */

  }, {
    key: "freezeColumn",
    value: function freezeColumn(column) {
      var priv = privatePool.get(this);
      var settings = this.hot.getSettings();

      if (!priv.afterFirstUse) {
        priv.afterFirstUse = true;
      }

      if (settings.fixedColumnsLeft === this.hot.countCols() || column <= settings.fixedColumnsLeft - 1) {
        return; // already fixed
      }

      this.hot.columnIndexMapper.moveIndexes(column, settings.fixedColumnsLeft);
      settings.fixedColumnsLeft += 1;
    }
    /**
     * Unfreezes the given column (remove it from fixed columns and bring to it's previous position).
     *
     * @param {Number} column Visual column index.
     */

  }, {
    key: "unfreezeColumn",
    value: function unfreezeColumn(column) {
      var priv = privatePool.get(this);
      var settings = this.hot.getSettings();

      if (!priv.afterFirstUse) {
        priv.afterFirstUse = true;
      }

      if (settings.fixedColumnsLeft <= 0 || column > settings.fixedColumnsLeft - 1) {
        return; // not fixed
      }

      settings.fixedColumnsLeft -= 1;
      this.hot.columnIndexMapper.moveIndexes(column, settings.fixedColumnsLeft);
    }
    /**
     * Adds the manualColumnFreeze context menu entries.
     *
     * @private
     * @param {Object} options Context menu options.
     */

  }, {
    key: "addContextMenuEntry",
    value: function addContextMenuEntry(options) {
      options.items.push({
        name: '---------'
      }, freezeColumnItem(this), unfreezeColumnItem(this));
    }
    /**
     * Prevents moving the columns from/to fixed area.
     *
     * @private
     * @param {Array} columns Array of visual column indexes to be moved.
     * @param {Number} finalIndex Visual column index, being a start index for the moved columns. Points to where the elements will be placed after the moving action.
     */

  }, {
    key: "onBeforeColumnMove",
    value: function onBeforeColumnMove(columns, finalIndex) {
      var priv = privatePool.get(this);

      if (priv.afterFirstUse) {
        var freezeLine = this.hot.getSettings().fixedColumnsLeft; // Moving any column before the "freeze line" isn't possible.

        if (finalIndex < freezeLine) {
          return false;
        } // Moving frozen column isn't possible.


        if (columns.some(function (column) {
          return column < freezeLine;
        })) {
          return false;
        }
      }
    }
  }]);

  return ManualColumnFreeze;
}(BasePlugin);

registerPlugin('manualColumnFreeze', ManualColumnFreeze);
export default ManualColumnFreeze;