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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Edgars Voroboks
 * Last updated: Jun 14, 2018
 *
 * Description: Definition file for Latvian - Latvia language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'lv-LV',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Ievietot rindu augšā',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Ievietot rindu apakšā',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Ievietot kolonnu pa kreisi',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Ievietot kolonnu pa labi',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Dzēst rindu', 'Dzēst rindas'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Dzēst kolonnu', 'Dzēst kolonnas'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Atsaukt',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Pārtaisīt',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Lasīšanas režīms',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Notīrīt kolonnu',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Izvietojums',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Pa kreisi',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Centrēts',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Pa labi',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Izlīdzināts',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Augšā',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Pa vidu',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Apakšā',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Iesaldēt kolonnu',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Atsaldēt kolonnu',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Robežas',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Augšā',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Pa labi',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Apakšā',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Pa kreisi',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Noņemt robežu(-as)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Pievienot komentāru',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Labot komentāru',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Dzēst komentāru',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Lasīšanas režīma komentārs',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Sapludināt šūnas',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Nesapludināt šunas',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopēt',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Izgriezt',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Ievietot pakārtoto rindu',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Atdalīt no vecāka',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Palēpt kolonnu', 'Palēpt kolonnas'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Rādīt kolonnu', 'Rādīt kolonnas'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Palēpt rindu', 'Paslēpt rindas'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Rādīt rindu', 'Rādīt rindas'],

  [C.FILTERS_CONDITIONS_NONE]: 'Nekas',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Ir tukšs',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Nav tukšs',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Vienāds ar',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Nav vienāds ar',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Sākas ar',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Beidzas ar',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Satur',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Nesatur',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Lielāks par',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Lielāks vai vienāds ar',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Mazāks par',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Mazāks vai vienāds ar',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Ir starp',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Nav starp',
  [C.FILTERS_CONDITIONS_AFTER]: 'Pēc',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Pirms',
  [C.FILTERS_CONDITIONS_TODAY]: 'Šodien',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Rītdien',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Vakar',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Tukšas šūnas',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtrēt pēc nosacījuma',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtrēt pēc vērtības',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Un',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Vai',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Izvēlēties visu',
  [C.FILTERS_BUTTONS_CLEAR]: 'Notīrīt',
  [C.FILTERS_BUTTONS_OK]: 'Labi',
  [C.FILTERS_BUTTONS_CANCEL]: 'Atcelt',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Meklēt',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Vērtība',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Otra vērtība'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});