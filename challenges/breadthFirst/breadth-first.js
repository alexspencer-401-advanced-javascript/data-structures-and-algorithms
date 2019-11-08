class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(value) {
    let collection = [this.root];

    while(collection.length) {
      let node = collection.shift();

      if(node.data === value) return true;
      else collection.push(...node.children);
    }
    return false;
  }
}

module.exports = {
  BinaryTree,
  Node
};