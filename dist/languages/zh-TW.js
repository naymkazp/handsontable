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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Phyllis Yen
 * Last updated: Mar 9, 2018
 *
 * Description: Definition file for Chinese - Taiwan language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'zh-TW',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: '上方插入列',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: '下方插入列',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: '左方插入欄',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: '右方插入欄',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['移除該列', '移除多列'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['移除該欄', '移除多欄'],
  [C.CONTEXTMENU_ITEMS_UNDO]: '復原',
  [C.CONTEXTMENU_ITEMS_REDO]: '取消復原',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: '唯讀',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: '清空該欄',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: '對齊',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: '靠左',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: '水平置中',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: '靠右',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: '左右對齊',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: '靠上',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: '垂直置中',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: '靠下',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: '凍結欄位',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: '取消凍結欄位',

  [C.CONTEXTMENU_ITEMS_BORDERS]: '邊界',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: '上',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: '右',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: '下',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: '左',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: '移除邊界',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: '加入評論',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: '編輯評論',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: '刪除評論',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: '唯讀評論',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: '合併欄位',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: '取消合併欄位',

  [C.CONTEXTMENU_ITEMS_COPY]: '複製',
  [C.CONTEXTMENU_ITEMS_CUT]: '剪下',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: '插入子列',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: '與母列分離',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['隱藏該欄', '隱藏多欄'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['顯示該欄', '顯示多欄'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['隱藏該列', '隱藏多列'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['顯示該列', '顯示多列'],

  [C.FILTERS_CONDITIONS_NONE]: '無',
  [C.FILTERS_CONDITIONS_EMPTY]: '為空',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: '不為空',
  [C.FILTERS_CONDITIONS_EQUAL]: '等於',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: '不等於',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: '開頭是',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: '結尾是',
  [C.FILTERS_CONDITIONS_CONTAINS]: '包含',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: '不包含',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: '大於',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: '大於或等於',
  [C.FILTERS_CONDITIONS_LESS_THAN]: '小於',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: '小於或等於',
  [C.FILTERS_CONDITIONS_BETWEEN]: '在此範圍',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: '不在此範圍',
  [C.FILTERS_CONDITIONS_AFTER]: '之後',
  [C.FILTERS_CONDITIONS_BEFORE]: '之前',
  [C.FILTERS_CONDITIONS_TODAY]: '今天',
  [C.FILTERS_CONDITIONS_TOMORROW]: '明天',
  [C.FILTERS_CONDITIONS_YESTERDAY]: '昨天',

  [C.FILTERS_VALUES_BLANK_CELLS]: '空白格',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: '依條件過濾',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: '依值過濾',

  [C.FILTERS_LABELS_CONJUNCTION]: '且',
  [C.FILTERS_LABELS_DISJUNCTION]: '或',

  [C.FILTERS_BUTTONS_SELECT_ALL]: '全選',
  [C.FILTERS_BUTTONS_CLEAR]: '清除',
  [C.FILTERS_BUTTONS_OK]: '確認',
  [C.FILTERS_BUTTONS_CANCEL]: '取消',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: '搜尋',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: '值',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: '第二值'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});