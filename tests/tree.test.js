const { Node, BinarySearchTree, BinaryTree } = require('../challenges/tree/tree');

describe('tree testing', () => {

  it('can successfully make an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('can successfully make a tree with single root', () => {
    const tree = new BinaryTree();
    tree.root = new Node('root');
    expect(tree.root.value).toBe('root');
  });
  it('can successfully make a tree with right and left child', () => {
    const tree = new BinaryTree();
    tree.root = new Node('root');
    tree.root.left = new Node('left');
    tree.root.right = new Node('right');
    expect(tree.root.value).toBe('root');
    expect(tree.root.left.value).toBe('left');
    expect(tree.root.right.value).toBe('right');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    expect(tree.preOrder(tree.root)).toEqual(['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    expect(tree.inOrder(tree.root)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    expect(tree.postOrder(tree.root)).toEqual(['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']);
  });

  it('can successfully add a node with a certain value to where it is supposed to go', () => {
    const bsTree = new BinarySearchTree();
    bsTree.root = new Node('F');
    bsTree.root.left = new Node('B');
    bsTree.root.left.left = new Node('A');
    bsTree.root.left.right = new Node('D');
    bsTree.root.left.right.right = new Node('E');
    bsTree.root.right = new Node('G');
    bsTree.root.right.right = new Node('I');
    bsTree.root.right.right.left = new Node('H');
    bsTree.add('C');
    expect(bsTree.root.left.right.left.value).toBe('C');
  });

  it('can successfully locate a node with the value provided', () => {
    const bsTree = new BinarySearchTree();
    bsTree.root = new Node('F');
    bsTree.root.left = new Node('B');
    bsTree.root.left.left = new Node('A');
    bsTree.root.left.right = new Node('D');
    bsTree.root.left.right.right = new Node('E');
    bsTree.root.right = new Node('G');
    bsTree.root.right.right = new Node('I');
    bsTree.root.right.right.left = new Node('H');
    expect(bsTree.contains('B')).toBe(true);
    expect(bsTree.contains('Z')).toBe(false);
  });

});