(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Stefan Salzl
 * Last updated: Jan 08, 2018
 *
 * Description: Definition file for German - Germany language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'de-DE',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Zeile einfügen oberhalb',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Zeile einfügen unterhalb',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Spalte einfügen links',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Spalte einfügen rechts',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Zeile löschen', 'Zeilen löschen'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Spalte löschen', 'Spalten löschen'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Rückgangig',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Wiederholen',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Nur Lesezugriff',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Spalteninhalt löschen',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Ausrichtung',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Linksbündig',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Zentriert',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Rechtsbündig',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Blocksatz',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Oben',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Mitte',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Unten',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Spalte fixieren',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Spaltenfixierung aufheben',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Rahmen',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Oben',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Rechts',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Unten',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Links',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Kein Rahmen',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Kommentar hinzufügen',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Kommentar bearbeiten',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Kommentar löschen',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Schreibschutz Kommentar',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Zellen verbinden',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Zellen teilen',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopieren',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Ausschneiden',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Nachfolgerzeile einfügen',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Von Vorgängerzeile abkoppeln',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Spalte ausblenden', 'Spalten ausblenden'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Spalte einblenden', 'Spalten einblenden'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Zeile ausblenden', 'Zeilen ausblenden'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Zeile einblenden', 'Zeilen einblenden'],

  [C.FILTERS_CONDITIONS_NONE]: 'Kein Filter',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Ist leer',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Ist nicht leer',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Ist gleich',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Ist ungleich',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Beginnt mit',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Endet mit',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Enthält',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Enthält nicht',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Größer als',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Größer gleich',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Kleiner als',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Kleiner gleich',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Zwischen',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Außerhalb',
  [C.FILTERS_CONDITIONS_AFTER]: 'Nach',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Vor',
  [C.FILTERS_CONDITIONS_TODAY]: 'Heute',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Morgen',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Gestern',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Leere Zellen',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Per Bedingung filtern',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Nach Zahlen filtern',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Und',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Oder',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Alles auswählen',
  [C.FILTERS_BUTTONS_CLEAR]: 'Auswahl aufheben',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Abbrechen',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Suchen',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Wert',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Alternativwert'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })
/******/ ])["___"];
});