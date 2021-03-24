"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

exports.__esModule = true;
exports.AutocompleteEditor = exports.EDITOR_TYPE = void 0;

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.sort.js");

var _handsontableEditor = require("../handsontableEditor");

var _array = require("../../helpers/array");

var _element = require("../../helpers/dom/element");

var _mixed = require("../../helpers/mixed");

var _string = require("../../helpers/string");

var _unicode = require("../../helpers/unicode");

var _textRenderer = require("../../renderers/textRenderer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var privatePool = new WeakMap();
var EDITOR_TYPE = 'autocomplete';
/**
 * @private
 * @class AutocompleteEditor
 */

exports.EDITOR_TYPE = EDITOR_TYPE;

var AutocompleteEditor = /*#__PURE__*/function (_HandsontableEditor) {
  _inherits(AutocompleteEditor, _HandsontableEditor);

  var _super = _createSuper(AutocompleteEditor);

  function AutocompleteEditor(instance) {
    var _this;

    _classCallCheck(this, AutocompleteEditor);

    _this = _super.call(this, instance);
    /**
     * Query string to turn available values over.
     *
     * @type {string}
     */

    _this.query = null;
    /**
     * Contains stripped choices.
     *
     * @type {string[]}
     */

    _this.strippedChoices = [];
    /**
     * Contains raw choices.
     *
     * @type {Array}
     */

    _this.rawChoices = [];
    privatePool.set(_assertThisInitialized(_this), {
      skipOne: false,
      isMacOS: _this.hot.rootWindow.navigator.platform.indexOf('Mac') > -1
    });
    return _this;
  }
  /**
   * Gets current value from editable element.
   *
   * @returns {string}
   */


  _createClass(AutocompleteEditor, [{
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      var selectedValue = this.rawChoices.find(function (value) {
        var strippedValue = _this2.stripValueIfNeeded(value);

        return strippedValue === _this2.TEXTAREA.value;
      });

      if ((0, _mixed.isDefined)(selectedValue)) {
        return selectedValue;
      }

      return this.TEXTAREA.value;
    }
    /**
     * Creates an editor's elements and adds necessary CSS classnames.
     */

  }, {
    key: "createElements",
    value: function createElements() {
      _get(_getPrototypeOf(AutocompleteEditor.prototype), "createElements", this).call(this);

      (0, _element.addClass)(this.htContainer, 'autocompleteEditor');
      (0, _element.addClass)(this.htContainer, this.hot.rootWindow.navigator.platform.indexOf('Mac') === -1 ? '' : 'htMacScroll');
    }
    /**
     * Opens the editor and adjust its size and internal Handsontable's instance.
     */

  }, {
    key: "open",
    value: function open() {
      var _this3 = this;

      var priv = privatePool.get(this); // this.addHook('beforeKeyDown', event => this.onBeforeKeyDown(event));
      // Ugly fix for handsontable which grab window object for autocomplete scroll listener instead table element.

      this.TEXTAREA_PARENT.style.overflow = 'auto';

      _get(_getPrototypeOf(AutocompleteEditor.prototype), "open", this).call(this);

      this.TEXTAREA_PARENT.style.overflow = '';
      var choicesListHot = this.htEditor.getInstance();
      var trimDropdown = this.cellProperties.trimDropdown === void 0 ? true : this.cellProperties.trimDropdown;
      this.showEditableElement();
      this.focus();
      var scrollbarWidth = (0, _element.getScrollbarWidth)();

      if (scrollbarWidth === 0 && priv.isMacOS) {
        scrollbarWidth += 15; // default scroll bar width if scroll bars are visible only when scrolling
      }

      choicesListHot.updateSettings({
        colWidths: trimDropdown ? [(0, _element.outerWidth)(this.TEXTAREA) - 2] : void 0,
        width: trimDropdown ? (0, _element.outerWidth)(this.TEXTAREA) + scrollbarWidth : void 0,
        renderer: function renderer(instance, TD, row, col, prop, value, cellProperties) {
          (0, _textRenderer.textRenderer)(instance, TD, row, col, prop, value, cellProperties);
          var _this3$cellProperties = _this3.cellProperties,
              filteringCaseSensitive = _this3$cellProperties.filteringCaseSensitive,
              allowHtml = _this3$cellProperties.allowHtml;
          var query = _this3.query;
          var cellValue = (0, _mixed.stringify)(value);
          var indexOfMatch;
          var match;

          if (cellValue && !allowHtml) {
            indexOfMatch = filteringCaseSensitive === true ? cellValue.indexOf(query) : cellValue.toLowerCase().indexOf(query.toLowerCase());

            if (indexOfMatch !== -1) {
              match = cellValue.substr(indexOfMatch, query.length);
              cellValue = cellValue.replace(match, "<strong>".concat(match, "</strong>"));
            }
          }

          TD.innerHTML = cellValue;
        },
        autoColumnSize: true
      });

      if (priv.skipOne) {
        priv.skipOne = false;
      }

      this.hot._registerTimeout(function () {
        _this3.queryChoices(_this3.TEXTAREA.value);
      });
    }
    /**
     * Closes the editor.
     */

  }, {
    key: "close",
    value: function close() {
      this.removeHooksByKey('beforeKeyDown');

      _get(_getPrototypeOf(AutocompleteEditor.prototype), "close", this).call(this);
    }
    /**
     * Verifies result of validation or closes editor if user's cancelled changes.
     *
     * @param {boolean|undefined} result If `false` and the cell using allowInvalid option,
     *                                   then an editor won't be closed until validation is passed.
     */

  }, {
    key: "discardEditor",
    value: function discardEditor(result) {
      _get(_getPrototypeOf(AutocompleteEditor.prototype), "discardEditor", this).call(this, result);

      this.hot.view.render();
    }
    /**
     * Prepares choices list based on applied argument.
     *
     * @private
     * @param {string} query The query.
     */

  }, {
    key: "queryChoices",
    value: function queryChoices(query) {
      var _this4 = this;

      var source = this.cellProperties.source;
      this.query = query;

      if (typeof source === 'function') {
        source.call(this.cellProperties, query, function (choices) {
          _this4.rawChoices = choices;

          _this4.updateChoicesList(_this4.stripValuesIfNeeded(choices));
        });
      } else if (Array.isArray(source)) {
        this.rawChoices = source;
        this.updateChoicesList(this.stripValuesIfNeeded(source));
      } else {
        this.updateChoicesList([]);
      }
    }
    /**
     * Updates list of the possible completions to choose.
     *
     * @private
     * @param {Array} choicesList The choices list to process.
     */

  }, {
    key: "updateChoicesList",
    value: function updateChoicesList(choicesList) {
      var pos = (0, _element.getCaretPosition)(this.TEXTAREA);
      var endPos = (0, _element.getSelectionEndPosition)(this.TEXTAREA);
      var sortByRelevanceSetting = this.cellProperties.sortByRelevance;
      var filterSetting = this.cellProperties.filter;
      var orderByRelevance = null;
      var highlightIndex = null;
      var choices = choicesList;

      if (sortByRelevanceSetting) {
        orderByRelevance = AutocompleteEditor.sortByRelevance(this.stripValueIfNeeded(this.getValue()), choices, this.cellProperties.filteringCaseSensitive);
      }

      var orderByRelevanceLength = Array.isArray(orderByRelevance) ? orderByRelevance.length : 0;

      if (filterSetting === false) {
        if (orderByRelevanceLength) {
          highlightIndex = orderByRelevance[0];
        }
      } else {
        var sorted = [];

        for (var i = 0, choicesCount = choices.length; i < choicesCount; i++) {
          if (sortByRelevanceSetting && orderByRelevanceLength <= i) {
            break;
          }

          if (orderByRelevanceLength) {
            sorted.push(choices[orderByRelevance[i]]);
          } else {
            sorted.push(choices[i]);
          }
        }

        highlightIndex = 0;
        choices = sorted;
      }

      this.strippedChoices = choices;
      this.htEditor.loadData((0, _array.pivot)([choices]));
      this.updateDropdownHeight();
      this.flipDropdownIfNeeded();

      if (this.cellProperties.strict === true) {
        this.highlightBestMatchingChoice(highlightIndex);
      }

      this.hot.listen();
      (0, _element.setCaretPosition)(this.TEXTAREA, pos, pos === endPos ? void 0 : endPos);
    }
    /**
     * Checks where is enough place to open editor.
     *
     * @private
     * @returns {boolean}
     */

  }, {
    key: "flipDropdownIfNeeded",
    value: function flipDropdownIfNeeded() {
      var textareaOffset = (0, _element.offset)(this.TEXTAREA);
      var textareaHeight = (0, _element.outerHeight)(this.TEXTAREA);
      var dropdownHeight = this.getDropdownHeight();
      var trimmingContainer = (0, _element.getTrimmingContainer)(this.hot.view.wt.wtTable.TABLE);
      var trimmingContainerScrollTop = trimmingContainer.scrollTop;
      var headersHeight = (0, _element.outerHeight)(this.hot.view.wt.wtTable.THEAD);
      var containerOffset = {
        row: 0,
        col: 0
      };

      if (trimmingContainer !== this.hot.rootWindow) {
        containerOffset = (0, _element.offset)(trimmingContainer);
      }

      var spaceAbove = textareaOffset.top - containerOffset.top - headersHeight + trimmingContainerScrollTop;
      var spaceBelow = trimmingContainer.scrollHeight - spaceAbove - headersHeight - textareaHeight;
      var flipNeeded = dropdownHeight > spaceBelow && spaceAbove > spaceBelow;

      if (flipNeeded) {
        this.flipDropdown(dropdownHeight);
      } else {
        this.unflipDropdown();
      }

      this.limitDropdownIfNeeded(flipNeeded ? spaceAbove : spaceBelow, dropdownHeight);
      return flipNeeded;
    }
    /**
     * Checks if the internal table should generate scrollbar or could be rendered without it.
     *
     * @private
     * @param {number} spaceAvailable The free space as height definded in px available for dropdown list.
     * @param {number} dropdownHeight The dropdown height.
     */

  }, {
    key: "limitDropdownIfNeeded",
    value: function limitDropdownIfNeeded(spaceAvailable, dropdownHeight) {
      if (dropdownHeight > spaceAvailable) {
        var tempHeight = 0;
        var i = 0;
        var lastRowHeight = 0;
        var height = null;

        do {
          lastRowHeight = this.htEditor.getRowHeight(i) || this.htEditor.view.wt.wtSettings.settings.defaultRowHeight;
          tempHeight += lastRowHeight;
          i += 1;
        } while (tempHeight < spaceAvailable);

        height = tempHeight - lastRowHeight;

        if (this.htEditor.flipped) {
          this.htEditor.rootElement.style.top = "".concat(parseInt(this.htEditor.rootElement.style.top, 10) + dropdownHeight - height, "px"); // eslint-disable-line max-len
        }

        this.setDropdownHeight(tempHeight - lastRowHeight);
      }
    }
    /**
     * Configures editor to open it at the top.
     *
     * @private
     * @param {number} dropdownHeight The dropdown height.
     */

  }, {
    key: "flipDropdown",
    value: function flipDropdown(dropdownHeight) {
      var dropdownStyle = this.htEditor.rootElement.style;
      dropdownStyle.position = 'absolute';
      dropdownStyle.top = "".concat(-dropdownHeight, "px");
      this.htEditor.flipped = true;
    }
    /**
     * Configures editor to open it at the bottom.
     *
     * @private
     */

  }, {
    key: "unflipDropdown",
    value: function unflipDropdown() {
      var dropdownStyle = this.htEditor.rootElement.style;

      if (dropdownStyle.position === 'absolute') {
        dropdownStyle.position = '';
        dropdownStyle.top = '';
      }

      this.htEditor.flipped = void 0;
    }
    /**
     * Updates width and height of the internal Handsontable's instance.
     *
     * @private
     */

  }, {
    key: "updateDropdownHeight",
    value: function updateDropdownHeight() {
      var currentDropdownWidth = this.htEditor.getColWidth(0) + (0, _element.getScrollbarWidth)(this.hot.rootDocument) + 2;
      var trimDropdown = this.cellProperties.trimDropdown;
      this.htEditor.updateSettings({
        height: this.getDropdownHeight(),
        width: trimDropdown ? void 0 : currentDropdownWidth
      });
      this.htEditor.view.wt.wtTable.alignOverlaysWithTrimmingContainer();
    }
    /**
     * Sets new height of the internal Handsontable's instance.
     *
     * @private
     * @param {number} height The new dropdown height.
     */

  }, {
    key: "setDropdownHeight",
    value: function setDropdownHeight(height) {
      this.htEditor.updateSettings({
        height: height
      });
    }
    /**
     * Creates new selection on specified row index, or deselects selected cells.
     *
     * @private
     * @param {number|undefined} index The visual row index.
     */

  }, {
    key: "highlightBestMatchingChoice",
    value: function highlightBestMatchingChoice(index) {
      if (typeof index === 'number') {
        this.htEditor.selectCell(index, 0, void 0, void 0, void 0, false);
      } else {
        this.htEditor.deselectCell();
      }
    }
    /**
     * Calculates and return the internal Handsontable's height.
     *
     * @private
     * @returns {number}
     */

  }, {
    key: "getDropdownHeight",
    value: function getDropdownHeight() {
      var firstRowHeight = this.htEditor.getInstance().getRowHeight(0) || 23;
      var visibleRows = this.cellProperties.visibleRows;
      return this.strippedChoices.length >= visibleRows ? visibleRows * firstRowHeight : this.strippedChoices.length * firstRowHeight + 8; // eslint-disable-line max-len
    }
    /**
     * Sanitizes value from potential dangerous tags.
     *
     * @private
     * @param {string} value The value to sanitize.
     * @returns {string}
     */

  }, {
    key: "stripValueIfNeeded",
    value: function stripValueIfNeeded(value) {
      return this.stripValuesIfNeeded([value])[0];
    }
    /**
     * Sanitizes an array of the values from potential dangerous tags.
     *
     * @private
     * @param {string[]} values The value to sanitize.
     * @returns {string[]}
     */

  }, {
    key: "stripValuesIfNeeded",
    value: function stripValuesIfNeeded(values) {
      var allowHtml = this.cellProperties.allowHtml;
      var stringifiedValues = (0, _array.arrayMap)(values, function (value) {
        return (0, _mixed.stringify)(value);
      });
      var strippedValues = (0, _array.arrayMap)(stringifiedValues, function (value) {
        return allowHtml ? value : (0, _string.stripTags)(value);
      });
      return strippedValues;
    }
    /**
     * Captures use of arrow down and up to control their behaviour.
     *
     * @private
     * @param {number} keyCode The keyboard keycode.
     * @returns {boolean}
     */

  }, {
    key: "allowKeyEventPropagation",
    value: function allowKeyEventPropagation(keyCode) {
      var selectedRange = this.htEditor.getSelectedRangeLast();
      var selected = {
        row: selectedRange ? selectedRange.from.row : -1
      };
      var allowed = false;

      if (keyCode === _unicode.KEY_CODES.ARROW_DOWN && selected.row > 0 && selected.row < this.htEditor.countRows() - 1) {
        allowed = true;
      }

      if (keyCode === _unicode.KEY_CODES.ARROW_UP && selected.row > -1) {
        allowed = true;
      }

      return allowed;
    }
    /**
     * OnBeforeKeyDown callback.
     *
     * @private
     * @param {KeyboardEvent} event The keyboard event object.
     */

  }, {
    key: "onBeforeKeyDown",
    value: function onBeforeKeyDown(event) {
      var _this5 = this;

      var priv = privatePool.get(this);
      priv.skipOne = false;

      if ((0, _unicode.isPrintableChar)(event.keyCode) || event.keyCode === _unicode.KEY_CODES.BACKSPACE || event.keyCode === _unicode.KEY_CODES.DELETE || event.keyCode === _unicode.KEY_CODES.INSERT) {
        var timeOffset = 0; // on ctl+c / cmd+c don't update suggestion list

        if (event.keyCode === _unicode.KEY_CODES.C && (event.ctrlKey || event.metaKey)) {
          return;
        }

        if (!this.isOpened()) {
          timeOffset += 10;
        }

        if (this.htEditor) {
          this.hot._registerTimeout(function () {
            _this5.queryChoices(_this5.TEXTAREA.value);

            priv.skipOne = true;
          }, timeOffset);
        }
      }

      _get(_getPrototypeOf(AutocompleteEditor.prototype), "onBeforeKeyDown", this).call(this, event);
    }
  }], [{
    key: "EDITOR_TYPE",
    get: function get() {
      return EDITOR_TYPE;
    }
  }]);

  return AutocompleteEditor;
}(_handsontableEditor.HandsontableEditor);
/**
 * Filters and sorts by relevance.
 *
 * @param {*} value The selected value.
 * @param {string[]} choices The list of available choices.
 * @param {boolean} caseSensitive Indicates if it's sorted by case.
 * @returns {number[]} Array of indexes in original choices array.
 */


exports.AutocompleteEditor = AutocompleteEditor;

AutocompleteEditor.sortByRelevance = function (value, choices, caseSensitive) {
  var choicesRelevance = [];
  var result = [];
  var valueLength = value.length;
  var choicesCount = choices.length;
  var charsLeft;
  var currentItem;
  var i;
  var valueIndex;

  if (valueLength === 0) {
    for (i = 0; i < choicesCount; i++) {
      result.push(i);
    }

    return result;
  }

  for (i = 0; i < choicesCount; i++) {
    currentItem = (0, _string.stripTags)((0, _mixed.stringify)(choices[i]));

    if (caseSensitive) {
      valueIndex = currentItem.indexOf(value);
    } else {
      valueIndex = currentItem.toLowerCase().indexOf(value.toLowerCase());
    }

    if (valueIndex !== -1) {
      charsLeft = currentItem.length - valueIndex - valueLength;
      choicesRelevance.push({
        baseIndex: i,
        index: valueIndex,
        charsLeft: charsLeft,
        value: currentItem
      });
    }
  }

  choicesRelevance.sort(function (a, b) {
    if (b.index === -1) {
      return -1;
    }

    if (a.index === -1) {
      return 1;
    }

    if (a.index < b.index) {
      return -1;
    } else if (b.index < a.index) {
      return 1;
    } else if (a.index === b.index) {
      if (a.charsLeft < b.charsLeft) {
        return -1;
      } else if (a.charsLeft > b.charsLeft) {
        return 1;
      }
    }

    return 0;
  });

  for (i = 0, choicesCount = choicesRelevance.length; i < choicesCount; i++) {
    result.push(choicesRelevance[i].baseIndex);
  }

  return result;
};