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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Handsoncode
 * Last updated: Nov 17, 2017
 *
 * Description: Definition file for Polish - Poland language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'pl-PL',
  [C.CONTEXTMENU_ITEMS_NO_ITEMS]: 'Brak dostępnych opcji',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Wstaw wiersz powyżej',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Wstaw wiersz poniżej',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Wstaw kolumnę z lewej',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Wstaw kolumnę z prawej',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Usuń wiersz', 'Usuń wiersze'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Usuń kolumnę', 'Usuń kolumny'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Cofnij',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Ponów',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Tylko do odczytu',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Wyczyść kolumnę',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Wyrównanie',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Do lewej',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Do środka',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Do prawej',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Wyjustuj',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Do góry',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Wyśrodkuj',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Do dołu',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Zablokuj kolumnę',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Odblokuj kolumnę',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Obramowanie',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Krawędź górna',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Krawędź prawa',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Krawędź dolna',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Krawędź lewa',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Usuń obramowanie(a)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Dodaj komentarz',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Edytuj komentarz',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Usuń komentarz',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Komentarz tylko do odczytu',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Scal komórki',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Rozdziel komórki',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopiuj',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Wytnij',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Wstaw wiersz podrzędny',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Odłącz od nadrzędnego',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Ukryj kolumnę', 'Ukryj kolumny'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Pokaż kolumnę', 'Pokaż kolumny'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Ukryj wiersz', 'Ukryj wiersze'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Pokaż wiersz', 'Pokaż wiersze'],

  [C.FILTERS_CONDITIONS_NONE]: 'Brak',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Komórka jest pusta',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Komórka nie jest pusta',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Jest równe',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Jest różne od',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Tekst zaczyna się od',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Tekst kończy się na',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Tekst zawiera fragment',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Tekst nie zawiera fragmentu',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Większe niż',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Większe lub równe',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Mniejsze niż',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Mniejsze lub równe',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Jest pomiędzy',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Nie jest pomiędzy',
  [C.FILTERS_CONDITIONS_AFTER]: 'Data późniejsza niż',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Data wcześniejsza niż',
  [C.FILTERS_CONDITIONS_TODAY]: 'Dzisiaj',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Jutro',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Wczoraj',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Puste miejsca',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtruj wg warunku',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtruj wg wartości',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Oraz',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Lub',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Zaznacz wszystko',
  [C.FILTERS_BUTTONS_CLEAR]: 'Wyczyść',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Anuluj',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Szukaj',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Wartość',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Druga wartość'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});