"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.values.js");

var _element = require("./../../../helpers/dom/element");

var _border = _interopRequireDefault(require("./border"));

var _coords = _interopRequireDefault(require("./cell/coords"));

var _range = _interopRequireDefault(require("./cell/range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Selection
 */
var Selection = /*#__PURE__*/function () {
  /**
   * @param {object} settings The selection settings object.
   * @param {CellRange} cellRange The cell range instance.
   */
  function Selection(settings, cellRange) {
    _classCallCheck(this, Selection);

    this.settings = settings;
    this.cellRange = cellRange || null;
    this.instanceBorders = {};
    this.classNames = [this.settings.className];
    this.classNameGenerator = this.linearClassNameGenerator(this.settings.className, this.settings.layerLevel);
  }
  /**
   * Each Walkontable clone requires it's own border for every selection. This method creates and returns selection
   * borders per instance.
   *
   * @param {Walkontable} wotInstance The Walkontable instance.
   * @returns {Border}
   */


  _createClass(Selection, [{
    key: "getBorder",
    value: function getBorder(wotInstance) {
      if (!this.instanceBorders[wotInstance.guid]) {
        this.instanceBorders[wotInstance.guid] = new _border.default(wotInstance, this.settings);
      }

      return this.instanceBorders[wotInstance.guid];
    }
    /**
     * Checks if selection is empty.
     *
     * @returns {boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.cellRange === null;
    }
    /**
     * Adds a cell coords to the selection.
     *
     * @param {CellCoords} coords The cell coordinates to add.
     * @returns {Selection}
     */

  }, {
    key: "add",
    value: function add(coords) {
      if (this.isEmpty()) {
        this.cellRange = new _range.default(coords);
      } else {
        this.cellRange.expand(coords);
      }

      return this;
    }
    /**
     * If selection range from or to property equals oldCoords, replace it with newCoords. Return boolean
     * information about success.
     *
     * @param {CellCoords} oldCoords An old cell coordinates to replace.
     * @param {CellCoords} newCoords The new cell coordinates.
     * @returns {boolean}
     */

  }, {
    key: "replace",
    value: function replace(oldCoords, newCoords) {
      if (!this.isEmpty()) {
        if (this.cellRange.from.isEqual(oldCoords)) {
          this.cellRange.from = newCoords;
          return true;
        }

        if (this.cellRange.to.isEqual(oldCoords)) {
          this.cellRange.to = newCoords;
          return true;
        }
      }

      return false;
    }
    /**
     * Clears selection.
     *
     * @returns {Selection}
     */

  }, {
    key: "clear",
    value: function clear() {
      this.cellRange = null;
      return this;
    }
    /**
     * Returns the top left (TL) and bottom right (BR) selection coordinates.
     *
     * @returns {Array} Returns array of coordinates for example `[1, 1, 5, 5]`.
     */

  }, {
    key: "getCorners",
    value: function getCorners() {
      var topLeft = this.cellRange.getOuterTopLeftCorner();
      var bottomRight = this.cellRange.getOuterBottomRightCorner();
      return [topLeft.row, topLeft.col, bottomRight.row, bottomRight.col];
    }
    /**
     * Adds class name to cell element at given coords.
     *
     * @param {Walkontable} wotInstance Walkontable instance.
     * @param {number} sourceRow Cell row coord.
     * @param {number} sourceColumn Cell column coord.
     * @param {string} className Class name.
     * @param {boolean} [markIntersections=false] If `true`, linear className generator will be used to add CSS classes
     *                                            in a continuous way.
     * @returns {Selection}
     */

  }, {
    key: "addClassAtCoords",
    value: function addClassAtCoords(wotInstance, sourceRow, sourceColumn, className) {
      var markIntersections = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var TD = wotInstance.wtTable.getCell(new _coords.default(sourceRow, sourceColumn));

      if (_typeof(TD) === 'object') {
        var cellClassName = className;

        if (markIntersections) {
          cellClassName = this.classNameGenerator(TD);

          if (!this.classNames.includes(cellClassName)) {
            this.classNames.push(cellClassName);
          }
        }

        (0, _element.addClass)(TD, cellClassName);
      }

      return this;
    }
    /**
     * Generate helper for calculating classNames based on previously added base className.
     * The generated className is always generated as a continuation of the previous className. For example, when
     * the currently checked element has 'area-2' className the generated new className will be 'area-3'. When
     * the element doesn't have any classNames than the base className will be returned ('area');.
     *
     * @param {string} baseClassName Base className to be used.
     * @param {number} layerLevelOwner Layer level which the instance of the Selection belongs to.
     * @returns {Function}
     */

  }, {
    key: "linearClassNameGenerator",
    value: function linearClassNameGenerator(baseClassName, layerLevelOwner) {
      // TODO: Make this recursive function Proper Tail Calls (TCO/PTC) friendly.
      return function calcClassName(element) {
        var previousIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        if (layerLevelOwner === 0 || previousIndex === 0) {
          return baseClassName;
        }

        var index = previousIndex >= 0 ? previousIndex : layerLevelOwner;
        var className = baseClassName;
        index -= 1;
        var previousClassName = index === 0 ? baseClassName : "".concat(baseClassName, "-").concat(index);

        if ((0, _element.hasClass)(element, previousClassName)) {
          var currentLayer = index + 1;
          className = "".concat(baseClassName, "-").concat(currentLayer);
        } else {
          className = calcClassName(element, index);
        }

        return className;
      };
    }
    /**
     * @param {Walkontable} wotInstance The Walkontable instance.
     */

  }, {
    key: "draw",
    value: function draw(wotInstance) {
      if (this.isEmpty()) {
        if (this.settings.border) {
          this.getBorder(wotInstance).disappear();
        }

        return;
      }

      var renderedRows = wotInstance.wtTable.getRenderedRowsCount();
      var renderedColumns = wotInstance.wtTable.getRenderedColumnsCount();
      var corners = this.getCorners();

      var _corners = _slicedToArray(corners, 4),
          topRow = _corners[0],
          topColumn = _corners[1],
          bottomRow = _corners[2],
          bottomColumn = _corners[3];

      if (topColumn !== null && bottomColumn !== null) {
        for (var column = 0; column < renderedColumns; column += 1) {
          var sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(column);

          if (sourceCol >= topColumn && sourceCol <= bottomColumn) {
            var TH = wotInstance.wtTable.getColumnHeader(sourceCol);

            if (TH) {
              var newClasses = [];

              if (this.settings.highlightHeaderClassName) {
                newClasses.push(this.settings.highlightHeaderClassName);
              }

              if (this.settings.highlightColumnClassName) {
                newClasses.push(this.settings.highlightColumnClassName);
              }

              (0, _element.addClass)(TH, newClasses);
            }
          }
        }
      }

      if (topRow !== null && bottomRow !== null) {
        for (var row = 0; row < renderedRows; row += 1) {
          var sourceRow = wotInstance.wtTable.rowFilter.renderedToSource(row);

          if (sourceRow >= topRow && sourceRow <= bottomRow) {
            var _TH = wotInstance.wtTable.getRowHeader(sourceRow);

            if (_TH) {
              var _newClasses = [];

              if (this.settings.highlightHeaderClassName) {
                _newClasses.push(this.settings.highlightHeaderClassName);
              }

              if (this.settings.highlightRowClassName) {
                _newClasses.push(this.settings.highlightRowClassName);
              }

              (0, _element.addClass)(_TH, _newClasses);
            }
          }

          if (topColumn !== null && bottomColumn !== null) {
            for (var _column = 0; _column < renderedColumns; _column += 1) {
              var _sourceCol = wotInstance.wtTable.columnFilter.renderedToSource(_column);

              if (sourceRow >= topRow && sourceRow <= bottomRow && _sourceCol >= topColumn && _sourceCol <= bottomColumn) {
                // selected cell
                if (this.settings.className) {
                  this.addClassAtCoords(wotInstance, sourceRow, _sourceCol, this.settings.className, this.settings.markIntersections);
                }
              } else if (sourceRow >= topRow && sourceRow <= bottomRow) {
                // selection is in this row
                if (this.settings.highlightRowClassName) {
                  this.addClassAtCoords(wotInstance, sourceRow, _sourceCol, this.settings.highlightRowClassName);
                }
              } else if (_sourceCol >= topColumn && _sourceCol <= bottomColumn) {
                // selection is in this column
                if (this.settings.highlightColumnClassName) {
                  this.addClassAtCoords(wotInstance, sourceRow, _sourceCol, this.settings.highlightColumnClassName);
                }
              }

              var additionalSelectionClass = wotInstance.getSetting('onAfterDrawSelection', sourceRow, _sourceCol, this.settings.layerLevel);

              if (typeof additionalSelectionClass === 'string') {
                this.addClassAtCoords(wotInstance, sourceRow, _sourceCol, additionalSelectionClass);
              }
            }
          }
        }
      }

      wotInstance.getSetting('onBeforeDrawBorders', corners, this.settings.className);

      if (this.settings.border) {
        // warning! border.appear modifies corners!
        this.getBorder(wotInstance).appear(corners);
      }
    }
    /**
     * Cleans up all the DOM state related to a Selection instance. Call this prior to deleting a Selection instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      Object.values(this.instanceBorders).forEach(function (border) {
        return border.destroy();
      });
    }
  }]);

  return Selection;
}();

var _default = Selection;
exports.default = _default;