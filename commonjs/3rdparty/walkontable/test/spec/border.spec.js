"use strict";

require("core-js/modules/es.array.find");

describe('WalkontableBorder', function () {
  var debug = false;
  beforeEach(function () {
    this.$wrapper = $('<div></div>').addClass('handsontable');
    this.$container = $('<div></div>');
    this.$wrapper.width(100).height(200);
    this.$table = $('<table></table>').addClass('htCore');
    this.$wrapper.append(this.$container);
    this.$container.append(this.$table);
    this.$wrapper.appendTo('body');
    createDataArray();
  });
  afterEach(function () {
    if (!debug) {
      $('.wtHolder').remove();
    }

    this.$wrapper.remove();
    this.wotInstance.destroy();
  });
  it('should add/remove border to selection when cell is clicked', function () {
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 5,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 1,
            color: 'red'
          }
        })
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td1 = spec().$table.find('tbody tr:eq(1) td:eq(0)');
    var $td2 = spec().$table.find('tbody tr:eq(2) td:eq(1)');
    var $top = $(wt.selections.getCell().getBorder(wt).top);
    var $right = $(wt.selections.getCell().getBorder(wt).right);
    var $bottom = $(wt.selections.getCell().getBorder(wt).bottom);
    var $left = $(wt.selections.getCell().getBorder(wt).left);
    $td1.simulate('mousedown');
    expect($top.css('height')).toBe('1px');
    expect($top.position().top).toBe(23);
    expect($top.position().left).toBe(0);
    expect($right.css('width')).toBe('1px');
    expect($right.position().top).toBe(23);
    expect($right.position().left).toBe(49);
    expect($bottom.css('height')).toBe('1px');
    expect($bottom.position().top).toBe(46);
    expect($bottom.position().left).toBe(0);
    expect($left.css('width')).toBe('1px');
    expect($left.position().top).toBe(23);
    expect($left.position().left).toBe(0);
    $td2.simulate('mousedown');
    expect($top.css('height')).toBe('1px');
    expect($top.position().top).toBe(46);
    expect($top.position().left).toBe(49);
    expect($right.css('width')).toBe('1px');
    expect($right.position().top).toBe(46);
    expect($right.position().left).toBe(99);
    expect($bottom.css('height')).toBe('1px');
    expect($bottom.position().top).toBe(69);
    expect($bottom.position().left).toBe(49);
    expect($left.css('width')).toBe('1px');
    expect($left.position().top).toBe(46);
    expect($left.position().left).toBe(49);
  });
  it('should add/remove border to selection when cell is clicked and the table has only one column', function () {
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 1,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 1,
            color: 'red'
          }
        })
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td1 = spec().$table.find('tbody tr:eq(1) td:eq(0)');
    var $top = $(wt.selections.getCell().getBorder(wt).top);
    var $right = $(wt.selections.getCell().getBorder(wt).right);
    var $bottom = $(wt.selections.getCell().getBorder(wt).bottom);
    var $left = $(wt.selections.getCell().getBorder(wt).left);
    $td1.simulate('mousedown');
    expect($top.css('height')).toBe('1px');
    expect($top.position().top).toBe(23);
    expect($top.position().left).toBe(0);
    expect($right.css('width')).toBe('1px');
    expect($right.position().top).toBe(23);
    expect($right.position().left).toBe(49);
    expect($bottom.css('height')).toBe('1px');
    expect($bottom.position().top).toBe(46);
    expect($bottom.position().left).toBe(0);
    expect($left.css('width')).toBe('1px');
    expect($left.position().top).toBe(23);
    expect($left.position().left).toBe(0);
  });
  it('should properly add a selection border on an entirely selected column', function () {
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 2,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 1,
            color: 'red'
          }
        })
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    wt.selections.getCell().add(new Walkontable.CellCoords(0, 0));
    wt.selections.getCell().add(new Walkontable.CellCoords(4, 0));
    wt.draw(true);
    var $top = $(wt.selections.getCell().getBorder(wt).top);
    var $right = $(wt.selections.getCell().getBorder(wt).right);
    var $bottom = $(wt.selections.getCell().getBorder(wt).bottom);
    var $left = $(wt.selections.getCell().getBorder(wt).left);
    expect($top.css('height')).toBe('1px');
    expect($top.position().top).toBe(0);
    expect($top.position().left).toBe(0);
    expect($right.css('width')).toBe('1px');
    expect($right.position().top).toBe(0);
    expect($right.position().left).toBe(49);
    expect($bottom.css('height')).toBe('1px');
    expect($bottom.position().top).toBe(115);
    expect($bottom.position().left).toBe(0);
    expect($left.css('width')).toBe('1px');
    expect($left.position().top).toBe(0);
    expect($left.position().left).toBe(0);
  });
  it('should add/remove corner to selection when cell is clicked', function () {
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 5,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 2,
            color: 'green',
            cornerVisible: function cornerVisible() {
              return true;
            }
          }
        }),
        area: new Walkontable.Selection({})
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td1 = spec().$table.find('tbody tr:eq(1) td:eq(0)');
    var $td2 = spec().$table.find('tbody tr:eq(2) td:eq(1)');
    var $corner = $(wt.selections.getCell().getBorder(wt).corner);
    $td1.simulate('mousedown');
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect($corner.position().top).toBe(42);
    expect($corner.position().left).toBe(45);
    $td2.simulate('mousedown');
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect($corner.position().top).toBe(65);
    expect($corner.position().left).toBe(95);
  });
  it('should draw only one corner if selection is added between overlays', function () {
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 5,
      fixedColumnsLeft: 2,
      fixedRowsTop: 2,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          className: 'current'
        }),
        area: new Walkontable.Selection({
          className: 'area',
          border: {
            cornerVisible: function cornerVisible() {
              return true;
            }
          }
        })
      })
    });
    wt.selections.createOrGetArea().add(new Walkontable.CellCoords(0, 0));
    wt.selections.createOrGetArea().add(new Walkontable.CellCoords(2, 2));
    wt.draw();
    var corners = spec().$wrapper.find('.wtBorder.corner:visible');
    expect(corners.length).toBe(1);
  });
  it('should move the fill handle / corner border to the left, if in the position it would overlap the container (e.g.: far-right)', function () {
    spec().$wrapper.css({
      overflow: 'hidden',
      width: '200px'
    });
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 4,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 2,
            color: 'green',
            cornerVisible: function cornerVisible() {
              return true;
            }
          }
        }),
        area: new Walkontable.Selection({})
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td1 = spec().$table.find('tbody tr:eq(1) td:eq(0)');
    var $td2 = spec().$table.find('tbody tr:eq(3) td:eq(3)');
    var $td3 = spec().$table.find('tbody tr:eq(2) td:eq(1)');
    var $corner = $(wt.selections.getCell().getBorder(wt).corner);
    $td1.simulate('mousedown');
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect($corner.position().top).toBe(42);
    expect($corner.position().left).toBe(45);
    expect(spec().$wrapper[0].clientWidth === spec().$wrapper[0].scrollWidth).toBe(true);
    $td2.simulate('mousedown');
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect($corner.position().top).toBe(88);
    expect($corner.position().left).toBe(193);
    expect(spec().$wrapper[0].clientWidth === spec().$wrapper[0].scrollWidth).toBe(true);
    $td3.simulate('mousedown');
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect($corner.position().top).toBe(65);
    expect($corner.position().left).toBe(95);
    expect(spec().$wrapper[0].clientWidth === spec().$wrapper[0].scrollWidth).toBe(true);
  });
  it('should move the fill handle / corner border to the top, if in the position it would overlap the container (e.g.: far-bottom)', function () {
    spec().$wrapper.css({
      height: '',
      marginTop: '2000px'
    });
    var wt = walkontable({
      data: getData,
      totalRows: 5,
      totalColumns: 1,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 2,
            color: 'green',
            cornerVisible: function cornerVisible() {
              return true;
            }
          }
        }),
        area: new Walkontable.Selection({})
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td = spec().$table.find('tbody tr:last-of-type td:last-of-type');
    var $corner = $(wt.selections.getCell().getBorder(wt).corner);
    $td.simulate('mousedown');
    wt.draw();
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect(spec().$table.css('height')).toBe('116px');
    expect($corner.position().top).toBe(109); // table.height - corner.height - corner.borderTop

    expect($corner.position().left).toBe(45);
    expect(spec().$wrapper[0].clientHeight === spec().$wrapper[0].scrollHeight).toBe(true);
  });
  it('should move the corner border to the top-left, if is not enough area on the bottom-right corner of container', function () {
    spec().$wrapper.css({
      height: '',
      width: '50px',
      marginTop: '2000px',
      marginLeft: '2000px'
    });
    var wt = walkontable({
      data: getData,
      totalRows: 1,
      totalColumns: 1,
      selections: createSelectionController({
        current: new Walkontable.Selection({
          border: {
            width: 2,
            color: 'green',
            cornerVisible: function cornerVisible() {
              return true;
            }
          }
        }),
        area: new Walkontable.Selection({})
      }),
      onCellMouseDown: function onCellMouseDown(event, coords) {
        wt.selections.getCell().clear();
        wt.selections.getCell().add(coords);
        wt.draw();
      }
    });
    wt.draw();
    var $td = spec().$table.find('tbody tr:last-of-type td:last-of-type');
    var $corner = $(wt.selections.getCell().getBorder(wt).corner);
    $td.simulate('mousedown');
    wt.draw();
    expect($corner.css('width')).toBe('6px');
    expect($corner.css('height')).toBe('6px');
    expect(spec().$table.css('height')).toBe('24px');
    expect($corner.position().top).toBe(17); // table.height - corner.height - corner.borderTop

    expect($corner.position().left).toBe(43);
    expect(spec().$wrapper[0].clientHeight === spec().$wrapper[0].scrollHeight).toBe(true);
    expect(spec().$wrapper[0].clientWidth === spec().$wrapper[0].scrollWidth).toBe(true);
  });
});