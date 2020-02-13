import RowsRenderer from 'walkontable/renderer/rows';
import OrderView from 'walkontable/utils/orderView/view';
jest.mock('walkontable/utils/orderView/view');

function createRenderer() {
  var rootNode = document.createElement('tbody');
  var renderer = new RowsRenderer(rootNode);
  return {
    renderer: renderer,
    rootNode: rootNode
  };
}

describe('RowsRenderer', function () {
  beforeEach(function () {
    OrderView.mockClear();
  });
  it('should be correctly setup', function () {
    var _createRenderer = createRenderer(),
        renderer = _createRenderer.renderer,
        rootNode = _createRenderer.rootNode;

    expect(renderer.nodeType).toBe('TR');
    expect(renderer.orderView.constructor).toHaveBeenCalledWith(rootNode, jasmine.any(Function), 'TR');
  });
  it('should get rendered node through orderView method', function () {
    var _createRenderer2 = createRenderer(),
        renderer = _createRenderer2.renderer;

    renderer.orderView.getNode.mockReturnValue('x');
    expect(renderer.getRenderedNode(0)).toBe('x');
    expect(renderer.orderView.getNode).toHaveBeenCalledWith(0);
    renderer.getRenderedNode(2);
    expect(renderer.orderView.getNode).toHaveBeenCalledWith(2);
    renderer.getRenderedNode(99);
    expect(renderer.orderView.getNode).toHaveBeenCalledWith(99);
  });
});