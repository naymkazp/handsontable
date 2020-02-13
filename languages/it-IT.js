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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Andrea Cattaneo
 * Last updated: Sep 14, 2018
 *
 * Description: Definition file for Italian - Italy language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'it-IT',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Inserisci riga sopra',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Inserisci riga sotto',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Inserisci colonna a sinistra',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Inserisci colonna a destra',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Rimuovi riga', 'Rimuovi righe'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Rimuovi colonna', 'Rimuovi colonne'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Annulla',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Ripeti',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Sola lettura',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Svuota colonna',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Allineamento',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Sinistra',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Centro',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Destra',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Giustificato',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'In alto',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'A metà',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'In basso',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Blocca colonna',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Sblocca colonna',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Bordi',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Sopra',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Destra',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Sotto',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Sinistra',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Rimuovi bordo(i)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Aggiungi commento',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Modifica commento',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Rimuovi commento',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Commento in sola lettura',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Unisci celle',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Separa celle',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Copia',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Taglia',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Inserisci riga figlia',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Scollega da riga madre',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Nascondi colonna', 'Nascondi colonne'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Mostra colonna', 'Mostra colonne'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Nascondi riga', 'Nascondi righe'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Mostra riga', 'Mostra righe'],

  [C.FILTERS_CONDITIONS_NONE]: 'Nessuna',
  [C.FILTERS_CONDITIONS_EMPTY]: 'È vuoto',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Non è vuoto',
  [C.FILTERS_CONDITIONS_EQUAL]: 'È uguale a',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'È diverso da',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Inizia con',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Termina con',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Contiene',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Non contiene',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Maggiore',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Maggiore o uguale',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Minore',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Minore o uguale',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'È compreso tra',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Non è compreso tra',
  [C.FILTERS_CONDITIONS_AFTER]: 'Dopo',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Prima',
  [C.FILTERS_CONDITIONS_TODAY]: 'Oggi',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Domani',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Ieri',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Celle vuote',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtra per condizione',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtra per valore',

  [C.FILTERS_LABELS_CONJUNCTION]: 'E',
  [C.FILTERS_LABELS_DISJUNCTION]: 'O',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Seleziona tutto',
  [C.FILTERS_BUTTONS_CLEAR]: 'Pulisci',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Annulla',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Cerca',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Valore',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Sostituisci con'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});