const { Node, BinarySearchTree, BinaryTree } = require('../challenges/tree/tree');

describe('tree testing', () => {

  it('can successfully make an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('can successfully make a tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.left.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    // console.log(tree);
    // expect(tree).toEqual({});
  });
});