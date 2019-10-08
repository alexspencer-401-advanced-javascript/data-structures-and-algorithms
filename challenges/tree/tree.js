
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
    let newArr = [];
    if(node !== null) {
      newArr.push(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
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