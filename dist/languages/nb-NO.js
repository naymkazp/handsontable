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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Simon Borøy-Johnsen (TheSimoms)
 * Last updated: Dec 19, 2017
 *
 * Description: Definition file for Norwegian Bokmål - Norway language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'nb-NO',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Sett inn over',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Sett inn under',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Sett inn til venstre',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Sett inn til høyre',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Fjern rad', 'Fjern rader'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Fjern kolonne', 'Fjern kolonner'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Angre',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Gjør om',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Skrivebeskyttet',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Tøm kolonne',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Juster',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Venstre',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Midtstill',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Høyre',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Tilpasset',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Øverst',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'På midten',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Nederst',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Frys kolonne',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Frigi kolonne',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Kantlinjer',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Over',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Til høyre',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Under',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Til venstre',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Fjern kantlinje(r)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Legg til kommentar',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Endre kommentar',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Fjern kommentar',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Skrivebeskytt kommentar',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Slå sammen celler',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Opphev sammenslåing',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopier',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Klipp ut',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Sett inn underrad',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Frigi fra gruppe',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Skjul kolonne', 'Skjul kolonner'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Vis kolonne', 'Vis kolonner'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Skjul rad', 'Skjul rader'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Vis rad', 'Vis rader'],

  [C.FILTERS_CONDITIONS_NONE]: 'Ingen',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Er tom',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Er ikke tom',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Er lik',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Er ikke lik',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Begynner med',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Slutter med',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Inneholder',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Inneholder ikke',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Større enn',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Større enn eller lik',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Mindre enn',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Mindre enn eller lik',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Er mellom',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Er ikke mellom',
  [C.FILTERS_CONDITIONS_AFTER]: 'Etter',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Før',
  [C.FILTERS_CONDITIONS_TODAY]: 'I dag',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'I morgen',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'I går',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Tomme celler',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtrer etter betingelse',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtrer etter verdi',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Og',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Eller',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Velg alle',
  [C.FILTERS_BUTTONS_CLEAR]: 'Tøm',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Avbryt',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Søk',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Verdi',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Andre verdi',
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});