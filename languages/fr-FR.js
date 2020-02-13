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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Stefan Salzl, Thomas Senn
 * Last updated: Feb 05, 2018
 *
 * Description: Definition file for French - France language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'fr-FR',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Insérer une ligne en haut',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Insérer une ligne en bas',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Insérer une colonne à gauche',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Insérer une colonne à droite',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Supprimer une ligne', 'Supprimer les lignes'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Supprimer une colonne', 'Supprimer les colonnes'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Annuler',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Rétablir',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Lecture seule',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Effacer la colonne',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Alignement',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Gauche',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Centre',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Droite',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Justifié',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'En haut',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Au milieu',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'En bas',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Figer la colonne',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Libérer la colonne',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Bordures',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Supérieure',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Droite',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Inférieure',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Gauche',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Pas de bordure',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Ajouter commentaire',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Modifier commentaire',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Supprimer commentaire',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Commentaire en lecture seule',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Fusionner les cellules',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Séparer les cellules',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Copier',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Couper',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Insérer une sous-ligne',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Détacher de la ligne précédente',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Masquer colonne', 'Masquer les colonnes'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Afficher colonne', 'Afficher les colonnes'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Masquer ligne', 'Masquer les lignes'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Afficher ligne', 'Afficher les lignes'],

  [C.FILTERS_CONDITIONS_NONE]: 'Aucun',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Est vide',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'N\'est pas vide',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Egal à',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Est différent de',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Commence par',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Finit par',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Contient',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Ne contient pas',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Supérieur à',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Supérieur ou égal à',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Inférieur à',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Inférieur ou égal à',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Est compris entre',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'N\'est pas compris entre',
  [C.FILTERS_CONDITIONS_AFTER]: 'Après le',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Avant le',
  [C.FILTERS_CONDITIONS_TODAY]: 'Aujourd\'hui',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Demain',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Hier',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Cellules vides',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtrer par conditions',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtrer par valeurs',

  [C.FILTERS_LABELS_CONJUNCTION]: 'Et',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Ou',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Tout sélectionner',
  [C.FILTERS_BUTTONS_CLEAR]: 'Effacer la sélection',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Annuler',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Chercher',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Valeur',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Valeur de remplacement'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});