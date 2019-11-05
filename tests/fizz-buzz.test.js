const { Node, BinaryTree } = require('../challenges/tree/tree');
const { fizzBuzzChallenge } = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

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

  it('can successfully return fizz for a value divisible by 3', () => {
    const tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(6);
    tree.root.left.right = new Node(4);
    tree.root.left.left = new Node(15);
    tree.root.left.left.right = new Node(30);
    const result = fizzBuzzChallenge(tree);
    expect(result.root.value).toBe('FizzBuzz');
    expect(result.root.left.value).toEqual('Fizz');
    expect(result.root.left.left.value).toEqual('FizzBuzz');
    expect(result.root.left.right.value).toEqual(4);
    expect(result.root.left.left.right.value).toEqual('FizzBuzz');
  });


});