import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { isFunction } from '../../../helpers/function';
import { arrayFilter } from '../../../helpers/array';
/**
 * Insert new items to the list.
 *
 * @private
 * @param {Array} indexedValues List of values for particular indexes.
 * @param {Number} insertionIndex Position inside the actual list.
 * @param {Array} insertedIndexes List of inserted indexes.
 * @param {*} insertedValuesMapping Mapping which may provide value or function returning value for the specific parameters.
 * @returns List with new mappings.
 */

export function getListWithInsertedItems(indexedValues, insertionIndex, insertedIndexes, insertedValuesMapping) {
  var firstInsertedIndex = insertedIndexes[0];
  return [].concat(_toConsumableArray(indexedValues.slice(0, firstInsertedIndex)), _toConsumableArray(insertedIndexes.map(function (insertedIndex, ordinalNumber) {
    if (isFunction(insertedValuesMapping)) {
      return insertedValuesMapping(insertedIndex, ordinalNumber);
    }

    return insertedValuesMapping;
  })), _toConsumableArray(indexedValues.slice(firstInsertedIndex)));
}
/**
 * Filter items from the list.
 *
 * @private
 * @param {Array} indexedValues List of values for particular indexes.
 * @param {Array} removedIndexes List of removed indexes.
 * @returns Reduced list of mappings.
 */

export function getListWithRemovedItems(indexedValues, removedIndexes) {
  return arrayFilter(indexedValues, function (_, index) {
    return removedIndexes.includes(index) === false;
  });
}