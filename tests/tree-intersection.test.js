const { Node, BinaryTree } = require('../challenges/tree/tree');
const treeIntersection = require('../challenges/treeIntersection/tree-intersection');

describe('tree intersection testing', () => {

  it('can successfully return intersection values', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = new Node('F');
    tree1.root.left = new Node('B');
    tree1.root.right = new Node('G');
    tree2.root = new Node('A');
    tree2.root.left = new Node('B');
    tree2.root.right = new Node('G');
    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual(['B', 'G']);
  });
});