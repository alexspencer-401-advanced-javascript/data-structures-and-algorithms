
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node) {
    if(node === null) return [];

    let stack = [];
    let result = [];

    stack.push(node);

    while(stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
    return result;

  }

  inOrder(node) {
    let newArr = [];
    if(node !== null) {
      this.inOrder(node.left);
      newArr.push(node.value);
      this.inOrder(node.right);
    }
    return newArr;
  }

  postOrder() {

  }

}

class BinarySearchTree {
  constructor() {
  }

  add(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    }
    else {
      this.insertNode(this.root, newNode);
    }

    // insertNode(newNode.value < node.value) {
    //   if(node.left === null) node.left = newNode;
    //   this.insertNode(node.left, newNode);
    // }

  }

  contains() {

  }

}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};