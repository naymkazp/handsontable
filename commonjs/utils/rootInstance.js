"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.registerAsRootInstance = registerAsRootInstance;
exports.hasValidParameter = hasValidParameter;
exports.isRootInstance = isRootInstance;
exports.rootInstanceSymbol = exports.holder = void 0;
var holder = new WeakMap();
exports.holder = holder;
var rootInstanceSymbol = Symbol('rootInstance');
/**
 * Register an object as a root instance.
 *
 * @param  {Object} object An object to associate with root instance flag.
 */

exports.rootInstanceSymbol = rootInstanceSymbol;

function registerAsRootInstance(object) {
  holder.set(object, true);
}
/**
 * Check if the source of the root indication call is valid.
 *
 * @param  {Symbol} rootSymbol A symbol as a source of truth.
 * @return {Boolean}
 */


function hasValidParameter(rootSymbol) {
  return rootSymbol === rootInstanceSymbol;
}
/**
 * Check if passed an object was flagged as a root instance.
 *
 * @param  {Object} object An object to check.
 * @return {Boolean}
 */


function isRootInstance(object) {
  return holder.has(object);
}