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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Tomas Rapkauskas, Anton Brouwer
 * Last updated: Jun 07, 2018
 *
 * Description: Definition file for Dutch - The Netherlands language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'nl-NL',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Rij boven invoegen',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Rij onder invoegen',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Kolom links invoegen',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Kolom rechts invoegen',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Rij verwijderen', 'Rijen verwijderen'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Kolom verwijderen', 'Kolommen verwijderen'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Ongedaan maken',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Opnieuw uitvoeren',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Alleen lezen',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Kolom leegmaken',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Uitlijning',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Links',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Gecentreerd',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Rechts',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Uitvullen',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Boven',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Midden',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Onder',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Kolom blokkeren',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Kolom blokkering opheffen',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Randen',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Boven',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Rechts',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Onder',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Links',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Rand(en) verwijderen',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Opmerking toevoegen',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Opmerking bewerken',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Opmerking verwijderen',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Opmerking Alleen-lezen',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Cellen samenvoegen',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Samenvoeging van cellen opheffen',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopiëren',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Knippen',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Geneste rij invoegen',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Geneste rij ontkoppelen',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Kolom verbergen', 'Kolommen verbergen'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Kolom zichbaar maken', 'Kolommen zichtbaar maken'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Rij verbergen', 'Rijen verbergen'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Rij zichtbaar maken', 'Rijen zichtbaar maken'],

  [C.FILTERS_CONDITIONS_NONE]: 'Geen',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Is leeg',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Is niet leeg',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Is gelijk aan',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Is niet gelijk aan',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Begint met',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Eindigt op',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Bevat',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Bevat niet',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Is groter',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Is groter of gelijk aan',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Is kleiner dan',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Is kleiner dan of gelijk aan',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Is tussen',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Ligt niet tussen',
  [C.FILTERS_CONDITIONS_AFTER]: 'Na',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Voor',
  [C.FILTERS_CONDITIONS_TODAY]: 'Vandaag',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Morgen',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Gisteren',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Cellen leegmaken',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filteren op conditie',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filteren op waarde',

  [C.FILTERS_LABELS_CONJUNCTION]: 'En',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Of',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Alles selecteren',
  [C.FILTERS_BUTTONS_CLEAR]: 'Leeg maken',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Annuleren',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Zoeken',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Waarde',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Tweede waarde'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});