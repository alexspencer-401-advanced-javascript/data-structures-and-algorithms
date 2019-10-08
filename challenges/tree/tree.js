
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// helpful resource here: http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // helpful resource here: http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/
  
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
  
  // helpful resource here: http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/
  
  inOrder(node) {
    if(node === null) return [];
    let result = [];
    let stack = [];
    let pointerNode = node;
    while(stack.length !==0 || pointerNode !== null) {
      if(pointerNode !== null) {
        stack.push(pointerNode);
        pointerNode = pointerNode.left;
      } else {
        pointerNode = stack.pop();
        result.push(pointerNode.value);
        pointerNode = pointerNode.right;
      }
    }
    return result;
  }
  
  // helpful resource here: http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

  postOrder(node) {
    if(node === null) return [];
    let result = [];
    let stack = [];
    stack.push(node);
    while(stack.length !== 0) {
      let pointer = stack.pop();
      result.unshift(pointer.value);
      if(pointer.left) {
        stack.push(pointer.left);
      }
      if(pointer.right) {
        stack.push(pointer.right);
      }
    }
    return result;
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