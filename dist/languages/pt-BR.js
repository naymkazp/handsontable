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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Júlio C. Zuppa
 * Last updated: Jan 12, 2018
 *
 * Description: Definition file for Portuguese - Brazil language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'pt-BR',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Inserir linha acima',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Inserir linha abaixo',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Inserir coluna esquerda',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Inserir coluna direita',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Excluir linha', 'Excluir linhas'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Excluir coluna', 'Excluir colunas'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Desfazer',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Refazer',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Somente leitura',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Limpar coluna',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Alinhamento',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Esquerda',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Centralizado',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Direita',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Justificado',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Superior',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Meio',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Inferior',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Congelar coluna',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Descongelar coluna',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Bordas',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Superior',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Direita',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Inferior',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Esquerda',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Excluir bordas(s)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Incluir comentário',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Editar comentário',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Remover comentário',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Comentário somente leitura',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Mesclar células',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Desfazer mesclagem de células',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Copiar',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Recortar',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Inserir linha filha',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Desanexar da linha pai',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Ocultar coluna', 'Ocultar colunas'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Exibir coluna', 'Exibir colunas'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Ocultar linha', 'Ocultar linhas'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Exibir linha', 'Exibir linhas'],

  [C.FILTERS_CONDITIONS_NONE]: 'Nenhum',
  [C.FILTERS_CONDITIONS_EMPTY]: 'É vazio',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Não é vazio',
  [C.FILTERS_CONDITIONS_EQUAL]: 'É igual a',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'É diferente de',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Começa com',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Termina com',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Contém',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Não contém',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Maior que',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Maior ou igual a',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Menor que',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Maior ou igual a',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Está entre',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Não está entre',
  [C.FILTERS_CONDITIONS_AFTER]: 'Depois',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Antes',
  [C.FILTERS_CONDITIONS_TODAY]: 'Hoje',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Amanhã',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Ontem',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Células vazias',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filtrar por condição',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filtrar por valor',

  [C.FILTERS_LABELS_CONJUNCTION]: 'E',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Ou',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Selecionar tudo',
  [C.FILTERS_BUTTONS_CLEAR]: 'Limpar',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Cancelar',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Localizar',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Valor',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Segundo valor'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});