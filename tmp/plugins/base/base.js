"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

exports.__esModule = true;
exports.BasePlugin = exports.PLUGIN_KEY = void 0;

require("core-js/modules/es.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.splice.js");

var _object = require("../../helpers/object");

var _array = require("../../helpers/array");

var _registry = require("../registry");

var _registry2 = require("../../cellTypes/registry");

var _registry3 = require("../../editors/registry");

var _registry4 = require("../../renderers/registry");

var _registry5 = require("../../validators/registry");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEPS_TYPE_CHECKERS = new Map([['plugin', _registry.hasPlugin], ['cell-type', _registry2.hasCellType], ['editor', _registry3.hasEditor], ['renderer', _registry4.hasRenderer], ['validator', _registry5.hasValidator]]);
var PLUGIN_KEY = 'base';
exports.PLUGIN_KEY = PLUGIN_KEY;
var privatePool = new WeakMap();
var missingDependeciesMsgs = [];
var initializedPlugins = null;
/**
 * @util
 */

var BasePlugin = /*#__PURE__*/function () {
  /**
   * @param {object} hotInstance Handsontable instance.
   */
  function BasePlugin(hotInstance) {
    var _this = this;

    _classCallCheck(this, BasePlugin);

    /**
     * Handsontable instance.
     *
     * @type {Core}
     */
    (0, _object.defineGetter)(this, 'hot', hotInstance, {
      writable: false
    });
    privatePool.set(this, {
      hooks: {}
    });
    initializedPlugins = null;
    this.pluginName = null;
    this.pluginsInitializedCallbacks = [];
    this.isPluginsReady = false;
    this.enabled = false;
    this.initialized = false;
    this.hot.addHook('afterPluginsInitialized', function () {
      return _this.onAfterPluginsInitialized();
    });
    this.hot.addHook('afterUpdateSettings', function (newSettings) {
      return _this.onUpdateSettings(newSettings);
    });
    this.hot.addHook('beforeInit', function () {
      return _this.init();
    });
  }

  _createClass(BasePlugin, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.pluginName = this.hot.getPluginName(this);
      var pluginDeps = this.constructor.PLUGIN_DEPS;
      var dependecies = Array.isArray(pluginDeps) ? pluginDeps : [];

      if (dependecies.length > 0) {
        var missingDependencies = [];
        dependecies.forEach(function (dependency) {
          var _dependency$split = dependency.split(':'),
              _dependency$split2 = _slicedToArray(_dependency$split, 2),
              type = _dependency$split2[0],
              moduleName = _dependency$split2[1];

          if (!DEPS_TYPE_CHECKERS.has(type)) {
            throw new Error("Unknown plugin dependency type \"".concat(type, "\" was found."));
          }

          if (!DEPS_TYPE_CHECKERS.get(type)(moduleName)) {
            missingDependencies.push(" - ".concat(moduleName, " (").concat(type, ")"));
          }
        });

        if (missingDependencies.length > 0) {
          var errorMsg = ["The ".concat(this.pluginName, " plugin requires the following modules:\n"), "".concat(missingDependencies.join('\n'), "\n")].join('');
          missingDependeciesMsgs.push(errorMsg);
        }
      }

      if (!initializedPlugins) {
        initializedPlugins = (0, _registry.getPluginsNames)();
      } // Workaround for the UndoRedo plugin which, currently doesn't follow the plugin architecture.
      // Without this line the `callOnPluginsReady` callback won't be triggered after all plugin
      // initialization.


      if (initializedPlugins.indexOf('UndoRedo') >= 0) {
        initializedPlugins.splice(initializedPlugins.indexOf('UndoRedo'), 1);
      }

      if (initializedPlugins.indexOf(this.pluginName) >= 0) {
        initializedPlugins.splice(initializedPlugins.indexOf(this.pluginName), 1);
      }

      this.hot.addHookOnce('afterPluginsInitialized', function () {
        if (_this2.isEnabled && _this2.isEnabled()) {
          _this2.enablePlugin();
        }
      });
      var isAllPluginsAreInitialized = initializedPlugins.length === 0;

      if (isAllPluginsAreInitialized) {
        if (missingDependeciesMsgs.length > 0) {
          var _errorMsg = ["".concat(missingDependeciesMsgs.join('\n'), "\n"), 'You have to import and register them manually.'].join('');

          throw new Error(_errorMsg);
        }

        this.hot.runHooks('afterPluginsInitialized');
      }

      this.initialized = true;
    }
    /**
     * Enable plugin for this Handsontable instance.
     */

  }, {
    key: "enablePlugin",
    value: function enablePlugin() {
      this.enabled = true;
    }
    /**
     * Disable plugin for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      if (this.eventManager) {
        this.eventManager.clear();
      }

      this.clearHooks();
      this.enabled = false;
    }
    /**
     * Add listener to plugin hooks system.
     *
     * @param {string} name The hook name.
     * @param {Function} callback The listener function to add.
     */

  }, {
    key: "addHook",
    value: function addHook(name, callback) {
      privatePool.get(this).hooks[name] = privatePool.get(this).hooks[name] || [];
      var hooks = privatePool.get(this).hooks[name];
      this.hot.addHook(name, callback);
      hooks.push(callback);
      privatePool.get(this).hooks[name] = hooks;
    }
    /**
     * Remove all hooks listeners by hook name.
     *
     * @param {string} name The hook name.
     */

  }, {
    key: "removeHooks",
    value: function removeHooks(name) {
      var _this3 = this;

      (0, _array.arrayEach)(privatePool.get(this).hooks[name] || [], function (callback) {
        _this3.hot.removeHook(name, callback);
      });
    }
    /**
     * Clear all hooks.
     */

  }, {
    key: "clearHooks",
    value: function clearHooks() {
      var _this4 = this;

      var hooks = privatePool.get(this).hooks;
      (0, _object.objectEach)(hooks, function (callbacks, name) {
        return _this4.removeHooks(name);
      });
      hooks.length = 0;
    }
    /**
     * Register function which will be immediately called after all plugins initialized.
     *
     * @param {Function} callback The listener function to call.
     */

  }, {
    key: "callOnPluginsReady",
    value: function callOnPluginsReady(callback) {
      if (this.isPluginsReady) {
        callback();
      } else {
        this.pluginsInitializedCallbacks.push(callback);
      }
    }
    /**
     * On after plugins initialized listener.
     *
     * @private
     */

  }, {
    key: "onAfterPluginsInitialized",
    value: function onAfterPluginsInitialized() {
      (0, _array.arrayEach)(this.pluginsInitializedCallbacks, function (callback) {
        return callback();
      });
      this.pluginsInitializedCallbacks.length = 0;
      this.isPluginsReady = true;
    }
    /**
     * On update settings listener.
     *
     * @private
     */

  }, {
    key: "onUpdateSettings",
    value: function onUpdateSettings() {
      if (this.isEnabled) {
        if (this.enabled && !this.isEnabled()) {
          this.disablePlugin();
        }

        if (!this.enabled && this.isEnabled()) {
          this.enablePlugin();
        }

        if (this.enabled && this.isEnabled()) {
          this.updatePlugin();
        }
      }
    }
    /**
     * Updates the plugin to use the latest options you have specified.
     *
     * @private
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {}
    /**
     * Destroy plugin.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      if (this.eventManager) {
        this.eventManager.destroy();
      }

      this.clearHooks();
      (0, _object.objectEach)(this, function (value, property) {
        if (property !== 'hot') {
          _this5[property] = null;
        }
      });
      delete this.t;
      delete this.hot;
    }
  }], [{
    key: "PLUGIN_KEY",
    get: function get() {
      return PLUGIN_KEY;
    }
  }]);

  return BasePlugin;
}();

exports.BasePlugin = BasePlugin;