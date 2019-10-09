class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

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

  // http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

  inOrder(node) {
    if(node === null) return [];
    let result = [];
    let stack = [];
    let pointerNode = node;
    while(stack.length !== 0 || pointerNode !== null) {
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

  // http://maxinrui.com/index.php/2018/06/19/binary-tree-preorder-inorder-postorder-traverse-iteratively-in-javascript/

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
    this.root = null;
  }

  add(value) {
    let node = this.root;
    return recurse(value, node);
  }

  contains(value) {
    let node = this.root;
    return recurseFind(node, value);
  }

}

function recurse(value, node) {
  let dir;
  value > node.value ? dir = 'right' : dir = 'left';
  if(node[dir]) {
    return recurse(value, node[dir]);
  }
  return node[dir] = new Node(value);
}

function recurseFind(node, value) {
  if(node.key === null) {
    return null;
  }
  const nodeKey = parseInt(node.value);
  if(value < nodeKey) {
    return recurseFind(node.left, value);
  } else if(value > nodeKey) {
    return recurseFind(node.right, value);
  } else {
    return false;
  }

}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};