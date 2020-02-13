import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { isUndefined, isDefined } from '../helpers/mixed';
import { mixin } from '../helpers/object';
import localHooks from '../mixins/localHooks'; // Counter for checking if there is a memory leak.

var registeredMaps = 0;
/**
 * Collection of index maps having unique names. It allow us to perform bulk operations such as init, remove, insert on all index maps that have been registered in the collection.
 */

var MapCollection =
/*#__PURE__*/
function () {
  function MapCollection() {
    _classCallCheck(this, MapCollection);

    /**
     * Collection of index maps.
     *
     * @type {Map<string, IndexMap>}
     */
    this.collection = new Map();
  }
  /**
   * Register custom index map.
   *
   * @param {String} uniqueName Unique name of the index map.
   * @param {IndexMap} indexMap Index map containing miscellaneous (i.e. meta data, indexes sequence), updated after remove and insert data actions.
   * @returns {IndexMap|undefined}
   */


  _createClass(MapCollection, [{
    key: "register",
    value: function register(uniqueName, indexMap) {
      var _this = this;

      if (this.collection.has(uniqueName) === false) {
        this.collection.set(uniqueName, indexMap);
        indexMap.addLocalHook('change', function () {
          return _this.runLocalHooks('change', indexMap);
        });
        registeredMaps += 1;
      }
    }
    /**
     * Unregister custom index map.
     *
     * @param {String} name Name of the index map.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      var indexMap = this.collection.get(name);

      if (isDefined(indexMap)) {
        indexMap.clearLocalHooks();
        this.collection.delete(name);
        this.runLocalHooks('change', indexMap);
        registeredMaps -= 1;
      }
    }
    /**
     * Get index map for the provided name.
     *
     * @param {String} [name] Name of the index map.
     * @returns {Array|IndexMap}
     */

  }, {
    key: "get",
    value: function get(name) {
      if (isUndefined(name)) {
        return Array.from(this.collection.values());
      }

      return this.collection.get(name);
    }
    /**
     * Get collection size.
     *
     * @returns {Number}
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this.collection.size;
    }
    /**
     * Remove some indexes and corresponding mappings and update values of the others within all collection's index maps.
     *
     * @private
     * @param {Array} removedIndexes List of removed indexes.
     */

  }, {
    key: "removeFromEvery",
    value: function removeFromEvery(removedIndexes) {
      this.collection.forEach(function (indexMap) {
        indexMap.remove(removedIndexes);
      });
    }
    /**
     * Insert new indexes and corresponding mapping and update values of the others all collection's index maps.
     *
     * @private
     * @param {Number} insertionIndex Position inside the actual list.
     * @param {Array} insertedIndexes List of inserted indexes.
     */

  }, {
    key: "insertToEvery",
    value: function insertToEvery(insertionIndex, insertedIndexes) {
      this.collection.forEach(function (indexMap) {
        indexMap.insert(insertionIndex, insertedIndexes);
      });
    }
    /**
     * Set default values to index maps within collection.
     *
     * @param {Number} length Destination length for all stored maps.
     */

  }, {
    key: "initEvery",
    value: function initEvery(length) {
      this.collection.forEach(function (indexMap) {
        indexMap.init(length);
      });
    }
  }]);

  return MapCollection;
}();

mixin(MapCollection, localHooks);
export default MapCollection;
export function getRegisteredMapsCounter() {
  return registeredMaps;
}