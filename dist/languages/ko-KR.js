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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _handsontable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handsontable__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @preserve
 * Authors: Hwang, Gun-gu
 * Last updated: Aug 20, 2018
 *
 * Description: Definition file for Korean - Korea language-country.
 */


const C = _handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dictionaryKeys;

const dictionary = {
  languageCode: 'ko-KR',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: '위쪽에 행 삽입',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: '아래쪽에 행 삽입',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: '왼쪽에 열 삽입',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: '오른쪽에 열 삽입',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['행 삭제', '여러 행 삭제'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['열 삭제', '여러 열 삭제'],
  [C.CONTEXTMENU_ITEMS_UNDO]: '되돌리기',
  [C.CONTEXTMENU_ITEMS_REDO]: '다시하기',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: '읽기 전용',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: '열 지우기',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: '정렬',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: '왼쪽',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: '중앙',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: '오른쪽',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: '자동',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: '위쪽',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: '가운데',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: '아래쪽',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: '열 고정',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: '열 고정 해제',

  [C.CONTEXTMENU_ITEMS_BORDERS]: '테두리',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: '위쪽',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: '오른쪽',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: '아래쪽',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: '왼쪽',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: '테두리 지우기',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: '댓글 달기',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: '댓글 편집',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: '댓글 삭제',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: '읽기 전용 댓글',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: '셀 병합',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: '셀 병합 해제',

  [C.CONTEXTMENU_ITEMS_COPY]: '복사',
  [C.CONTEXTMENU_ITEMS_CUT]: '잘라내기',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: '자녀 행 추가',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: '부모행에서 제거',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['열 숨기기', '여러 열 숨기기'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['열 숨기기 해제', '여러 열 숨기기 해제'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['행 숨기기', '여러 행 숨기기'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['행 숨기기 해제', '여러 행 숨기기 해제'],

  [C.FILTERS_CONDITIONS_NONE]: '조건없음',
  [C.FILTERS_CONDITIONS_EMPTY]: '비어있음',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: '비어있지 않음',
  [C.FILTERS_CONDITIONS_EQUAL]: '같',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: '같지 않음',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: '시작 문자',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: '끝 문자',
  [C.FILTERS_CONDITIONS_CONTAINS]: '포함',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: '포함하지 않음',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: '보다 큼',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: '크거나 같음',
  [C.FILTERS_CONDITIONS_LESS_THAN]: '보다 작',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: '작거나 같음',
  [C.FILTERS_CONDITIONS_BETWEEN]: '사이',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: '사이 제외',
  [C.FILTERS_CONDITIONS_AFTER]: '다음',
  [C.FILTERS_CONDITIONS_BEFORE]: '전',
  [C.FILTERS_CONDITIONS_TODAY]: '오늘',
  [C.FILTERS_CONDITIONS_TOMORROW]: '내일',
  [C.FILTERS_CONDITIONS_YESTERDAY]: '어제',

  [C.FILTERS_VALUES_BLANK_CELLS]: '공란',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: '조건부 필터',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: '값 필터',

  [C.FILTERS_LABELS_CONJUNCTION]: '그리고',
  [C.FILTERS_LABELS_DISJUNCTION]: '또는',

  [C.FILTERS_BUTTONS_SELECT_ALL]: '전체선택',
  [C.FILTERS_BUTTONS_CLEAR]: '지우기',
  [C.FILTERS_BUTTONS_OK]: '확인',
  [C.FILTERS_BUTTONS_CANCEL]: '취소',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: '찾기',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: '값',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: '두번째 값'
};

_handsontable__WEBPACK_IMPORTED_MODULE_0___default.a.languages.registerLanguageDictionary(dictionary);

/* harmony default export */ __webpack_exports__["default"] = (dictionary);


/***/ })

/******/ })["___"];
});