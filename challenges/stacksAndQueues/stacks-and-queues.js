class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.top === null) {
      return this.top = newNode;
    }
  }

  pop() {
    if(this.top) return this.value;
    this.top = this.top.next;
  } 

  peek() {
    return this.top.value;
  }

}
module.exports = {
  Stack,
  Node
};

