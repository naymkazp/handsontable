"use strict";

require("core-js/modules/es.array.find");

describe('WalkontableOverlay', function () {
  beforeEach(function () {
    this.$wrapper = $('<div></div>').addClass('handsontable').css({
      overflow: 'hidden'
    });
    this.$wrapper.width(200).height(200);
    this.$container = $('<div></div>');
    this.$table = $('<table></table>').addClass('htCore'); // create a table that is not attached to document

    this.$wrapper.append(this.$container);
    this.$container.append(this.$table);
    this.$wrapper.appendTo('body');
    createDataArray(200, 200);
    $('.jasmine_html-reporter').hide(); // Workaround for making the test more predictable.
  });
  afterEach(function () {
    $('.jasmine_html-reporter').show(); // Workaround for making the test more predictable.

    this.$wrapper.remove();
    this.wotInstance.destroy();
  });
  it('should cloned overlays have to have proper dimensions (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    expect($(wt.wtTable.holder).width()).toBe(200);
    expect($(wt.wtTable.holder).height()).toBe(200);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(185); // 200px - 15px scrollbar width

    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(185);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).width()).toBe(185);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).height()).toBe(47);
  });
  it('should cloned overlays have to have proper dimensions (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    var totalColumnsWidth = getTotalColumns() * 50; // total columns * 50px (cell width)

    expect($(wt.wtTable.holder).width()).toBe(clientWidth);
    expect($(wt.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).height()).toBe(47);
  });
  it('should cloned overlays have to have proper dimensions after table scroll (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 3); // -1 - 2 (fixedRowsBottom)

    wt.draw();
    expect($(wt.wtTable.holder).width()).toBe(200);
    expect($(wt.wtTable.holder).height()).toBe(200);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(185); // 200px - 15px scrollbar width

    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(185);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).width()).toBe(185);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).height()).toBe(47);
  });
  it('should cloned overlays have to have proper dimensions after table scroll (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 3); // -1 - 2 (fixedRowsBottom)

    wt.draw();
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    var totalColumnsWidth = getTotalColumns() * 50; // total columns * 50px (cell width)

    expect($(wt.wtTable.holder).width()).toBe(clientWidth);
    expect($(wt.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).width()).toBe(100);
    expect($(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable.holder).height()).toBe(47);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.bottomOverlay.clone.wtTable.holder).height()).toBe(47);
  });
  it('should cloned overlays have to have proper positions (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 208,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 55,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 55,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 193,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 146,
      bottom: 193,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 146,
      bottom: 193,
      left: 8
    }));
  });
  it('should cloned overlays have to have proper positions (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var documentClientHeight = document.documentElement.clientHeight;
    var totalRowsHight = getTotalRows() * 23 + 1; // total columns * 23px + 1px cell top border

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: totalRowsHight + 8,
      // 8 default browser margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 47 + 8,
      // 2 fixed top rows * 23px + body margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 47 + 8,
      // 2 fixed top rows * 23px + body margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: totalRowsHight + 8,
      // 8 default browser margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - 47,
      // 2 fixed bottom rows * 23px + 1px cell top border
      bottom: documentClientHeight,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - 47,
      // 2 fixed bottom rows * 23px + 1px cell top border
      bottom: documentClientHeight,
      left: 8
    }));
  });
  it('should cloned overlays have to have proper positions after table scroll (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 3); // -1 - 2 (fixedRowsBottom)

    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 208,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 55,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 55,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 193,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 146,
      bottom: 193,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.bottomOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 146,
      bottom: 193,
      left: 8
    }));
  });
  it('should cloned overlays have to have proper positions after table scroll (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      fixedRowsBottom: 2
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 3); // -1 - 2 (fixedRowsBottom)

    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var documentClientHeight = document.documentElement.clientHeight;
    var documentClientWidth = document.documentElement.clientWidth;
    var totalRowsHeight = getTotalRows() * 23 + 1; // total columns * 23px + 1px cell top border

    var totalColumnsWidth = getTotalColumns() * 50; // total columns * 50px (cell width)

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: documentClientHeight - totalRowsHeight,
      bottom: documentClientHeight,
      left: documentClientWidth - totalColumnsWidth
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 0,
      bottom: 47,
      left: documentClientWidth - totalColumnsWidth
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 0,
      bottom: 47,
      left: 0
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - totalRowsHeight,
      bottom: documentClientHeight,
      left: 0
    }));
    expect(getTableRect(wt.wtOverlays.bottomLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - 47,
      // 2 fixed bottom rows * 23px + 1px cell top border
      bottom: documentClientHeight,
      left: 0
    }));
    expect(getTableRect(wt.wtOverlays.bottomOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - 47,
      // 2 fixed bottom rows * 23px + 1px cell top border
      bottom: documentClientHeight,
      left: documentClientWidth - totalColumnsWidth
    }));
  });
  it('should cloned header overlays have to have proper dimensions (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    expect($(wt.wtTable.holder).width()).toBe(200);
    expect($(wt.wtTable.holder).height()).toBe(200);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(185); // 200px - 15px scrollbar width

    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(23);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(23);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(185);
  });
  it('should cloned header overlays have to have proper dimensions (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    var totalColumnsWidth = getTotalColumns() * 50 + 50; // total columns * 50px (cell width) + 50 (row header)

    expect($(wt.wtTable.holder).width()).toBe(clientWidth);
    expect($(wt.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(23);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(23);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(clientHeight);
  });
  it('should cloned header overlays have to have proper dimensions after table scroll (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 1);
    wt.draw();
    expect($(wt.wtTable.holder).width()).toBe(200);
    expect($(wt.wtTable.holder).height()).toBe(200);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(185); // 200px - 15px scrollbar width

    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(185);
  });
  it('should cloned header overlays have to have proper dimensions after table scroll (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 1);
    wt.draw();
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight; // total columns * 50px (cell width) + 50px (row header) + 1px (header border left width)

    var totalColumnsWidth = getTotalColumns() * 50 + 50 + 1;
    expect($(wt.wtTable.holder).width()).toBe(clientWidth);
    expect($(wt.wtTable.holder).height()).toBe(clientHeight);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(clientHeight);
  });
  it('should cloned header overlays have to have proper positions (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 208,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 31,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 31,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 193,
      left: 8
    }));
  });
  it('should cloned header overlays have to have proper positions (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    }; // total columns * 23px + 23px (top header) + 1px (cell top border)


    var totalRowsHight = getTotalRows() * 23 + 23 + 1;
    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: totalRowsHight + 8,
      // 8 default browser margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 23 + 8,
      // 1 top row * 23px + body margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 23 + 8,
      // 1 top row * 23px + body margin
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: totalRowsHight + 8,
      // 8 default browser margin
      left: 8
    }));
  });
  it('should cloned header overlays have to have proper positions after table scroll (overflow hidden)', function () {
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 1);
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 208,
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 23 + 8 + 1,
      // 1 top row * 23px + body margin + 1px (innerBorderTop)
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 23 + 8 + 1,
      // 1 top row * 23px + body margin + 1px (innerBorderTop)
      left: 8
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 8,
      bottom: 193,
      left: 8
    }));
  });
  it('should cloned header overlays have to have proper positions after table scroll (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    wt.scrollViewportHorizontally(getTotalColumns() - 1);
    wt.scrollViewportVertically(getTotalRows() - 1);
    wt.draw();

    var getTableRect = function getTableRect(wtTable) {
      var rect = wtTable.holder.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left
      };
    };

    var documentClientHeight = document.documentElement.clientHeight;
    var documentClientWidth = document.documentElement.clientWidth; // total columns * 23px + 23px (column header) + 1px (innerBorderTop)

    var totalRowsHeight = getTotalRows() * 23 + 23 + 1; // total columns * 50px (cell width) + 50px (row header)

    var totalColumnsWidth = getTotalColumns() * 50 + 50;
    var baseRect = getTableRect(wt.wtTable);
    expect(baseRect).toEqual(jasmine.objectContaining({
      top: documentClientHeight - totalRowsHeight,
      bottom: documentClientHeight + 1,
      // +1 innerBorderTop
      left: documentClientWidth - totalColumnsWidth
    }));
    expect(getTableRect(wt.wtOverlays.topOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 0,
      bottom: 24,
      left: documentClientWidth - totalColumnsWidth
    }));
    expect(getTableRect(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: 0,
      bottom: 24,
      left: 0
    }));
    expect(getTableRect(wt.wtOverlays.leftOverlay.clone.wtTable)).toEqual(jasmine.objectContaining({
      top: documentClientHeight - totalRowsHeight,
      bottom: documentClientHeight + 1,
      // +1 innerBorderTop
      left: 0
    }));
  });
  it('should adjust the header overlays sizes after table scroll (window object as scrollable element)', function () {
    spec().$wrapper.css('overflow', '').css('width', '').css('height', '');
    var $expander = $('<div></div>').css({
      paddingBottom: '20000px'
    });
    spec().$wrapper.after($expander);
    createDataArray(5, 5);
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    window.scrollTo(0, 20);
    wt.draw(); // total columns * 50px (cell width) + 50px (row header)

    var totalColumnsWidth = getTotalColumns() * 50 + 50; // total rows * 23px (cell height) + 24px (column header) + 1px (border top for the first header)

    var totalRowsHeight = getTotalRows() * 23 + 24 + 1;
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).width()).toBe(totalColumnsWidth);
    expect($(wt.wtOverlays.topOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.holder).height()).toBe(24); // 23px + 1px (innerBorderTop)

    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).width()).toBe(50);
    expect($(wt.wtOverlays.leftOverlay.clone.wtTable.holder).height()).toBe(totalRowsHeight);
    $expander.remove();
  });
  it('should cloned overlays have to have all borders when an empty dataset is passed', function () {
    createDataArray(0, 0);
    var wt = walkontable({
      data: getData,
      totalRows: getTotalRows,
      totalColumns: getTotalColumns,
      rowHeaders: [function (row, TH) {
        // makes top overlay
        TH.innerHTML = row + 1;
      }],
      columnHeaders: [function (column, TH) {
        // makes left overlay
        TH.innerHTML = column + 1;
      }]
    });
    wt.draw();
    expect(getTableTopClone().find('thead tr th').css('border-bottom-width')).toBe('1px');
  });
});